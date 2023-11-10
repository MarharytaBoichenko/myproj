import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Pagination from "./Pagination";
import "@testing-library/jest-dom";

describe("Pagination", () => {
  it("renders Pagination component", () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination totalPages={1} />
      </BrowserRouter>,
    );
    const pages = container.querySelector(".pages");
    expect(pages).toBeInTheDocument();
  });

  it("renders Pagination component with passed pages amount", () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination totalPages={10} />
      </BrowserRouter>,
    );
    const pages = container.querySelectorAll(".page");
    expect(pages.length).toBe(10);
  });

  it("switches to page on click", async () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination totalPages={10} />
      </BrowserRouter>,
    );
    const pageClick = container.querySelectorAll(".page")[1];
    const user = userEvent.setup();
    await user.click(pageClick);
    const params = new URLSearchParams(location.search).get("page");
    expect(params).toContain(2);
  });
});
