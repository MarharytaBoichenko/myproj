import React from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import { MainState } from "../types/main.types";
import { ICard } from "../types/card.types";
import { SearchState } from "../types/search.types";
import Loader from "./Loader/Loader";

class Main extends React.PureComponent {
  state: MainState;

  constructor(props: object) {
    super(props);
    this.state = {
      search: null,
      cards: null,
    };

    this.getCards = this.getCards.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  async componentDidMount() {
    await this.getCards();
  }

  submitSearch(searchState: SearchState | null) {
    this.setState({
      ...this.state,
      search: searchState || null,
    });
    console.log(this.state.search);
  }

  async getAllCards() {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    if (data.error) return [];
    const cards: ICard[] = data.results;
    return cards;
  }

  async getCards() {
    this.setState({
      ...this.state,
      cards: await this.getAllCards(),
    });
  }

  render() {
    return (
      <div className="main">
        <Search submitSearch={this.submitSearch} />
        {this.state.search && this.state.cards ? (
          <Cards cards={this.state.cards} search={this.state.search} />
        ) : (
          <div className="main__loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
