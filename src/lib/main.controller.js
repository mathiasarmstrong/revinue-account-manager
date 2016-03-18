let _$http, _$uibModal, _$scope;
export default class MainController {
  constructor ($http, $uibModal, $scope) {
    'ngInject';
    [_$http, _$uibModal, _$scope] = arguments;
    this.accounts = [{name:'test'}]
  }
  accountClick(account){
    this.dialog = _$uibModal.open({
      animation: true,
      templateUrl: 'lib/modals/account/account.html',
      controller:'accountController',
      controllerAs:'accountCtrl',
      size: 'lg',
      resolve: {
        $account: function () {
          return account;
        }
      },
      scope:_$scope
    });
  }
}
