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

	adapter.addPoint([43.12386679361278, 131.88086351500806]);
	adapter.addPoint([43.12486911974214, 131.96772417174634]);
	adapter.addPoint([43.08250653050789, 131.9550212298518]);
	adapter.addPoint([43.08902575991306, 131.85957750426587]);

	adapter.onCoordinatesClick(coords => {
		adapter.addPoint(coords);
		$('.js-reverse-geocoder').text(JSON.stringify(coords))
	});

	let routeBuilder = new RouteBuilder();

	routeBuilder.getRoute().then(data => {
		let route = data.routes[0];
		route.legs.forEach(leg => leg.steps.forEach(step => {
			adapter.addPolyline(polyline.decode(step.geometry))
		}));
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