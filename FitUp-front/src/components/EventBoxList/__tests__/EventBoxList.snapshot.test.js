import React from 'react';
import EventBoxList from '../EventBoxList.component';
import renderer from 'react-test-renderer';

test('EventBoxList renders correctly', () => {
  
  const CURRENT_TRAINER = {
    'name': 'Andrew',
    'surname': 'Kowalski',
    'about_me': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    'specialties': {
      'zumba': true,
      'yoga': true,
      'crossfit': false,
      'TBC': false,
      'pilates': false
    },
    'photo_url': 'http://trenujzmichalem.pl/wp-content/uploads/2014/01/ostr-slider-535x572.png',
    'gymId': '582ad891b402801294f4be25'
  };
  
  const CURRENT_GYM = {
    '_id': '582ad891b402801294f4be25',
    'email': 'gym1@gym1.pl',
    'password': 'gym1',
    'name': 'Fitness Academy',
    'address': {'city': 'Wrocław', 'postal_code': '50-001', 'street':'Długa', 'number':3},
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      {'name':'Multisport', 'accepted':true}, {'name':'ActiveSport', 'accepted':true}, {'name':'OKsystem', 'accepted':true}, {'name':'FitWro', 'accepted':false}, {'name':'FitProfit', 'accepted':false}
    ]
  };
  
  const component = renderer.create(
    <EventBoxList currentTrainer={CURRENT_TRAINER}
                  currentGym={CURRENT_GYM} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
