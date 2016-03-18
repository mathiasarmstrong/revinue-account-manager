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

	var _main = __webpack_require__(5);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(6);

	var _account = __webpack_require__(7);

	var _account2 = _interopRequireDefault(_account);

	var _main4 = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('revinue.account.management', ['schemaForm', 'ui.select', 'ui.router', 'ui.bootstrap']).config(_main3.providerConfig).config(_main4.routerConfig).controller('revinueaccountmanagementMainController', _main2.default).controller('accountController', _account2.default);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _$http = void 0,
	    _$uibModal = void 0,
	    _$scope = void 0;

	var MainController = function () {
	  MainController.$inject = ["$http", "$uibModal", "$scope"];
	  function MainController($http, $uibModal, $scope) {
	    'ngInject';

	    _classCallCheck(this, MainController);

	    var _arguments = Array.prototype.slice.call(arguments);

	    _$http = _arguments[0];
	    _$uibModal = _arguments[1];
	    _$scope = _arguments[2];

	    this.accounts = [{ name: 'test' }];
	  }

	  _createClass(MainController, [{
	    key: 'accountClick',
	    value: function accountClick(account) {
	      this.dialog = _$uibModal.open({
	        animation: true,
	        templateUrl: 'lib/modals/account/account.html',
	        controller: 'accountController',
	        controllerAs: 'accountCtrl',
	        size: 'lg',
	        resolve: {
	          $account: function $account() {
	            return account;
	          }
	        },
	        scope: _$scope
	      });
	    }
	  }]);

	  return MainController;
	}();

	exports.default = MainController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	providerConfig.$inject = ["$provide", "$logProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.providerConfig = providerConfig;
	function providerConfig($provide, $logProvider) {
	  'ngInject';
	  ////////////////
	  // Enable log //
	  ////////////////

	  $logProvider.debugEnabled(true);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AccountController = function () {
	  AccountController.$inject = ["$account", "$scope"];
	  function AccountController($account, $scope) {
	    'ngInject';

	    _classCallCheck(this, AccountController);

	    this.schema = {
	      type: "object",
	      properties: {
	        name: {
	          type: "string",
	          minLength: 2,
	          title: "Name"
	        },
	        title: {
	          type: "string",
	          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
	        }
	      }
	    };

	    this.form = [{
	      key: "name",
	      feedback: "{ 'glyphicon': false }"
	    }];

	    this.model = {};

	    $account.sections = ['static', 'editable', 'long'];
	    $account.static = {
	      "id": 'test',
	      "Client Name": 'test',
	      "Business Unit": 'test',
	      "Geography": 'test',
	      "Quarter Total Projection": 'test',
	      "Current Month Strategist Projection": 'test',
	      "Current Month Linear Projection": 'test',
	      "Quarter Total Upside Case": 'test',
	      "Feb & March - Upside vs. Base": 'test',
	      "Total QTD Actual": 'test',
	      "Daily QTD Average Pacing": 'test',
	      "Quarterly Linear Projection": 'test',
	      "Quarterly Current Projection": 'test',
	      "Seven Day Trailing Projection": 'test',
	      "Three Day Trailing Projection": 'test',
	      "Pacing Required for Quarterly Goal": 'test',
	      "Yesterday Pacing": 'test',
	      "3 Day Trailing Pacing": 'test',
	      "7 Day Trailing Pacing": 'test',
	      "Pacing vs. Goal": 'test',
	      "Actual vs. Goal": 'test',
	      "Projected Quarterly Spend $": 'test',
	      "Linear Monthly Spend $": 'test',
	      "AMP Fee %": 'test',
	      "IO End Date(s)": 'test',
	      "master_id": 'test'
	    };
	    $account.editable = {
	      'Lead': 'test',
	      'Business Unit Head': 'test',
	      'January Projection': 'test',
	      'February Projection': 'test',
	      'March Projection': 'test',
	      'January Upside Case': 'test',
	      'February Upside Case': 'test',
	      'March Upside Case': 'test',
	      'Quarter Total Goal': 'test',
	      'Current Month Goal': 'test',
	      'January Actual': 'test',
	      'February Actual': 'test',
	      'March Actual': 'test',
	      'Month1 Fee %': 'test',
	      'Month2 Fee %': 'test',
	      'Month3 Fee %': 'test'
	    };
	    $account.long = {
	      'Min Fee Notes (Tiers, Special Billing, etc.)': 'test'
	    };
	    $scope.account = $account;
	  }

	  _createClass(AccountController, [{
	    key: "createSections",
	    value: function createSections() {}
	  }]);

	  return AccountController;
	}();

	exports.default = AccountController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider) {
	  'ngInject';

	  $stateProvider.state('revinueaccountmanagement', {
	    parent: 'ampCore',
	    url: '',
	    controller: 'revinueaccountmanagementMainController',
	    controllerAs: 'main',
	    templateUrl: 'lib/main.html'
	  });
	}

/***/ }
/******/ ]);
angular.module("revinue.account.management").run(["$templateCache", function($templateCache) {$templateCache.put("lib/main.html","<div id=\"wrap\" class=\"amp-bower-container\"><div class=\"jumbotron amp-bower animated fadeInDown\"><h1>Revinue Manager</h1><div ng-include=\"\'lib/components/dropdown-search/dropdown-search.html\'\" class=\"search-container\"></div></div><div class=\"container animated fadeInUp\"><div ng-if=\"main.accounts &amp;&amp; main.accounts.length || main.searchTerm\" class=\"component-list\"><div ng-repeat=\"account in main.accounts | filter : { name:main.searchTerm }\" class=\"account\"><div ng-include=\"\'lib/components/dropdown-search/item/item.html\'\"></div></div><div class=\"extra-item\"></div><div class=\"extra-item\"></div></div><div ng-if=\"main.error\" class=\"bg-danger info-box\"><i class=\"fa fa-exclamation-triangle\"></i>Service is down</div><div ng-if=\"main.accounts &amp;&amp; !main.accounts.length\" class=\"bg-warning info-box\"><i class=\"fa fa-info-circle\"></i>No private accounts registered</div><div ng-if=\"!main.accounts\" class=\"bg-info info-box\"><i class=\"fa fa-pulse fa-spinner\"></i>Loading Packages...</div></div></div>");
$templateCache.put("lib/components/dropdown-search/dropdown-search.html","<div class=\"dropdown-search\"><span ng-if=\"!main.searching &amp;&amp; !main.searchTerm\" class=\"search-icon\"><i class=\"fa fa-lg fa-search\"></i></span><input ng-model=\"main.searchTerm\" ng-focus=\"main.searching=true\" ng-blur=\"main.searching=false\" class=\"form-control\"/><button ng-click=\"main.addPackageButtonClick()\" class=\"btn btn-info\"><i class=\"fa fa-plus\"></i></button></div>");
$templateCache.put("lib/modals/account/account.html","<article class=\"account-article\"><h3>{{account.name}}</h3><div class=\"account-values\"><strong ng-click=\"static = !static; long=false;\">Static Values&nbsp;<i ng-if=\"static\" class=\"fa fa-chevron-down\"></i><i ng-if=\"!static\" class=\"fa fa-chevron-up\"></i></strong><strong ng-click=\"long = !long; static=false;\">Notes&nbsp;<i ng-if=\"long\" class=\"fa fa-chevron-down\"></i><i ng-if=\"!long\" class=\"fa fa-chevron-up\"></i></strong></div><div ng-if=\"static\" class=\"static-values\"><small ng-repeat=\"(key, val) in account.static\"><strong>{{key}}</strong><br/>{{val}} &nbsp;</small></div><div ng-if=\"long\" class=\"long-values\"><small ng-repeat=\"(key, val) in account.long\"><strong>{{key}}</strong><br/>{{val}} &nbsp;</small></div><form><div class=\"change-values\"><section sf-schema=\"accountCtrl.schema\" sf-form=\"accountCtrl.form\" sf-model=\"accountCtrl.model\" class=\"account-column\"></section></div><section class=\"button-bar\"><button type=\"reset\" class=\"btn btn-warning\">Reset</button><button type=\"submit\" class=\"btn btn-info\">Submit</button></section></form></article>");
$templateCache.put("lib/components/dropdown-search/item/item.html","<div class=\"package-item\"><button ng-click=\"main.accountClick(account)\" class=\"package-name btn btn-default\"><a title=\"Open Account\" class=\"text-info\"><strong>{{ ::account.name }}</strong></a></button><button ng-click=\"main.goToComponent(package)\" class=\"btn btn-info\"><i class=\"text-white fa fa-external-link\"></i></button><button title=\"remove component\" ng-click=\"main.removePackageButtonClick(package.name)\" class=\"btn btn-danger\"><i class=\"fa fa-times text-white\"></i></button></div>");}]);
//# sourceMappingURL=../maps/scripts/app.js.map
