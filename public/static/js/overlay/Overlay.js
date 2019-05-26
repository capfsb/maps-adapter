class Overlay {
	constructor(appendTo) {
		this.$el = $('<div class="overlay js-overlay"></div>');
		$(appendTo).append(this.$el);
	}

	addControl(control) {
		this.$el.append(control.$el)
	}

	fullScreenIn() {
		this.$el.addClass('overlay_fullscreen');
	}

	fullScreenOut() {
		this.$el.removeClass('overlay_fullscreen');
	}
}