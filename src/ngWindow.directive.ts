"use strict";

namespace ngWindow {
	export class ngWindowDirective implements ng.IDirective {
		controller = ngWindowController;
		
		controllerAs = "vm";
		
		bindToController = {
			
		};
		
		templateUrl = "src/ngWindow.html";
	}

	export var ngWindowDirectiveFactory = () => {
		return new ngWindowDirective();
	}
}