import React from "react";

class SearchLine extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="input search__input"
        // value={this.props.search}
        // onChange={this.props.setSearch}
      />
    );
  }
}

export default SearchLine;
