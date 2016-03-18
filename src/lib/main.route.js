export function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider.state('revinueaccountmanagement', {
    parent: 'ampCore',
    url:'',
    controller: 'revinueaccountmanagementMainController',
    controllerAs: 'main',
    templateUrl: 'lib/main.html'
  })

}
