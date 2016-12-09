import React from 'react';
import SearchBar from '../SearchBar.component';
import { shallow } from 'enzyme';

jest.mock('react-select');

const classes = [
  {
    'name': 'yoga',
    'description': 'string'
  },
  {
    'name': 'zumba',
    'description': 'string'
  },
  {
    'name': 'pilates',
    'description': 'string'
  }
];
const preparedTrainers = [
  {
    'value': 'yoga',
    'label': 'yoga'
  },
  {
    'value': 'zumba',
    'label': 'zumba'
  },
  {
    'value': 'pilates',
    'label': 'pilates'
  }
];

test('_prepareItems() adds value and label properties to each object in array properly', () => {
  
  const wrapper = shallow(<SearchBar items={classes} />);
  expect(wrapper.instance()._prepareItems()).toEqual(preparedTrainers);
  
});

test('_handleChange() sets chosenItems properly', () => {
  
  const wrapper = shallow(<SearchBar onChange={jest.fn()}
                                     items={classes} />);
  const choices = ['1st choice', '2nd choice', '3rd choice'];
  
  expect(wrapper.state('chosenItems').length).toBe(0);
  
  wrapper.instance()._handleChange(choices);
  
  expect(wrapper.state('chosenItems')).toContain('1st choice');
  expect(wrapper.state('chosenItems')).toContain('2nd choice');
  expect(wrapper.state('chosenItems')).toContain('3rd choice');
  expect(wrapper.state('chosenItems').length).toBe(3);
  
});


