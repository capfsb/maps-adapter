class AbstractMapAdapter {
	constructor() {
		if (
			this.start === AbstractMapAdapter.prototype.start
			|| this.zoomIn === AbstractMapAdapter.prototype.zoomIn
			|| this.zoomOut === AbstractMapAdapter.prototype.zoomOut
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
}