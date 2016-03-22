export default class AccountController {
  constructor() {
    'ngInject';
    this.platformInfo =[];

    this.schema = {
      type: "object",
      properties: {
        clientName: {
          type: "string",
          minLength: 2,
          title: "Client Name"
        },
        title: {
          type: "string",
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
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
}
