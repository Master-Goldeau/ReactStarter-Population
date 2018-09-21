import React, { Component } from 'react';
import SelectBar from '../containers/select-bar';
import SearchBar from '../containers/search-bar';
const DEFAULT_COUNTRY = "France"

export default class App extends Component {

  onClickSearch(searchCountry){
    //Requête AJAX à faire cf Section2 - Session 23
    console.log('---')
    console.log('',searchCountry)
    console.log('---')

  }

  render() {
    return (
      <div>
        <SelectBar defaultCountry={DEFAULT_COUNTRY} />
        <SearchBar defaultCountry={DEFAULT_COUNTRY} callback={(event)=>this.onClickSearch(event)}/>
      </div>
    );
  }
}
