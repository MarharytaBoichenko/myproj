import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import LimitPage from "./LimitPage";

describe("Limit Page", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <LimitPage />
      </BrowserRouter>,
    );
  });

  it("renders Limit Page component", () => {
    const limitButton = screen.getByText("Change Limit Page");
    expect(limitButton).toBeDefined();
  });

  it("renders Limit Placeholder", () => {
    const limit = screen.getByRole("textbox");
    expect(limit).toHaveAttribute("placeholder", "30");
  });

  it("should prevent default action on submit", () => {
    const form = screen.getByRole("form");
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
