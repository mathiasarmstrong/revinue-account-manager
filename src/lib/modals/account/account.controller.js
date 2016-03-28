let _$http, _$account;
import accountInfo from './account.constant'

export default class AccountController {
  constructor($http, $account) {
    'ngInject';
    [_$http, _$account] = [$http, $account];

    this.platformInfo =[];

    this.schema = { type: "object", properties: accountInfo };

    this.forms = _(accountInfo).map((val, key)=>{
      if (!val.hidden) return {
        key:key,
        feedback: "{ 'glyphicon': false }",
        order: val.order,
        _model: val._model
      }
    }).filter(val=>val);

    this.forms = _.groupBy(this.forms, '_model')

    this.setAccount()
    this.getAccountInfo()
  }
  setAccount(){
    this.account = angular.copy(_$account)
    delete this.platformModel;
  }
  getAccountInfo(){
    _$http.get(`/api/account/${_$account.id}`).then((data)=>{
      _.forEach(data.data.account,(plat)=>{
        this.platformInfo.push(plat);
      })
    });
  }
}
