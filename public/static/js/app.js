$(() => {
	let overlay = new Overlay('.js-map-container');

	overlay.addControl(new ZoomControl({
		onZoomIn: () => console.log('plus'),
		onZoomOut: () => console.log('minus')
	}));


	let adapter = new YandexMapAdapter();
	adapter.start();
});