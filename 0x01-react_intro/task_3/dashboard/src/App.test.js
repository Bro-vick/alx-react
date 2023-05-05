import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Component Tests", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });
    
})