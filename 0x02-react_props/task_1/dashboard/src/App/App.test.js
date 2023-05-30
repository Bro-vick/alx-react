import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import "../../config/setupTest.js";

describe("App Components test", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />); 
    expect(component).toBeDefined();
  });
  it("Should Render the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });
  it("should Render the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });
  it("should Render the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
  it("Should Render the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });
});