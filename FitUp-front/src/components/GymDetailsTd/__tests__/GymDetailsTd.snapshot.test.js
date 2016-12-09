import React from 'react';
import GymDetailsTd from '../GymDetailsTd.component';
import renderer from 'react-test-renderer';

test('GymDetailsTd renders correctly with given gym property', () => {
  
  const GYM = {
    'email': 'gym1@gym1.pl',
    'password': 'gym1',
    'name': 'Fitness Academy',
    'address': {'city': 'Wrocław', 'postal_code': '50-001', 'street':'Długa', 'number':3},
    'description': 'Lorem ipsum in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'logo_url': 'https://pbs.twimg.com/profile_images/378800000513930765/1518318ade4947d639fca13c47b457f6.jpeg',
    'photo_urls': [
      'https://www.thegymgroup.com/fileadmin/uploads/gym/Photos/Gym_Leicester/Leicester14.jpg'
    ],
    'pricing': [
      {'name':'1 workout', 'price':15},
      {'name':'1 hour', 'price':40},
      {'name':'1 month', 'price':130}
    ],
    'cards_accepted': [
      {'name':'Multisport', 'accepted':true},
      {'name':'ActiveSport', 'accepted':true},
      {'name':'OKsystem', 'accepted':true},
      {'name':'FitWro', 'accepted':false},
      {'name':'FitProfit', 'accepted':false}
    ]
  };
  
  const component = renderer.create(
    <GymDetailsTd gym={GYM} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
