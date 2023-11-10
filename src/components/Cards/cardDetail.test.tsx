import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { ICard } from "../../types/card.types";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CardPage from "./CardPage";
import { MemoryRouter } from "react-router-dom";
import { Routing } from "../Routing";

describe("Tests for the Detailed Card component", () => {
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
    username: "atuny0",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    bloodGroup: "A−",
    eyeColor: "Green",
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
        <Card info={card} details={true} />
      </BrowserRouter>,
    );
  });

  it("shows loader while cards are uploading", async () => {
    const { container } = render(
      <BrowserRouter>
        <CardPage />
      </BrowserRouter>,
    );
    const loader = container.querySelector(".main__loader");
    await waitFor(() => {
      expect(loader).toBeInTheDocument();
    });
  });

  it("renders card with username", () => {
    expect(screen.getByText(card.username!)).toBeInTheDocument();
  });

  it("renders card with email", () => {
    expect(screen.getByText(card.email!)).toBeInTheDocument();
  });

  it("renders card with phone", () => {
    expect(screen.getByText(card.phone!)).toBeInTheDocument();
  });

  it("clicking the close button hides the component", async () => {
    const pathRoute = "/details/1";
    const { container } = render(
      <MemoryRouter initialEntries={[pathRoute]}>
        <Routing />
      </MemoryRouter>,
    );
    const user = userEvent.setup();
    const button = container.querySelectorAll(".card__drop")[0];
    user.click(button);
    waitFor(async () => {
      expect(screen.getAllByTestId("detail")[0]).not.toBeInTheDocument();
    });
  });
});
