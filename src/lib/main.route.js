export function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider.state('revinueaccountmanagement', {
    parent: 'analyticsCore',
    url:'/',
    controller: 'revinueaccountmanagementMainController',
    controllerAs: 'main',
    templateUrl: 'lib/main.html'
  })

}
