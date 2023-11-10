import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "vitest";
import { Routing } from "./Routing";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Routing App", () => {
  test("makes correct routing render app", async () => {
    const { container } = render(
      <BrowserRouter>
        <Routing />
      </BrowserRouter>,
    );
    const mainClass = container.querySelector(".main");
    expect(mainClass).toBeInTheDocument();
  });

  test("landing on a bad page", async () => {
    const badRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routing />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Page not exists/i)).toBeInTheDocument();
  });
});
