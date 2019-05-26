$(() => {
	let overlay = new Overlay('.js-map-container');
	let adapter = new YandexMapAdapter();

	overlay.addControl(new ZoomControl({
		onZoomIn: () => adapter.zoomIn(),
		onZoomOut: () => adapter.zoomOut()
	}));

	adapter.start();
});