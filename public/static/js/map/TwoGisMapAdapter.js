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
		let marker = DG.marker(coords, {
			icon: DG.icon({
				iconUrl: 'https://maps.api.2gis.ru/2.0/img/DGCustomization__marker.png',
				iconSize: [22, 34]
			})
		}).addTo(this.map);

		return this.storeGeoObject({
			setActive(isActive) {
				if (isActive) {
					var myIcon = DG.icon({
						iconUrl: 'https://maps.api.2gis.ru/2.0/img/DGCustomization__markerHover.png',
						iconSize: [22, 34]
					});
				} else {
					var myIcon = DG.icon({
						iconUrl: 'https://maps.api.2gis.ru/2.0/img/DGCustomization__marker.png',
						iconSize: [22, 34]
					});
				}

				marker.setIcon(myIcon);
			},

			onMouseIn(cb) {
				marker.on("mouseover", () => {
					this.setActive(true);
					cb();
				});
			},

			onMouseOut(cb) {
				marker.on("mouseout", () => {
					this.setActive(false);
					cb();
				});
			},

			onClick: cb => marker.on("click", () => cb())
		});
	}

	onCoordinatesClick(callback) {
		this.map.on('click', function (e) {
			callback([e.latlng.lat, e.latlng.lng])
		});
	}

	setCenter([lat, lon]) {
		this.map.setView([lat, lon]);
	}

	addPolyline(coordinatesArray, style = 'road') {
		let styles = {
			road: '#FF0000',
			water: '#00FF00'
		};

		DG.polyline(coordinatesArray, {
			color: styles[style]
		}).addTo(this.map);
	}

	centerMapWithCoordinates(coordinatesArray) {
		let [[minx, miny], [maxx, maxy]] = this.getBounds(coordinatesArray);

		var southWest = DG.latLng(minx, miny);
		var northEast = DG.latLng(maxx, maxy);
		var bounds = DG.latLngBounds(southWest, northEast);

		this.map.fitBounds(bounds)
	}
}