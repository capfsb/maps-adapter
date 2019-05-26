class AbstractMapAdapter {
	constructor() {
		if (
			this.start === AbstractMapAdapter.prototype.start
		) {
			throw new Error('Implement method!')
		}
	}

	start() {
	}
}