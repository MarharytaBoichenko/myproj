import React from "react";
import { SearchLineProps } from "../../types/search.types";

class SearchLine extends React.PureComponent<SearchLineProps> {
  render() {
    return (
      <input
        type="text"
        className="input search__input"
        value={this.props.search}
        onChange={this.props.onInputChange}
      />
    );
  }
}

export default SearchLine;
