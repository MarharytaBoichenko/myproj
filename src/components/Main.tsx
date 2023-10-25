import React from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";

class Main extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Cards cards={} />
      </>
    );
  }
}

export default Main;
