import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCountries } from "../actions/index";

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: this.props.defaultCountry,
      searchCountry: "",
      placeHolder: "Search a Country",
      intervalBeforeRequest: 1000,
      lockRequest: false
    }
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
            className="col-sm-4 input-group"
          ></input>
          <span className="col-sm-2 input-group-btn">
            <button className="btn btn-secondary"
                    onClick={(event)=> this.handleOnClick(event)}>Search
            </button>
          </span>
        </div>
      );
    } else {
      return <div>No Country found</div>;
    }
  }

  handleChange(event) {   
    this.setState({ searchCountry: event.target.value })
    if(!this.state.lockRequest){
      this.setState({lockRequest: true})
      setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
    }
  }

  handleOnClick(event){
    this.props.callback(this.state.searchCountry)
    this.search(event)  
  }

  search(e)
  {
    // this.props.callback(this.state.searchCountry)    
    this.setState({lockRequest: false})
    this.setState({ selectedCountry: e.target.value },()=>{
    this.props.getMortality(this.state.selectedCountry)
    });
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
