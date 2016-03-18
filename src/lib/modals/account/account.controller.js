export default class AccountController {
  constructor($account, $scope) {
    'ngInject';
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
