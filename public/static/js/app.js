$(async () => {
	let overlay = new Overlay('.js-map-container');
	let adapter = new YandexMapAdapter();

	await adapter.start();

	adapter.addPoint([55.484758, 37.738521]);
	adapter.addPoint([55.684758, 37.738521]);
	adapter.addPoint([55.684758, 37.538521]);
	adapter.addPoint([55.484758, 37.538521]);

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