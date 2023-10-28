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
      search: "",
      cards: [],
    };

    this.getCards = this.getCards.bind(this);
  }

  async componentDidMount() {
    await this.getCards();
  }

  async getAllCards(search: SearchState | "") {
    let path = `https://rickandmortyapi.com/api/character`;
    const searchPath = `https://rickandmortyapi.com/api/character?name=${search?.search}`;
    if (search !== null && search !== "" && search.search !== "") {
      path = searchPath;
    }
    console.log(path);
    const response = await fetch(path);
    const data = await response.json();
    console.log(data);
    if (data.error) return [];
    const cards: ICard[] = data.results;
    console.log(cards);
    return cards;
  }

  async getCards() {
    this.setState({
      ...this.state,
      cards: await this.getAllCards(this.state.search),
    });
  }

  render() {
    console.log(this.state.cards);
    return (
      <div className="main">
        <Search submitSearch={this.getAllCards} />
        {this.state.cards ? (
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
