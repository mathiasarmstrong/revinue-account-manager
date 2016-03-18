
import { config } from './example.config';
import { routerConfig } from './example.route';
import { runBlock } from './example.run';
import { ExampleController } from './example.controller';
angular.module('revinue.account.management.example', ['ui.bootstrap', 'ui.router', 'revinue.account.management', 'hljs'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('revinueaccountmanagementExampleController', ExampleController);
