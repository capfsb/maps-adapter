class YandexMapAdapter extends AbstractMapAdapter {
	start() {
		ymaps.ready(() => {
			$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

			let myMap = new ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 7
			});
		})
	}
}