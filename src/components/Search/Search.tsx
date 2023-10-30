import React from "react";
import SearchLine from "./SearchLine";
import SearchButton from "./SearchButton";
import { SearchProps, SearchState } from "../../types/search.types";
import "./style.css";

class Search extends React.PureComponent<SearchProps> {
  state: SearchState;

  constructor(props: SearchProps) {
    super(props);

    this.state = {
      search: localStorage.getItem("search") || "",
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  async componentDidMount() {
    await this.submitSearch();
  }

  async submitSearch(event?: React.SyntheticEvent) {
    if (event) event.preventDefault();
    this.props.submitSearch(this.state);
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    this.setState({
      search: event.currentTarget.value,
    });
    localStorage.setItem("search", value);
  }

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <div className="search">
          <SearchLine
            search={this.state.search}
            onInputChange={this.onInputChange}
          />
          <SearchButton />
        </div>
      </form>
    );
  }
}

export default Search;
