"use strict";

namespace NgWindow {
	export class NgWindowDirective implements ng.IDirective {
		controller = NgWindowController;

		controllerAs = "vm";

		bindToController = {
		};

		templateUrl = "src/ngWindow.html";
	}

	export var ngWindowDirectiveFactory = () => {
		return new NgWindowDirective();
	};
}
