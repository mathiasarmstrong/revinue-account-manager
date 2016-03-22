import MainController from './main.controller';
import { providerConfig } from './main.config';
import AccountController from './modals/account/account.controller'
import CreateAccountController from './modals/create/account.controller'
import { routerConfig } from './main.route';
import dropdownSearch from './components/dropdown-search/dropdown-search';
import dropdownList from './components/dropdown-list/dropdown-list';

angular.module('revinue.account.management',  ['schemaForm', 'ui.select', 'ui.router', 'ui.bootstrap'])
.config(providerConfig)
.config(routerConfig)
.controller('revinueaccountmanagementMainController', MainController)
.controller('accountController', AccountController)
.controller('createAccountController', CreateAccountController)
.directive('dropdownSearch', dropdownSearch)
.directive('dropdownList', dropdownList)
