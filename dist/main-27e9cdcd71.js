"use strict";var ngWindow;!function(n){var i=function(){function n(){this.a=123}return n}();n.ngWindowController=i}(ngWindow||(ngWindow={}));
"use strict";var ngWindow;!function(n){var t=function(){function t(){this.controller=n.ngWindowController,this.controllerAs="vm",this.bindToController={},this.templateUrl="src/ngWindow.html"}return t}();n.ngWindowDirective=t,n.ngWindowDirectiveFactory=function(){return new t}}(ngWindow||(ngWindow={}));
"use strict";var app=angular.module("sampleApp",[]);app.directive("test",ngWindow.ngWindowDirectiveFactory);
//# sourceMappingURL=maps/main-27e9cdcd71.js.map