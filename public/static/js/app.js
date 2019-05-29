$(async () => {
	let mapType = await chooseMapType;
	let adapter;

	if (mapType === 'yandex') {
		adapter = new YandexMapAdapter();
	} else if (mapType === '2gis') {
		adapter = new TwoGisMapAdapter()
	} else if (mapType === 'google') {
		adapter = new GoogleMapAdapter();
	} else {
		return;
	}

	let overlay = new Overlay('.js-map-container');

	await adapter.start();

	adapter.setCenter([43.1236162095144, 131.92480882750806]);

	adapter.onCoordinatesClick(coords => {
		adapter.addPoint(coords);
		$('.js-reverse-geocoder').text(JSON.stringify(coords))
	});

	let routeBuilder = new RouteBuilder(adapter);

	routeBuilder.buildRoute('from', 'to').then(points => adapter.centerMapWithCoordinates(points))

	overlay.addControl(new ZoomControl({
		onZoomIn: () => adapter.zoomIn(),
		onZoomOut: () => adapter.zoomOut()
	}));

	overlay.addControl(new FullScreenControl({
		onFullScreenIn: () => {
			overlay.fullScreenIn();
			adapter.fitToViewport();
		},
		onFullScreenOut: () => {
			overlay.fullScreenOut();
			adapter.fitToViewport();
		},
	}));

	/** Парсим точки из булетинов и оставляем, только уникальные, добавляем их на карту */
	let allPoints = $('[data-coordinates]').get().map(value => $(value).attr('data-coordinates'));
	let uniquePoints = [...new Set(allPoints)];

	uniquePoints.forEach(pointStr => {
		adapter.addPoint(JSON.parse(pointStr))
	})

});