class ZoomControl {
	constructor({onZoomIn, onZoomOut}) {
		this.$el = $(`<div class="overlay__item map-button-union" style="position: absolute; top: 50%; right: 10px; margin-top: -67px;">
			<div class="map-button map-button_icon_plus"></div>
			<div class="map-button map-button_icon_minus"></div>
			</div>`);

		this.bindEvents({onZoomIn, onZoomOut});
	}

	bindEvents({onZoomIn, onZoomOut}) {
		this.$el.find('.map-button_icon_plus').on('click', onZoomIn);
		this.$el.find('.map-button_icon_minus').on('click', onZoomOut);
	}
}