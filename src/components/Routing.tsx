import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import CardPage from "./Cards/CardPage";
import ErrorPage from "./Error/ErrorPage";

export function Routing(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="details/:id" element={<CardPage />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
