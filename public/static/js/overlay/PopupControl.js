class PopupControl {
	constructor() {
		this.$el = $('<div style="width: 0;" class="overlay__item overlay__popup"><div><a href="#">Закрыть</a></div></div>');
		this.$container = $('<div></div>');
		this.$el.append(this.$container);

		this.$el.find('a').on('click', e => {
			e.preventDefault();
			this.hide();
		})
	}

	show(html) {
		this.$container.html(html);
		this.$el.animate({width: 200}, 150);
	}

	hide() {
		this.$el.animate({width: 0}, 150);
	}
}