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
      loading: false,
    };

    this.getCards = this.getCards.bind(this);
  }

  async componentDidMount() {
    await this.getCards(this.state.search);
  }

  async getAllCards(search: SearchState | "") {
    let path = `https://rickandmortyapi.com/api/character`;
    const searchPath = `https://rickandmortyapi.com/api/character?name=${search?.search}`;
    if (search !== null && search !== "" && search.search !== "") {
      path = searchPath;
    }
    console.log(path);
    this.setState({
      ...this.state,
      loading: true,
    });
    const response = await fetch(path);
    const data = await response.json();
    console.log(data);
    if (data.error) return [];
    const cards: ICard[] = data.results;
    console.log(cards);
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
    console.log(this.state.cards);
    return (
      <div className="main">
        <Search submitSearch={this.getCards} />
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
