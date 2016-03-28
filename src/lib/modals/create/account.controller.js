let _$http;
export default class AccountController {
  constructor($http) {
    'ngInject';
    _$http = $http;
    this.platformInfo =[];

    this.schema = {
      type: "object",
      properties: {
        clientName: {
          type: "string",
          minLength: 2,
          title: "Client Name"
        }
      }
    };

    this.form = [
      {
        key:"clientName",
        feedback: "{ 'glyphicon': false }"

      }
    ];
    this.model = {};
  }
  createAccount(){
    _$http.post('/api/account', this.model).then(data=>console.log(data))
    // this.model ={};
  }
}
