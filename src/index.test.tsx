import React from "react";
import { shallow } from "enzyme";
import App from "./index";

it("Dummy", () => {
  expect("4").toEqual("4");
});

it("Get the intial value of the sum", () => {
  // Render a checkbox with label in the document
  const summingGrid = shallow(<App col={[10, 10, 10]} />).shallow();

  console.log(summingGrid.type);
  expect(summingGrid.text()).toEqual("Off");
});
