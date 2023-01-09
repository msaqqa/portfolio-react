import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemProvider } from "./context/theme";

ReactDOM.render(
  <ThemProvider>
    <App />
  </ThemProvider>,
  document.getElementById("root")
);
