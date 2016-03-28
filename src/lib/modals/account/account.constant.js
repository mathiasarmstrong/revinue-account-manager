const accountInfo = {
  m1_rev_goal:{
    title:'Month 1 Goal',
    type:'number',
    _model:'account'
  },
  m1_rev_upside:{
    title:'Month 1 Upside',
    type:'number',
    _model:'account'
  },
  m2_rev_goal:{
    title:'Month 2 Goal',
    type:'number',
    _model:'account'
  },
  m2_rev_upside:{
    title:'Month 2 Upside',
    type:'number',
    _model:'account'
  },
  m3_rev_goal:{
    title:'Month 3 Goal',
    type:'number',
    _model:'account'
  },
  m3_rev_upside:{
    title:'Month 3 Upside',
    type:'number',
    _model:'account'
  },
  quarter_goal:{
    title:'Quarterly Goal',
    type:'number',
    _model:'account'
  },
  name: {
    type: "string",
    _model:'platform',
    minLength: 2,
    title: "Platform Name",
    order:0
  },
  platform: {
    title:'Platform',
    type: "string",
    _model:'platform',
    enum: ['facebook','pinterest','twitter'],
    order:0
  },
  id:{
    hidden:true
  }
}

export default accountInfo;
