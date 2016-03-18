/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _example = __webpack_require__(1);

	var _example2 = __webpack_require__(2);

	var _example3 = __webpack_require__(3);

	var _example4 = __webpack_require__(4);

	angular.module('revinue.account.management.example', ['ui.bootstrap', 'ui.router', 'revinue.account.management', 'hljs']).config(_example.config).config(_example2.routerConfig).run(_example3.runBlock).controller('revinueaccountmanagementExampleController', _example4.ExampleController);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider) {
	  'ngInject';
	  // Enable log

	  $logProvider.debugEnabled(true);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('ampCore', {
	    url: '/',
	    abstract: true,
	    templateUrl: 'example/home.html',
	    controller: 'revinueaccountmanagementExampleController',
	    controllerAs: 'example'
	  });
	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';

	  $log.debug('revinue.account.management.example runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ExampleController = exports.ExampleController = function ExampleController() {
	  'ngInject';

	  _classCallCheck(this, ExampleController);

	  this.examplePage = 'codeExample';
	};

/***/ }
/******/ ]);
angular.module("revinue.account.management.example").run(["$templateCache", function($templateCache) {$templateCache.put("example/home.html","<div class=\"container example-container\"><ui-view></ui-view></div>");}]);
//# sourceMappingURL=../maps/scripts/example.js.map
