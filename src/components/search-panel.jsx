import React from "react";
import ItemFilter from "./item-status-filter";

class SearchPanel extends React.Component {
  state = {
    term: ""
  };
  onSearch = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearch(term);
  };
  render() {
    return (
      <div className="row mb-4">
        <input
          type="text"
          placeholder="Search"
          className="col col-sm-8"
          value={this.state.term}
          onChange={this.onSearch}
        />
        <ItemFilter
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}

export default SearchPanel;
