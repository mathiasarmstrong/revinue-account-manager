let _$http, _$uibModal, _$scope;
export default class MainController {
  constructor ($http, $uibModal, $scope) {
    'ngInject';
    [_$http, _$uibModal, _$scope] = arguments;
    this.accounts = [];
    $http.get('/api/accounts').then((data)=>{
      data.data.account.forEach((account)=>{
        this.accounts.push(account)
      })
    });
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
  addButtonClick(){
   this.dialog = _$uibModal.open({
      animation: true,
      templateUrl: 'lib/modals/create/account.html',
      controller:'createAccountController',
      controllerAs:'create',
      size: 'lg',
      scope:_$scope
    });
  }
}
