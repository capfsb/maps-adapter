class AbstractMapAdapter {
	constructor() {
		if (
			this.start === AbstractMapAdapter.prototype.start
			|| this.zoomIn === AbstractMapAdapter.prototype.zoomIn
			|| this.zoomOut === AbstractMapAdapter.prototype.zoomOut
			|| this.fitToViewport === AbstractMapAdapter.prototype.fitToViewport
		) {
			throw new Error('Implement method!')
		}
	}

	start() {
	}

	zoomIn() {
	}

	zoomOut() {
	}

	fitToViewport() {
	}
}