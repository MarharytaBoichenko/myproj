import { MemoryRouter } from "react-router-dom";
import { Routing } from "../components/Routing";
import { render } from "@testing-library/react";

export const renderWithRouter = (
  Component: JSX.Element,
  initialRoute = "/",
) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routing />
      {Component}
    </MemoryRouter>,
  );
};
