import React from "react";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import { Route } from "react-router-dom";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("the app has 4 routes", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Route).length).toBe(4);
});

test("renders the app without crashing", () => {
  shallow(<App />);
});