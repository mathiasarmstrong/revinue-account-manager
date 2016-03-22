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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmRjZGJjM2Q2Yjc5ZDgxOWEzYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUvZXhhbXBsZS5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9leGFtcGxlLnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9leGFtcGxlLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsU0FBUSxPQUFPLHNDQUFzQyxDQUFDLGdCQUFnQixhQUFhLDhCQUE4QixTQUM5RyxPQURILGlCQUVHLE9BRkgsd0JBR0csSUFISCxvQkFJRyxXQUFXLDZDQUpkLDZCOzs7Ozs7QUNMQTs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBRGdCO0FBSmhCLEtBQUksTUFBTTtHQUNSLGFBQVk7R0FDWixZQUFXOztBQUVOLFVBQVMsT0FBUSxjQUFjLGVBQWU7R0FDbkQ7OztHQUVBLGFBQWEsYUFBYTtHQUMxQixjQUFjLGFBQWEsS0FBSyxZQUFXO0tBQzNDLE9BQU87T0FDTixXQUFXLGlCQUFTLFFBQVE7O1NBRXpCLElBQUksT0FBTyxJQUFJLFNBQVMsUUFBUSxPQUFPLE1BQU0sMEJBQTBCLE9BQU87U0FDOUUsT0FBTzs7O09BR1QsWUFBWSxrQkFBUyxXQUFVO1NBQzdCLE9BQU87Ozs7Ozs7Ozs7QUNqQmI7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQUxnQjtBQUFULFVBQVMsYUFBYyxnQkFBZ0Isb0JBQW9CO0dBQ2hFOztHQUNBLGVBQWUsTUFBTSxpQkFBaUI7S0FDcEMsS0FBSTtLQUNKLFVBQVM7S0FDVCxhQUFZO0tBQ1osWUFBWTtLQUNaLGNBQWM7O0dBRWQsbUJBQW1CLFVBQVU7Ozs7Ozs7QUNUakM7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQUxnQjtBQUFULFVBQVMsU0FBVSxNQUFNO0dBQzlCOztHQUNBLEtBQUssTUFBTTs7Ozs7OztBQ0ZiOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7O0FBRWhILEtBUmEsZ0RBQ1gsU0FEVyxvQkFDSTtHQUNiOztHQVNGLGdCQUFnQixNQVhMOztHQUdULEtBQUssY0FBYyIsImZpbGUiOiJleGFtcGxlL2V4YW1wbGUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmZGNkYmMzZDZiNzlkODE5YTNhNlxuICoqLyIsIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9leGFtcGxlLmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2V4YW1wbGUucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2V4YW1wbGUucnVuJztcbmltcG9ydCB7IEV4YW1wbGVDb250cm9sbGVyIH0gZnJvbSAnLi9leGFtcGxlLmNvbnRyb2xsZXInO1xuYW5ndWxhci5tb2R1bGUoJ3JldmludWUuYWNjb3VudC5tYW5hZ2VtZW50LmV4YW1wbGUnLCBbJ3VpLmJvb3RzdHJhcCcsICd1aS5yb3V0ZXInLCAncmV2aW51ZS5hY2NvdW50Lm1hbmFnZW1lbnQnLCAnaGxqcyddKVxuICAuY29uZmlnKGNvbmZpZylcbiAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gIC5ydW4ocnVuQmxvY2spXG4gIC5jb250cm9sbGVyKCdyZXZpbnVlYWNjb3VudG1hbmFnZW1lbnRFeGFtcGxlQ29udHJvbGxlcicsIEV4YW1wbGVDb250cm9sbGVyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4YW1wbGUvZXhhbXBsZS5tb2R1bGUuanNcbiAqKi8iLCJsZXQgYXBpID0ge1xuICAnL2FjY291bnRzJzp0cnVlLFxuICAnL2FjY291bnQnOnRydWVcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAncmVxdWVzdCc6IGZ1bmN0aW9uKGNvbmZpZykge1xuXG4gICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygnYXBpJykpIGNvbmZpZy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJyArIGNvbmZpZy51cmxcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuXG4gICAgJ3Jlc3BvbnNlJzogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH1cbiAgfTtcbn0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9leGFtcGxlLmNvbmZpZy5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FuYWx5dGljc0NvcmUnLCB7XG4gICAgdXJsOicnLFxuICAgIGFic3RyYWN0OnRydWUsXG4gICAgdGVtcGxhdGVVcmw6J2V4YW1wbGUvaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAncmV2aW51ZWFjY291bnRtYW5hZ2VtZW50RXhhbXBsZUNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2V4YW1wbGUnXG4gIH0pXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9leGFtcGxlLnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3JldmludWUuYWNjb3VudC5tYW5hZ2VtZW50LmV4YW1wbGUgcnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9leGFtcGxlL2V4YW1wbGUucnVuLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEV4YW1wbGVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5leGFtcGxlUGFnZSA9ICdjb2RlRXhhbXBsZSc7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4YW1wbGUvZXhhbXBsZS5jb250cm9sbGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
angular.module("revinue.account.management.example").run(["$templateCache", function($templateCache) {$templateCache.put("example/home.html","<div class=\"container example-container\"><ui-view></ui-view></div>");}]);
//# sourceMappingURL=../maps/scripts/example.js.map
