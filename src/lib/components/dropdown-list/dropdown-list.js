let dropdownList = ()=>{
  'ngInject';
  return {
    templateUrl:'lib/components/dropdown-list/dropdown-list.html',
    scope:{
      view:'&',
      list:'=',
      search:'=',
      error:'='
    }
  }
}
export default dropdownList;
