class TwoGisMapAdapter extends AbstractMapAdapter {
	constructor() {
		super()
	}

	async start() {
		//@todo короче проросло
		$('<div id="map" class="overlay__map"></div>').appendTo('.js-overlay');

		return new Promise(resolve => {
			DG.then(() => {
				this.map = DG.map('map', {
					center: [0, 0],
					zoom: 9,
					fullscreenControl: false,
					zoomControl: false
				});

				resolve();
			});
		});
	}

	zoomIn() {
		this.map.zoomIn(1)
	}

	zoomOut() {
		this.map.zoomOut(1)
	}

	fitToViewport() {
		this.map.invalidateSize();
	}

	addPoint(coords) {
		DG.marker(coords).addTo(this.map);
	}

	onCoordinatesClick(callback) {
		this.map.on('click', function (e) {
			callback([e.latlng.lat, e.latlng.lng])
		});
	}

	setCenter([lat, lon]) {
		this.map.setView([lat, lon]);
	}
}