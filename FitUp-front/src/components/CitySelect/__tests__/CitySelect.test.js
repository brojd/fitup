import React from 'react';
import CitySelect from '../CitySelect.component';
import { shallow } from 'enzyme';

test('_getUniqCities() creates proper list when userLocation is the same as one of the cities in gyms array', () => {
  
  const gyms = [
    {
      'name': 'Fitness Academy',
      'address': {
        'city': 'Wrocław',
        'postal_code': '50-001',
        'street':'Długa',
        'number':3
      }
    },
    {
      'name': 'Fitness World',
      'address': {
        'city': 'Wrocław',
        'postal_code': '50-001',
        'street':'Olszowa',
        'number':3
      },
    },
    {
      'name': 'Spartan',
      'address': {
        'city': 'Opole',
        'postal_code': '50-001',
        'street':'Kwiska',
        'number':3
      },
    }
  ];
  
  const wrapper = shallow(<CitySelect onChange={jest.fn()}
                                      gyms={gyms}
                                      userLocation='Wrocław' />);
  
  expect(wrapper.instance()._getUniqCities().length).toBe(2);
  expect(wrapper.instance()._getUniqCities()).toContain('Wrocław');
  expect(wrapper.instance()._getUniqCities()).toContain('Opole');
  
});

test('_getUniqCities() creates proper list when userLocation is not the same as one of the cities in gyms array', () => {
  
  const gyms = [
    {
      'name': 'Fitness Academy',
      'address': {
        'city': 'Wrocław',
        'postal_code': '50-001',
        'street':'Długa',
        'number':3
      }
    },
    {
      'name': 'Fitness World',
      'address': {
        'city': 'Wrocław',
        'postal_code': '50-001',
        'street':'Olszowa',
        'number':3
      },
    },
    {
      'name': 'Spartan',
      'address': {
        'city': 'Opole',
        'postal_code': '50-001',
        'street':'Kwiska',
        'number':3
      },
    }
  ];
  
  const wrapper = shallow(<CitySelect onChange={jest.fn()}
                                      gyms={gyms}
                                      userLocation='Gdańsk' />);
  
  expect(wrapper.instance()._getUniqCities().length).toBe(3);
  expect(wrapper.instance()._getUniqCities()).toContain('Wrocław');
  expect(wrapper.instance()._getUniqCities()).toContain('Opole');
  expect(wrapper.instance()._getUniqCities()).toContain('Gdańsk');
  
});
