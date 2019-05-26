class FullScreenControl {
	constructor({onFullScreenIn, onFullScreenOut}) {
		this.$el = $(`<div class="map-button map-button_icon_fullscreen" style="position: absolute; z-index: 2; top: 10px; right: 10px;"></div>`);

		this.isFull = false;

		this.bindEvents({onFullScreenIn, onFullScreenOut});
	}

	bindEvents({onFullScreenIn, onFullScreenOut}) {
		this.$el.on('click', () => {
			if (this.isFull) {
				onFullScreenOut();
				this.$el.removeClass('map-button_icon_cross').addClass('map-button_icon_fullscreen')
			} else {
				onFullScreenIn();
				this.$el.removeClass('map-button_icon_fullscreen').addClass('map-button_icon_cross')
			}

			this.isFull = !this.isFull;
		});
	}
}