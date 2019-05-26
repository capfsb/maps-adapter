class YandexMapAdapter extends AbstractMapAdapter {
	constructor() {
		super(...arguments);
		this.map = null;
	}

	start() {
		ymaps.ready(() => {
			$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

			this.map = new ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 7,
				controls: []
			});
		})
	}

	zoom(val) {
		this.map.setZoom(this.map.getZoom() + val, {duration: 200, timingFunction: 'ease-in-out'});
	}

	zoomIn() {
		this.zoom(1);
	}

	zoomOut() {
		this.zoom(-1);
	}
}