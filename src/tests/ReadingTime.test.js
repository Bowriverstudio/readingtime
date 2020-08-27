/**
 * React / Frontity dependencies
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Internal dependencies
 */
import ReadingTime from "../ReadingTime";

it("ReadingTime renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReadingTime />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
