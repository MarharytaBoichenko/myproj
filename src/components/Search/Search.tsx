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
      search: "",
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.saveState = this.saveState.bind(this);
    this.setInputSearch = this.setInputSearch.bind(this);
  }

  async componentDidMount() {
    const localSearch = localStorage.getItem("search.state");
    if (localSearch) this.setState({ ...JSON.parse(localSearch) });
    await this.submitSearch();
  }

  componentDidUpdate() {
    this.saveState();
  }

  componentWillUnmount() {
    this.saveState();
  }

  saveState() {
    localStorage.setItem("search.state", JSON.stringify(this.state));
  }

  async submitSearch(event?: React.SyntheticEvent) {
    if (event) event.preventDefault();
    this.props.submitSearch(null);
    await this.wait(1000);
    this.props.submitSearch(this.state);
    console.log(this.state);
  }

  wait(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  setInputSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      search: event.currentTarget.value,
    });
  }

  render() {
    return (
      <form onSubmit={async () => await this.submitSearch()}>
        <div className="search">
          <SearchLine
            search={this.state.search}
            setInputSearch={this.setInputSearch}
          />
          <SearchButton />
        </div>
      </form>
    );
  }
}

export default Search;
