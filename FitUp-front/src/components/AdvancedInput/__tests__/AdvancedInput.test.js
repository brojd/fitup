import React from 'react';
import AdvancedInput from '../AdvancedInput.component';
import { shallow } from 'enzyme';

jest.mock('react-select');

test('_handleChange() sets choices properly', () => {
  
  const wrapper = shallow(<AdvancedInput onChange={jest.fn()} />);
  const choices = ['1st choice', '2nd choice', '3rd choice'];
  
  expect(wrapper.state('choices').length).toBe(0);
  
  wrapper.instance()._handleChange(choices);
  
  expect(wrapper.state('choices')).toContain('1st choice');
  expect(wrapper.state('choices')).toContain('2nd choice');
  expect(wrapper.state('choices')).toContain('3rd choice');
  expect(wrapper.state('choices').length).toBe(3);
  
});

test('_prepareItems() adds value and label properties to each object in array without surname properly', () => {
  
  const gyms = [
    {
      'name': 'Fitness Academy'
    },
    {
      'name': 'Fitness World'
    },
    {
      'name': 'Spartan'
    }
  ];
  const preparedGyms = [
    {
      'value': 'Fitness Academy',
      'label': 'Fitness Academy'
    },
    {
      'value': 'Fitness World',
      'label': 'Fitness World'
    },
    {
      'value': 'Spartan',
      'label': 'Spartan'
    }
  ];
  const wrapper = shallow(<AdvancedInput items={gyms} />);
  
  expect(wrapper.instance()._prepareItems()).toEqual(preparedGyms);
    
});

test('_prepareItems() adds value and label properties to each object in array with surname properly', () => {
  
  const trainers = [
    {
      'name': 'Andrew',
      'surname': 'Kowalski'
    },
    {
      'name': 'Sabina',
      'surname': 'Nowak'
    },
    {
      'name': 'Peter',
      'surname': 'Nowicki'
    }
  ];
  const preparedTrainers = [
    {
      'value': 'Andrew Kowalski',
      'label': 'Andrew Kowalski'
    },
    {
      'value': 'Sabina Nowak',
      'label': 'Sabina Nowak'
    },
    {
      'value': 'Peter Nowicki',
      'label': 'Peter Nowicki'
    }
  ];
  const wrapper = shallow(<AdvancedInput items={trainers} />);
  
  expect(wrapper.instance()._prepareItems()).toEqual(preparedTrainers);
  
});
