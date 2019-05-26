$(async () => {
	let overlay = new Overlay('.js-map-container');
	let adapter = new YandexMapAdapter();

	await adapter.start();

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