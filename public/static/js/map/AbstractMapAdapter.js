class AbstractMapAdapter {
	constructor() {
		if (
			this.start === AbstractMapAdapter.prototype.start
			|| this.start.constructor.name !== "AsyncFunction"
			|| this.zoomIn === AbstractMapAdapter.prototype.zoomIn
			|| this.zoomOut === AbstractMapAdapter.prototype.zoomOut
			|| this.fitToViewport === AbstractMapAdapter.prototype.fitToViewport
			|| this.addPoint === AbstractMapAdapter.prototype.addPoint
			|| this.onCoordinatesClick === AbstractMapAdapter.prototype.onCoordinatesClick
			|| this.setCenter === AbstractMapAdapter.prototype.setCenter
			|| this.addPolyline === AbstractMapAdapter.prototype.addPolyline
		) {
			throw new Error('Implement method!')
		}

		this.__uniqueId = 0;
		this.__geoObjectsStorage = {};
	}

	async start() {
	}

	zoomIn() {
	}

	zoomOut() {
	}

	fitToViewport() {
	}

	addPoint(coords) {
	}

	onCoordinatesClick(callback) {
	}

	setCenter([lat, lon]) {
	}

	addPolyline(coordinatesArray, style) {
	}

	centerMapWithCoordinates(coordinatesArray) {
	}

	getBounds(coordinatesArray) {
		let minx;
		let miny;
		let maxx;
		let maxy;

		//да не эффективно, можно было при построении посчитать, но это жи прототип
		coordinatesArray.forEach(([x, y]) => {
			minx = minx || x;
			maxx = maxx || x;
			miny = miny || y;
			maxy = maxy || y;

			x < minx && (minx = x);
			y < miny && (miny = y);

			x > maxx && (maxx = x);
			y > maxy && (maxy = y);
		});

		return [[minx, miny], [maxx, maxy]];
	}

	getUniqueId() {
		return this.__uniqueId++;
	}

	findGeoObject(id) {
		return this.__geoObjectsStorage[id] || null;
	}

	storeGeoObject(object) {
		if (object.getId) {
			throw new Error('getId already set')
		}

		let uniqueId = this.getUniqueId();

		object.getId = () => uniqueId;

		this.__geoObjectsStorage[uniqueId] = object;

		return object;
	}

	unstoreGeoObject(id) {
		delete this.__geoObjectsStorage[id]
	}
}