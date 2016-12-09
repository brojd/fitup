import React from 'react';
import Gyms from '../Gyms.component';
import renderer from 'react-test-renderer';

jest.mock('react-select');

test('Gyms renders correctly excluding 3rd party react-select', () => {
  
  const gyms = [
    {
      '_id': 1,
      'name': 'Fitness Academy',
      'address': {'city': 'Wrocław', 'postal_code': '50-001', 'street':'Długa', 'number':3},
      'logo_url': 'https://pbs.twimg.com/profile_images/378800000513930765/1518318ade4947d639fca13c47b457f6.jpeg',
      'photo_urls': [
        'https://www.thegymgroup.com/fileadmin/uploads/gym/Photos/Gym_Leicester/Leicester14.jpg'
      ],
      'pricing': [
        {'name':'1 workout', 'price':15}
      ],
      'cards_accepted': [
        {'name':'Multisport', 'accepted':true}, {'name':'FitProfit', 'accepted':false}
      ]
    },
    {
      '_id': 2,
      'name': 'Fitness World',
      'address': {'city': 'Wrocław', 'postal_code': '50-001', 'street':'Olszowa', 'number':3},
      'logo_url': 'http://www.feriogaj.com/wp-content/uploads/fitnes-world.png',
      'photo_urls': [
        'http://www.fru-fitness.pl/content/57/0/1370494719_6ca505f63f8064d96281ac502dd903f2.jpg'
      ],
      'pricing': [
        {'name':'1 workout', 'price':15}
      ],
      'cards_accepted': [
        {'name':'Multisport', 'accepted':false}
      ]
    }
  ];
  
  const component = renderer.create(
    <Gyms gyms={gyms} userLocation='Wrocław' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
