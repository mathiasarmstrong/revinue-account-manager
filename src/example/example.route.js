export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider.state('analyticsCore', {
    url:'',
    abstract:true,
    templateUrl:'example/home.html',
    controller: 'revinueaccountmanagementExampleController',
    controllerAs: 'example'
  })
    $urlRouterProvider.otherwise('/');
}
