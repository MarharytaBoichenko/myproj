import React from "react";
import { screen, render, fireEvent, createEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";
import { BrowserRouter } from "react-router-dom";
import { SearchContext } from "../Context/context";
import { vi } from "vitest";
import { ICard } from "../../types/card.types";
import "@testing-library/jest-dom";

describe("Tests for the Search component", () => {
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
  ];

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: { cards },
        }),
    }),
  ) as unknown as typeof global.fetch;

  beforeEach(async () => {
    render(
      <BrowserRouter>
        <SearchContext.Provider value={["", () => null]}>
          <Search submitSearch={fetch} />
        </SearchContext.Provider>
      </BrowserRouter>,
    );
  });

  it("renders Search component", () => {
    const searchLine = screen.getByRole("textbox");
    expect(searchLine).toBeInTheDocument();
  });

  it("changes SearchLine text on typing", async () => {
    const expectedValue = "test";
    const search = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(search, expectedValue);
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });

  it("should prevent default action on submit", () => {
    const form = screen.getByRole("form");
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it("clicking the Search button saves the entered value to the local storage", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: vi.fn(() => null),
        setItem: vi.fn(() => null),
      },
      writable: true,
    });
    const expectedValue = "test";
    const search = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(search, expectedValue);
    const form = screen.getByRole("form");
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);
    expect(window.localStorage.setItem).toHaveBeenCalledWith("search", "test");
  });
});

describe("Tests for the Search component", () => {
  it("retrieves the value from the local storage", async () => {
    render(
      <BrowserRouter>
        <SearchContext.Provider value={["test value", () => null]}>
          <Search submitSearch={fetch} />
        </SearchContext.Provider>
      </BrowserRouter>,
    );
    const search = screen.getByRole("textbox");
    expect(search).toHaveAttribute("value", "test value");
  });
});
