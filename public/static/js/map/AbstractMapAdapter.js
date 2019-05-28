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
}