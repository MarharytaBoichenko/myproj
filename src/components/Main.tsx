import React from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import { MainState } from "../types/main.types";
import { ICard } from "../types/card.types";
import { SearchState } from "../types/search.types";
import Loader from "./Loader/Loader";
import ErrorTest from "./Error/ErrorTest";

class Main extends React.PureComponent {
  state: MainState;

  constructor(props: object) {
    super(props);
    this.state = {
      search: "",
      cards: [],
      loading: false,
    };
    this.getCards = this.getCards.bind(this);
  }

  async getAllCards(search: SearchState | "") {
    let path = `https://rickandmortyapi.com/api/character`;
    const searchPath = `https://rickandmortyapi.com/api/character?name=${search?.search}`;
    if (search !== "" && search.search !== "") {
      path = searchPath;
    }
    this.setState({
      ...this.state,
      loading: true,
    });
    const response = await fetch(path);
    const data = await response.json();
    if (data.error) return null;
    const cards: ICard[] = data.results;
    this.setState({
      ...this.state,
      loading: false,
    });
    return cards;
  }

  async getCards(search: SearchState | "") {
    this.setState({
      ...this.state,
      cards: await this.getAllCards(search),
    });
  }

  render() {
    return (
      <div className="main">
        <Search submitSearch={this.getCards} />
        <ErrorTest />
        {this.state.loading == false ? (
          <Cards cards={this.state.cards} />
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
