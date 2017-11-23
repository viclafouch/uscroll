class uscroll {

	static bind(position, color = null) {
		new uscroll(position, color);
	}

	constructor(position, color) {
		let positions = ['top', 'right', 'bottom', 'left'];
		
		if (positions.indexOf(position) > -1) {
			this.position = position;
		} else {
			this.position = 'right';
		}

		this.color = color;
		this.element = this.creatScrollBar();

		window.addEventListener('scroll', this.scroll.bind(this), false);

	}

	scroll() {
		// Height of the window
		var clientHeight = document.documentElement.clientHeight;
		// Width of the windows
		var clientWidth = document.documentElement.clientWidth;
		// Height of the document
		var bodyHeight = document.body.offsetHeight;
		// Position of the scroll
		var scrollTopPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

		// We calcul the position in pourcent in the document removing the client Height
		var uscrollHeight = (scrollTopPosition / (bodyHeight - clientHeight)) * 100;

		if (this.position == 'left' || this.position == 'right') {
			var t = clientHeight * (uscrollHeight / 100);
			this.element.style.height = t + 1 +'px';
		} else {
			var t = clientWidth * (uscrollHeight / 100);
			this.element.style.width = t + 1 +'px';
		}
	}

	creatScrollBar() {
		let uscroll = document.createElement('div');
		uscroll.classList.add('uscroll');
		uscroll.classList.add('uscroll__custom');

		if (this.color) {
			uscroll.classList.add('uscroll__'+this.color);
		}

		uscroll.classList.add('uscroll__'+this.position);
		document.body.appendChild(uscroll);
		this.uscroll = uscroll;

		return this.uscroll;
	}
}