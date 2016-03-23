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

	var _account3 = __webpack_require__(8);

	var _account4 = _interopRequireDefault(_account3);

	var _main4 = __webpack_require__(9);

	var _dropdownSearch = __webpack_require__(10);

	var _dropdownSearch2 = _interopRequireDefault(_dropdownSearch);

	var _dropdownList = __webpack_require__(11);

	var _dropdownList2 = _interopRequireDefault(_dropdownList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('revinue.account.management', ['schemaForm', 'ui.select', 'ui.router', 'ui.bootstrap']).config(_main3.providerConfig).config(_main4.routerConfig).controller('revinueaccountmanagementMainController', _main2.default).controller('accountController', _account2.default).controller('createAccountController', _account4.default).directive('dropdownSearch', _dropdownSearch2.default).directive('dropdownList', _dropdownList2.default);

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

	    var _this = this;

	    _classCallCheck(this, MainController);

	    var _arguments = Array.prototype.slice.call(arguments);

	    _$http = _arguments[0];
	    _$uibModal = _arguments[1];
	    _$scope = _arguments[2];

	    this.accounts = [];
	    $http.get('/api/accounts').then(function (data) {
	      data.data.account.forEach(function (account) {
	        _this.accounts.push(account);
	      });
	    });
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
	  }, {
	    key: 'addButtonClick',
	    value: function addButtonClick() {
	      this.dialog = _$uibModal.open({
	        animation: true,
	        templateUrl: 'lib/modals/create/account.html',
	        controller: 'createAccountController',
	        controllerAs: 'create',
	        size: 'lg',
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
	  AccountController.$inject = ["$http", "$account", "$scope"];
	  function AccountController($http, $account, $scope) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, AccountController);

	    this.platformInfo = [];
	    $http.get("/api/account/" + $account.id).then(function (data) {
	      _.forEach(data.data.account, function (plat) {
	        _this.platformInfo.push(plat);
	      });
	    });

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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AccountController = function AccountController() {
	  'ngInject';

	  _classCallCheck(this, AccountController);

	  this.platformInfo = [];

	  this.schema = {
	    type: "object",
	    properties: {
	      clientName: {
	        type: "string",
	        minLength: 2,
	        title: "Client Name"
	      },
	      title: {
	        type: "string",
	        enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
	      }
	    }
	  };

	  this.form = [{
	    key: "clientName",
	    feedback: "{ 'glyphicon': false }"

	  }];
	  this.model = {};
	};

	exports.default = AccountController;

/***/ },
/* 9 */
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
	    parent: 'analyticsCore',
	    url: '/',
	    controller: 'revinueaccountmanagementMainController',
	    controllerAs: 'main',
	    templateUrl: 'lib/main.html'
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dropdownSearch = function dropdownSearch() {
	  'ngInject';

	  return {
	    templateUrl: 'lib/components/dropdown-search/dropdown-search.html',
	    scope: {
	      add: '&',
	      search: '='
	    }
	  };
	};
	exports.default = dropdownSearch;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dropdownList = function dropdownList() {
	  'ngInject';

	  return {
	    templateUrl: 'lib/components/dropdown-list/dropdown-list.html',
	    scope: {
	      view: '&',
	      list: '=',
	      search: '=',
	      error: '='
	    }
	  };
	};
	exports.default = dropdownList;

/***/ }
/******/ ]);
angular.module("revinue.account.management").run(["$templateCache", function($templateCache) {$templateCache.put("lib/main.html","<div id=\"wrap\" class=\"amp-bower-container\"><div class=\"jumbotron amp-bower animated fadeInDown\"><h1>Revenue Manager</h1><div class=\"search-container\"><dropdown-search search=\"main.searchTerm\" add=\"main.addButtonClick()\"></dropdown-search></div></div><dropdown-list list=\"main.accounts\" search=\"main.searchTerm\" view=\"main.accountClick(account)\" remove=\"main.removeAccount(account)\" error=\"main.error\"></dropdown-list></div>");
$templateCache.put("lib/components/dropdown-list/dropdown-list.html","<div class=\"container animated fadeInUp\"><div ng-if=\"list &amp;&amp; list.length || search\" class=\"component-list\"><div ng-repeat=\"item in list | filter : { name:search }\" class=\"account\"><div ng-include=\"\'lib/components/dropdown-list/item/item.html\'\"></div></div><div class=\"exra-item\"></div><div class=\"exra-item\"></div><div class=\"exra-item\"></div><div class=\"exra-item\"></div></div><div ng-if=\"error\" class=\"bg-danger info-box\"><i class=\"fa fa-exclamation-triangle\"></i> Service is down</div><div ng-if=\"list &amp;&amp; !list.length\" class=\"bg-warning info-box\"><i class=\"fa fa-info-circle\"></i> None found</div><div ng-if=\"!list\" class=\"bg-info info-box\"><i class=\"fa fa-pulse fa-spinner\"></i> Loading Packages...</div></div>");
$templateCache.put("lib/components/dropdown-search/dropdown-search.html","<div class=\"dropdown-search\"><span ng-if=\"!searching &amp;&amp; !search\" class=\"search-icon\"><i class=\"fa fa-lg fa-search\"></i></span><input ng-model=\"search\" ng-focus=\"searching=true\" ng-blur=\"searching=false\" class=\"form-control\"/><button ng-click=\"add()\" class=\"btn btn-info\"><i class=\"fa fa-plus\"></i></button></div>");
$templateCache.put("lib/modals/account/account.html","<article class=\"account-article\"><div class=\"platform-icons\"><h3 class=\"account-name\"><i class=\"fa fa-plus-square text-info\"></i> {{account.name}}</h3><h3 ng-repeat=\"platform in accountCtrl.platformInfo\"><i class=\"fa fa-{{platform.platform}}\"></i></h3></div><form><div class=\"change-values\"><section sf-schema=\"accountCtrl.schema\" sf-form=\"accountCtrl.form\" sf-model=\"accountCtrl.model\" class=\"account-column\"></section></div><section class=\"button-bar\"><button type=\"reset\" class=\"btn btn-warning\">Reset</button><button type=\"submit\" class=\"btn btn-info\">Submit</button></section></form><div class=\"account-values\"><strong ng-click=\"static = !static; long=false;\">Static Values&nbsp;<i ng-if=\"static\" class=\"fa fa-chevron-down\"></i><i ng-if=\"!static\" class=\"fa fa-chevron-up\"></i></strong><strong ng-click=\"long = !long; static=false;\">Notes&nbsp;<i ng-if=\"long\" class=\"fa fa-chevron-down\"></i><i ng-if=\"!long\" class=\"fa fa-chevron-up\"></i></strong></div><div ng-if=\"static\" class=\"static-values\"><small ng-repeat=\"(key, val) in account.static\"><strong>{{key}}</strong><br/>{{val}} &nbsp;</small></div><div ng-if=\"long\" class=\"long-values\"><small ng-repeat=\"(key, val) in account.long\"><strong>{{key}}</strong><br/>{{val}} &nbsp;</small></div></article>");
$templateCache.put("lib/modals/create/account.html","<article class=\"account-article\"><form><div class=\"change-values\"><section sf-schema=\"create.schema\" sf-form=\"create.form\" sf-model=\"create.model\" class=\"account-column\"></section></div><section class=\"button-bar\"><button type=\"reset\" class=\"btn btn-warning\">Reset</button><button type=\"submit\" class=\"btn btn-info\">Submit</button></section></form></article>");
$templateCache.put("lib/components/dropdown-list/item/item.html","<div class=\"package-item\"><button ng-click=\"view({ account:item })\" class=\"package-name btn btn-default\"><a title=\"Open Account\" class=\"text-info\"><strong>{{ ::item.name }}</strong></a></button><button title=\"remove component\" ng-click=\"remove({ account:item })\" class=\"btn btn-danger\"><i class=\"fa fa-times text-white\"></i></button></div>");}]);
//# sourceMappingURL=../maps/scripts/app.js.map
