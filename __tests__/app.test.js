import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Availability from '../client/src/components/Availability.jsx';
import Navbar from '../client/src/components/Navbar.jsx';
import Modal from '../client/src/components/Modal.jsx';
import Calendar from '../client/src/components/Calendar.jsx';

describe('Availability Render', () => {
  describe('Availability', () => {
    test('Renders the top-level component', () => {
      const wrapper =  shallow(<Availability />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  const data = {
    type: 'Apartment',
    location: 'Houston',
    reviews: 199,
    stars: '4.7',
    price: 199,
    dates: {2019: {
      0: {1: {vacancy: true, price: 177}},
      1: {1: {vacancy: true, price: 177}
    }}},
    id: 69,
  }
  describe('Navbar', () => {
    test('Renders with data', () => {
      const wrapper = shallow(
        <Navbar 
          type={data.type} 
          location={data.location} 
          reviews={data.reviews} 
          stars={data.stars}
          price={data.price}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Modal', () => {
    test('Renders with data', () => {
      const wrapper = shallow(
        <Modal
          dates={data.dates} 
          reviews={data.reviews} 
          stars={data.stars} 
          price={data.price}
          id={data.id}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('Modal calendar should be hidden on load up', () => {
      const wrapper = shallow(<Modal />);
      expect(wrapper.state('calendar')).toEqual(false);
    });
  });

  const calendarData = {
    checkin: null,
    limit: null,
    checkout: null,
    dates: data.dates,
  }
  describe('Calendar', () => {
    test('Renders with data', () => {
      const wrapper = shallow(
        <Calendar 
          dates={calendarData.dates}
          checkin={calendarData.checkin}
          checkout={calendarData.checkout}
          limit={calendarData.limit}
        /> 
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('Renders initial state with null/empty array and object', () => {
      const fn = jest.fn;
      const component = mount(
        <Calendar 
          dates={data.dates}
          checkin={data.in}
          checkout={data.out}
          limit={data.limit}
        /> 
      );
      component.find('.next-month-button').simulate('click');

    });
  });


});