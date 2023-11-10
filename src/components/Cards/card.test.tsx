import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { ICard } from "../../types/card.types";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Tests for the Card component", () => {
  const card: ICard = {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    age: "50",
    birthDate: "2000-12-25",
    height: "189",
    weight: "75.4",
    gender: "male",
    image: "https://robohash.org/hicveldicta.png",
  };

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: { card },
        }),
    }),
  ) as unknown as typeof global.fetch;

  beforeEach(async () => {
    render(
      <BrowserRouter>
        <Card info={card} details={false} key={0} />
      </BrowserRouter>,
    );
  });

  it('renders card with image src and alt="image"', async () => {
    const img = screen.getAllByRole("img")[0];
    expect(img).toHaveAttribute(
      "src",
      expect.stringMatching(/\/robohash.org\/hicveldicta.png/),
    );
    expect(img).toHaveAttribute("alt", "image");
  });

  it("renders card with age", () => {
    expect(screen.getByText(card.age)).toBeInTheDocument();
  });

  it("renders card with gender", () => {
    expect(screen.getByText(card.gender)).toBeInTheDocument();
  });

  it("renders card with birth date", () => {
    expect(screen.getByText(card.birthDate)).toBeInTheDocument();
  });

  it("renders card with birth date", () => {
    expect(screen.getByText(card.height)).toBeInTheDocument();
  });

  it("clicking on a card opens a detailed and clicking triggers an additional API call", async () => {
    const { container } = render(
      <BrowserRouter>
        <Card info={card} details={false} key={0} />
      </BrowserRouter>,
    );
    const user = userEvent.setup();
    const detailsLink = container.querySelectorAll(".card")[0];
    await user.click(detailsLink);
    waitFor(async () => {
      expect(screen.getAllByTestId("detail")[0]).toBeInTheDocument();
      expect(fetch).toHaveBeenCalled();
    });
  });

  it("returns no card found", async () => {
    render(
      <BrowserRouter>
        <Card info={null} details={false} />
      </BrowserRouter>,
    );
    expect(screen.getByText(/card not found/)).toBeInTheDocument();
  });
});
