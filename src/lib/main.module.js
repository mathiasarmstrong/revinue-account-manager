import MainController from './main.controller';
import { providerConfig } from './main.config';
import AccountController from './modals/account/account.controller'
import { routerConfig } from './main.route';

angular.module('revinue.account.management',  ['ui.select', 'ui.router', 'ui.bootstrap'])
.config(providerConfig)
.config(routerConfig)
.controller('revinueaccountmanagementMainController', MainController)
.controller('accountController', AccountController);
