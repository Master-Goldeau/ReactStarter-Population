import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCountries } from "../actions/index";

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { selectedCountry: this.props.defaultCountry, searchCountry: "", placeHolder: "Search a Country" }
  }
  componentWillMount() {
    this.props.getCountries();
  }

  renderSearchBar() {
    const { countries } = this.props;
    if (countries) {
      return (
        <div>
          <input
            // value={this.state.selectedCountry}
            onChange={(event) => this.handleChange(event)}
            placeholder={this.state.placeHolder}
            className="col-lg-12 input-group"
          >
          </input>
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={(event)=> this.handleOnClick(event)}>Search
            </button>
          </span>
        </div>
      );
    } else {
      return <div>No Country found</div>;
    }
  }

  handleOnClick(event){
   this.props.callback(this.state.searchCountry)

  }

  handleChange(event) {
    console.log('---')
    console.log('-UNE SAISIE-', event.target.value)
    console.log('---')
    this.setState({ searchCountry: event.target.value })
  }
  

  search(e) {
    this.setState({ selectedCountry: e.target.value })

    //todo
  }

  render() {
    return (
      <div className="searchBar">
        {this.renderSearchBar()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCountries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
