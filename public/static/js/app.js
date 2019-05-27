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

	adapter.setCenter([55.76, 37.64]);

	adapter.addPoint([55.484758, 37.738521]);
	adapter.addPoint([55.684758, 37.738521]);
	adapter.addPoint([55.684758, 37.538521]);
	adapter.addPoint([55.484758, 37.538521]);

	adapter.onCoordinatesClick(coords => {
		adapter.addPoint(coords);
		$('.js-reverse-geocoder').text(JSON.stringify(coords))
	});

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
});