import React from 'react';
import CitySelect from '../CitySelect.component';
import renderer from 'react-test-renderer';

test('CitySelect renders correctly with given props', () => {
  
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
      }
    }
  ];
  const component = renderer.create(
    <CitySelect onChange={jest.fn()}
                gyms={gyms}
                userLocation='Gdańsk' />
  );
  let tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});
