import React from "react";
import Main from "./Main";
import ErrorBoundary from "./Error/Error";

export const Layout: React.FC = () => (
  <>
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  </>
);
