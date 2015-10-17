"use strict";

namespace ngWindow {
	export class ngWindowDirective implements ng.IDirective {
		controller = ngWindowController;
	}

	var ngWindowDirectiveFactory = () => {
		return new ngWindowDirective();
	}

	angular.module("sampleApp")
		.directive("test", ngWindowDirectiveFactory);
}