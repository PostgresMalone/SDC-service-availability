import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Availability from '../client/src/components/Availability.jsx';

describe('Availability Render', () => {
  describe('render()', () => {
    test('Renders the top-level component', () => {
      const wrapper =  shallow(<Availability />);
      const component = wrapper.shallow();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});