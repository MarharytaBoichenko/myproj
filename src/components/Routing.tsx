import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import CardPage from "./Cards/CardPage";

export function Routing(): JSX.Element {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="details/:id" element={<CardPage />} />
          </Route>
          <Route path="/*" element={<h2>Page not exists</h2>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
