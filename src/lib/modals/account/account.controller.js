export default class AccountController {
  constructor($http, $account, $scope) {
    'ngInject';

  $http.get('/accounts').then((data)=>{
    console.log(data)
  });
  this.schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 2,
          title: "Name"
        },
        title: {
          type: "string",
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
        }
      }
    };

    this.form = [
      {
        key:"name",
        feedback: "{ 'glyphicon': false }"
      }
    ];

    this.model = {};

    $account.sections = ['static', 'editable', 'long']
    $account.static = {
      "id":'test',
      "Client Name":'test',
      "Business Unit":'test',
      "Geography":'test',
      "Quarter Total Projection":'test',
      "Current Month Strategist Projection":'test',
      "Current Month Linear Projection":'test',
      "Quarter Total Upside Case":'test',
      "Feb & March - Upside vs. Base":'test',
      "Total QTD Actual":'test',
      "Daily QTD Average Pacing":'test',
      "Quarterly Linear Projection":'test',
      "Quarterly Current Projection":'test',
      "Seven Day Trailing Projection":'test',
      "Three Day Trailing Projection":'test',
      "Pacing Required for Quarterly Goal":'test',
      "Yesterday Pacing":'test',
      "3 Day Trailing Pacing":'test',
      "7 Day Trailing Pacing":'test',
      "Pacing vs. Goal":'test',
      "Actual vs. Goal":'test',
      "Projected Quarterly Spend $":'test',
      "Linear Monthly Spend $":'test',
      "AMP Fee %":'test',
      "IO End Date(s)":'test',
      "master_id":'test'
    };
    $account.editable ={
      'Lead':'test',
      'Business Unit Head':'test',
      'January Projection':'test',
      'February Projection':'test',
      'March Projection':'test',
      'January Upside Case':'test',
      'February Upside Case':'test',
      'March Upside Case':'test',
      'Quarter Total Goal':'test',
      'Current Month Goal':'test',
      'January Actual':'test',
      'February Actual':'test',
      'March Actual':'test',
      'Month1 Fee %':'test',
      'Month2 Fee %':'test',
      'Month3 Fee %':'test'
    }
    $account.long = {
      'Min Fee Notes (Tiers, Special Billing, etc.)':'test'
    }
    $scope.account = $account
  }
  createSections(){

  }
}
