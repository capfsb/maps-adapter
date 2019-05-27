class GoogleMapAdapter extends AbstractMapAdapter {

	constructor() {
		super();

	}

	async start() {
		//@todo вот это надо отсюда убрать, карта не должна знать про оверлей, все еще лень, прости
		$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 9,
			center: {lat: 55.76, lng: 37.64},
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
}