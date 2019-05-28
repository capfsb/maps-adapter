class YandexMapAdapter extends AbstractMapAdapter {
	constructor() {
		super(...arguments);
		this.map = null;
	}

	async start() {
		await new Promise(resolve => ymaps.ready(resolve));

		//@todo вот это надо отсюда убрать, карта не должна знать про оверлей
		$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

		this.map = new ymaps.Map("map", {
			center: [0, 0],
			zoom: 9,
			controls: []
		});
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

	fitToViewport() {
		this.map.container.fitToViewport();
	}

	addPoint(coords) {
		let myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: coords
			}
		});

		this.map.geoObjects.add(myGeoObject)
	}

	onCoordinatesClick(callback) {
		this.map.events.add('click', function (e) {
			let coords = e.get('coords');
			callback(coords);
		});
	}

	setCenter([lat, lon]) {
		this.map.setCenter([lat, lon])
	}

	addPolyline(coordinatesArray, style) {
		let point = new ymaps.GeoObject({
			geometry: {
				type: "LineString",
				coordinates: coordinatesArray
			},
		}, {
			strokeColor: "#FF0000",
			strokeWidth: 5
		});

		this.map.geoObjects.add(point)
	}
}