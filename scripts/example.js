/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	
	config.$inject = ["$logProvider", "$httpProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	var api = {
	  '/accounts': true,
	  '/account': true
	};
	function config($logProvider, $httpProvider) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	  $httpProvider.interceptors.push(function () {
	    return {
	      'request': function request(config) {
	        if (config.url.includes('api')) config.url = 'http://localhost:4000' + config.url;
	        return config;
	      },
	
	      'response': function response(_response) {
	        return _response;
	      }
	    };
	  });
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
	
	  $stateProvider.state('analyticsCore', {
	    url: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGU3NTUzM2MyYTMyMDI3ODI3MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9leGFtcGxlLnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9leGFtcGxlLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsU0FBUSxPQUFPLHNDQUFzQyxDQUFDLGdCQUFnQixhQUFhLDhCQUE4QixTQUM5RyxPQURILGlCQUVHLE9BRkgsd0JBR0csSUFISCxvQkFJRyxXQUFXLDZDQUpkLDZCOzs7Ozs7QUNMQTs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBRGdCO0FBSmhCLEtBQUksTUFBTTtHQUNSLGFBQVk7R0FDWixZQUFXOztBQUVOLFVBQVMsT0FBUSxjQUFjLGVBQWU7R0FDbkQ7OztHQUVBLGFBQWEsYUFBYTtHQUMxQixjQUFjLGFBQWEsS0FBSyxZQUFXO0tBQzNDLE9BQU87T0FDTixXQUFXLGlCQUFTLFFBQVE7U0FDekIsSUFBSSxPQUFPLElBQUksU0FBUyxRQUFRLE9BQU8sTUFBTSwwQkFBMEIsT0FBTztTQUM5RSxPQUFPOzs7T0FHVCxZQUFZLGtCQUFTLFdBQVU7U0FDN0IsT0FBTzs7Ozs7Ozs7OztBQ2hCYjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBTGdCO0FBQVQsVUFBUyxhQUFjLGdCQUFnQixvQkFBb0I7R0FDaEU7O0dBQ0EsZUFBZSxNQUFNLGlCQUFpQjtLQUNwQyxLQUFJO0tBQ0osVUFBUztLQUNULGFBQVk7S0FDWixZQUFZO0tBQ1osY0FBYzs7R0FFZCxtQkFBbUIsVUFBVTs7Ozs7OztBQ1RqQzs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBTGdCO0FBQVQsVUFBUyxTQUFVLE1BQU07R0FDOUI7O0dBQ0EsS0FBSyxNQUFNOzs7Ozs7O0FDRmI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUFFaEgsS0FSYSxnREFDWCxTQURXLG9CQUNJO0dBQ2I7O0dBU0YsZ0JBQWdCLE1BWEw7O0dBR1QsS0FBSyxjQUFjIiwiZmlsZSI6ImV4YW1wbGUvZXhhbXBsZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRlNzU1MzNjMmEzMjAyNzgyNzBjXG4gKiovIiwiXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2V4YW1wbGUuY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vZXhhbXBsZS5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vZXhhbXBsZS5ydW4nO1xuaW1wb3J0IHsgRXhhbXBsZUNvbnRyb2xsZXIgfSBmcm9tICcuL2V4YW1wbGUuY29udHJvbGxlcic7XG5hbmd1bGFyLm1vZHVsZSgncmV2aW51ZS5hY2NvdW50Lm1hbmFnZW1lbnQuZXhhbXBsZScsIFsndWkuYm9vdHN0cmFwJywgJ3VpLnJvdXRlcicsICdyZXZpbnVlLmFjY291bnQubWFuYWdlbWVudCcsICdobGpzJ10pXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLmNvbnRyb2xsZXIoJ3JldmludWVhY2NvdW50bWFuYWdlbWVudEV4YW1wbGVDb250cm9sbGVyJywgRXhhbXBsZUNvbnRyb2xsZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9leGFtcGxlLm1vZHVsZS5qc1xuICoqLyIsImxldCBhcGkgPSB7XG4gICcvYWNjb3VudHMnOnRydWUsXG4gICcvYWNjb3VudCc6dHJ1ZVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcbiAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICdyZXF1ZXN0JzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygnYXBpJykpIGNvbmZpZy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJyArIGNvbmZpZy51cmxcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuXG4gICAgJ3Jlc3BvbnNlJzogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH1cbiAgfTtcbn0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9leGFtcGxlLmNvbmZpZy5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FuYWx5dGljc0NvcmUnLCB7XG4gICAgdXJsOicnLFxuICAgIGFic3RyYWN0OnRydWUsXG4gICAgdGVtcGxhdGVVcmw6J2V4YW1wbGUvaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAncmV2aW51ZWFjY291bnRtYW5hZ2VtZW50RXhhbXBsZUNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2V4YW1wbGUnXG4gIH0pXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9leGFtcGxlLnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3JldmludWUuYWNjb3VudC5tYW5hZ2VtZW50LmV4YW1wbGUgcnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9leGFtcGxlL2V4YW1wbGUucnVuLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEV4YW1wbGVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5leGFtcGxlUGFnZSA9ICdjb2RlRXhhbXBsZSc7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4YW1wbGUvZXhhbXBsZS5jb250cm9sbGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
angular.module("revinue.account.management.example").run(["$templateCache", function($templateCache) {$templateCache.put("example/home.html","<div class=\"container example-container\"><ui-view></ui-view></div>");}]);
//# sourceMappingURL=../maps/scripts/example.js.map
