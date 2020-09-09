import React from "react";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import { Route } from "react-router-dom";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("the app has 3 routes", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Route).length).toBe(3);
});

test("renders without crashing", () => {
  shallow(<App />);
});