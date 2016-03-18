export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider.state('ampCore', {
    url:'/',
    abstract:true,
    templateUrl:'example/home.html',
    controller: 'revinueaccountmanagementExampleController',
    controllerAs: 'example'
  })
    $urlRouterProvider.otherwise('/');
}
