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

	var _account3 = __webpack_require__(9);

	var _account4 = _interopRequireDefault(_account3);

	var _main4 = __webpack_require__(10);

	var _dropdownSearch = __webpack_require__(11);

	var _dropdownSearch2 = _interopRequireDefault(_dropdownSearch);

	var _dropdownList = __webpack_require__(12);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _account = __webpack_require__(8);

	var _account2 = _interopRequireDefault(_account);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _$http = void 0,
	    _$account = void 0;

	var AccountController = function () {
	  AccountController.$inject = ["$http", "$account"];
	  function AccountController($http, $account) {
	    'ngInject';

	    _classCallCheck(this, AccountController);

	    _$http = $http;
	    _$account = $account;


	    this.platformInfo = [];

	    this.schema = { type: "object", properties: _account2.default };

	    this.forms = _(_account2.default).map(function (val, key) {
	      if (!val.hidden) return {
	        key: key,
	        feedback: "{ 'glyphicon': false }",
	        order: val.order,
	        _model: val._model
	      };
	    }).filter(function (val) {
	      return val;
	    });

	    this.forms = _.groupBy(this.forms, '_model');

	    this.setAccount();
	    this.getAccountInfo();
	  }

	  _createClass(AccountController, [{
	    key: 'setAccount',
	    value: function setAccount() {
	      this.account = angular.copy(_$account);
	      delete this.platformModel;
	    }
	  }, {
	    key: 'getAccountInfo',
	    value: function getAccountInfo() {
	      var _this = this;

	      _$http.get('/api/account/' + _$account.id).then(function (data) {
	        _.forEach(data.data.account, function (plat) {
	          _this.platformInfo.push(plat);
	        });
	      });
	    }
	  }]);

	  return AccountController;
	}();

	exports.default = AccountController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var accountInfo = {
	  m1_rev_goal: {
	    title: 'Month 1 Goal',
	    type: 'number',
	    _model: 'account'
	  },
	  m1_rev_upside: {
	    title: 'Month 1 Upside',
	    type: 'number',
	    _model: 'account'
	  },
	  m2_rev_goal: {
	    title: 'Month 2 Goal',
	    type: 'number',
	    _model: 'account'
	  },
	  m2_rev_upside: {
	    title: 'Month 2 Upside',
	    type: 'number',
	    _model: 'account'
	  },
	  m3_rev_goal: {
	    title: 'Month 3 Goal',
	    type: 'number',
	    _model: 'account'
	  },
	  m3_rev_upside: {
	    title: 'Month 3 Upside',
	    type: 'number',
	    _model: 'account'
	  },
	  quarter_goal: {
	    title: 'Quarterly Goal',
	    type: 'number',
	    _model: 'account'
	  },
	  name: {
	    type: "string",
	    _model: 'platform',
	    minLength: 2,
	    title: "Platform Name",
	    order: 0
	  },
	  platform: {
	    title: 'Platform',
	    type: "string",
	    _model: 'platform',
	    enum: ['facebook', 'pinterest', 'twitter'],
	    order: 0
	  },
	  id: {
	    hidden: true
	  }
	};

	exports.default = accountInfo;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _$http = void 0;

	var AccountController = function () {
	  AccountController.$inject = ["$http"];
	  function AccountController($http) {
	    'ngInject';

	    _classCallCheck(this, AccountController);

	    _$http = $http;
	    this.platformInfo = [];

	    this.schema = {
	      type: "object",
	      properties: {
	        clientName: {
	          type: "string",
	          minLength: 2,
	          title: "Client Name"
	        }
	      }
	    };

	    this.form = [{
	      key: "clientName",
	      feedback: "{ 'glyphicon': false }"

	    }];
	    this.model = {};
	  }

	  _createClass(AccountController, [{
	    key: "createAccount",
	    value: function createAccount() {
	      _$http.post('/api/account', this.model).then(function (data) {
	        return console.log(data);
	      });
	      // this.model ={};
	    }
	  }]);

	  return AccountController;
	}();

	exports.default = AccountController;

/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
$templateCache.put("lib/modals/account/account.html","<article class=\"account-article\"><div class=\"platform-icons\"><h3 class=\"account-name\"><i title=\"Add Platform Link\" ng-click=\"accountCtrl.platformModel = { new:true }\" class=\"fa fa-plus-square text-info\"></i> {{accountCtrl.account.name}}</h3><h3 ng-repeat=\"platform in accountCtrl.platformInfo\" uib-popover=\"{{platform.name}}\" popover-trigger=\"mouseenter\" popover-placement=\"bottom-left\" ng-click=\"accountCtrl.platformModel = platform\" class=\"platforms\"><i class=\"fa fa-{{platform.platform}}\"></i></h3></div><form><div ng-if=\"accountCtrl.platformModel\" class=\"platform-change-values\"><div class=\"close-platform\"><button title=\"Remove Platform Link\" ng-if=\"accountCtrl.platformModel &amp;&amp; !accountCtrl.platformModel.new\" class=\"btn btn-danger\"><strong>Remove</strong></button><button title=\"Close\" ng-click=\"accountCtrl.platformModel=null\" class=\"btn btn-info\"><i class=\"fa fa-close\"></i></button></div><section sf-schema=\"accountCtrl.schema\" sf-form=\"accountCtrl.forms.platform\" sf-model=\"accountCtrl.platformModel\" class=\"account-column\"></section></div><div class=\"account-change-values\"><section sf-schema=\"accountCtrl.schema\" sf-form=\"accountCtrl.forms.account\" sf-model=\"accountCtrl.account\" class=\"account-column\"></section></div><section class=\"button-bar\"><button ng-click=\"accountCtrl.setAccount()\" class=\"btn btn-warning\">Reset</button><button type=\"submit\" class=\"btn btn-info\">Submit</button></section></form></article>");
$templateCache.put("lib/components/dropdown-search/dropdown-search.html","<div class=\"dropdown-search\"><span ng-if=\"!searching &amp;&amp; !search\" class=\"search-icon\"><i class=\"fa fa-lg fa-search\"></i></span><input ng-model=\"search\" ng-focus=\"searching=true\" ng-blur=\"searching=false\" class=\"form-control\"/><button ng-click=\"add()\" class=\"btn btn-info\"><i class=\"fa fa-plus\"></i></button></div>");
$templateCache.put("lib/modals/create/account.html","<article class=\"account-article\"><form ng-submit=\"create.createAccount()\"><div class=\"change-values\"><section sf-schema=\"create.schema\" sf-form=\"create.form\" sf-model=\"create.model\" class=\"account-column\"></section></div><section class=\"button-bar\"><button type=\"reset\" class=\"btn btn-warning\">Reset</button><button type=\"submit\" class=\"btn btn-info\">Submit</button></section></form></article>");
$templateCache.put("lib/components/dropdown-list/item/item.html","<div class=\"package-item\"><button ng-click=\"view({ account:item })\" class=\"package-name btn btn-default\"><a title=\"Open Account\" class=\"text-info\"><strong>{{ ::item.name }}</strong></a></button><button title=\"remove component\" ng-click=\"remove({ account:item })\" class=\"btn btn-danger\"><i class=\"fa fa-times text-white\"></i></button></div>");}]);
//# sourceMappingURL=../maps/scripts/app.js.map
