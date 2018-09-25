import React, { Component } from 'react';
import SelectBar from '../containers/select-bar';
import SearchBar from '../containers/search-bar';
import MortalityList from "../containers/mortality-list";
import axios from "axios";
import { GET_COUNTRIES, ERROR_GET_COUNTRIES, API_END_POINT } from "../actions/index"

const DEFAULT_COUNTRY = "France"

export default class App extends Component {

  onClickSearch(searchCountry) {
    //Requête AJAX à faire cf Section2 - Session 23
    console.log('---')
    console.log('', searchCountry)
    console.log('---')
    if (searchCountry) {
      axios(`${API_END_POINT}countries`).then(function (response) {
        if(response.data && response.data.results[0]){}
        dispatch({ type: GET_COUNTRIES, payload: response.data.countries })
      }).catch(function (error) {
        dispatch({ type: ERROR_GET_COUNTRIES, error: error.response.data.detail });
      });
      console.log('---')
      console.log('', response.data.countries)
      console.log('---')
    }



  }

  render() {
    return (
      <div>
        <SelectBar defaultCountry={DEFAULT_COUNTRY} />

        <SearchBar defaultCountry={DEFAULT_COUNTRY}
          callback={(event) => this.onClickSearch(event)} />

        <MortalityList defaultCountry={DEFAULT_COUNTRY} />
      </div>
    );
  }
}
