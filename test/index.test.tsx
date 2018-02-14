import * as React from "react";
import {mount, shallow} from "enzyme"
import expect from "expect";
import MyComponent from "../src/index";

// Test a sync action
describe("<MyComponent>", () => {
    it("Renders awesome text", () => {
        const wrapper = shallow(<MyComponent />);

        expect(wrapper.find(".my-component").text()).toBe("This is my awesome React component.");
    });
});