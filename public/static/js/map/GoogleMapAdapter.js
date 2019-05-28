class GoogleMapAdapter extends AbstractMapAdapter {

	constructor() {
		super();

	}

	async start() {
		//@todo вот это надо отсюда убрать, карта не должна знать про оверлей, все еще лень, прости
		$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 9,
			disableDefaultUI: true
		});

	}

	zoomIn() {
		this.map.setZoom(this.map.getZoom() + 1)
	}

	zoomOut() {
		this.map.setZoom(this.map.getZoom() - 1)
	}

	fitToViewport() {
		//Итак работает, поэтому не буду реализовавывать, лень доку читать
	}

	addPoint([lat, lng]) {
		new google.maps.Marker({position: {lat, lng}, map: this.map});
	}

	onCoordinatesClick(callback) {
		this.map.addListener('click', e => {
			callback([e.latLng.lat(), e.latLng.lng()])
		});
	}

	setCenter([lat, lon]) {
		this.map.setCenter({lat, lng: lon});
	}

	addPolyline(coordinatesArray, style = 'road') {
		var flightPlanCoordinates = coordinatesArray.map(([lat, lng]) => ({lat, lng}));

		let styles = {
			road: '#FF0000',
			water: '#00FF00'
		};

		var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: styles[style],
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		flightPath.setMap(this.map);
	}

	centerMapWithCoordinates(coordinatesArray) {
		let [[x0, y0], [x1, y1]] = this.getBounds(coordinatesArray);

		let latLngBounds = new google.maps.LatLngBounds({lat: x0, lng: y0}, {lat: x1, lng: y1});

		this.map.fitBounds(latLngBounds);
	}
}