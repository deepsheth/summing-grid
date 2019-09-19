import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

it("renders without crashing", () => {
  const rootElement = document.createElement("div");
  rootElement.setAttribute("id", "root");
  ReactDOM.render(<App />, rootElement);
});
