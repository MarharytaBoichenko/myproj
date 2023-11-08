import React from "react";
import ReactDOM from "react-dom/client";
import { Routing } from "./components/Routing";
import "normalize.css";
import "./style.css";
import { BrowserRouter } from "react-router-dom";

const App = () => <Routing />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

export default App;
