import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import ErrorBoundary from "./components/Error/Error";
import "normalize.css";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>,
);
