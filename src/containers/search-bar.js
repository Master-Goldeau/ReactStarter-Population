import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCountries } from "../actions/index";

class SearchBar extends Component {
  componentWillMount() {
    this.props.getCountries();
  }

  renderSelectBox(){

    const {countries} = this.props;
    if(countries){
        return (
            <select className="col-md-12 input-group">
                {
                    countries.map((country)=>{
                        return <option key={country} value={country}>{country}</option>
                    })
                }
            </select>
        )
    }else{
        return <div>No Country found</div>
    }

  }

  render() {
    return <div>
        {this.renderSelectBox}
    </div>

  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCountries }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
