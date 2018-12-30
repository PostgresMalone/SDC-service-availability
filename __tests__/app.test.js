import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/src/components/App.jsx';

describe('App Render', () => {
  describe('render()', () => {
    test('Renders the top-level component', () => {
      const wrapper =  shallow(<App />);
      const component = wrapper.shallow();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});