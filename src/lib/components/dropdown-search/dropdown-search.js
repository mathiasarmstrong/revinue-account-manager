let dropdownSearch = ()=>{
  'ngInject';
  return{
    templateUrl:'lib/components/dropdown-search/dropdown-search.html',
    scope:{
      add:'&',
      search:'='
    }
  }
}
export default dropdownSearch
