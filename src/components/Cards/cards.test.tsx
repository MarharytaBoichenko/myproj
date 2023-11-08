import React from "react";
import { screen, render } from "@testing-library/react";
import { ICard } from "../../types/card.types";
import Cards from "./Cards";
import { CardsContext } from "../Context/context";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Tests for the Card List component", () => {
  const cards: ICard[] = [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      age: "50",
      birthDate: "2000-12-25",
      height: "189",
      weight: "75.4",
      gender: "male",
      image: "https://robohash.org/hicveldicta.png",
    },
    {
      id: 2,
      firstName: "Sheldon",
      lastName: "Quigley",
      age: "28",
      birthDate: "2003-08-02",
      height: "187",
      weight: "74",
      gender: "male",
      image: "https://robohash.org/doloremquesintcorrupti.png",
    },
  ];

  it("renders 2 cards", () => {
    render(
      <BrowserRouter>
        <CardsContext.Provider value={cards}>
          <Cards />
        </CardsContext.Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText(/Terry Medhurst/)).toBeInTheDocument();
    expect(screen.getByText(/Sheldon Quigley/)).toBeInTheDocument();
  });

  it("returns no cards found on wrong search", () => {
    render(
      <BrowserRouter>
        <CardsContext.Provider value={[]}>
          <Cards />
        </CardsContext.Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText(/cards not found/)).toBeInTheDocument();
  });
});
