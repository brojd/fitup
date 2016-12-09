import React from 'react';
import GymsListElem from '../GymsListElem.component';
import { mount } from 'enzyme';

const GYM = {
  '_id': {
    '$oid': '581ca32345633510184e0b5d'
  },
  'name': 'Fitness World',
  'address': {
    'city': 'Wrocław',
    'postal_code': '50-001',
    'street': 'Olszowa',
    'number': 3
  },
  'description': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'logo_url': 'http://www.feriogaj.com/wp-content/uploads/fitnes-world.png',
  'photo_urls': [
    'http://www.fru-fitness.pl/content/57.jpg',
    'http://www.top-gym.pl/files/dzialy/wydarzenia/lipiec%202015/Art%20Fitness2.png'
  ],
  'pricing': [
    {
      'name': '1 workout',
      'price': 15
    },
    {
      'name': '1 hour',
      'price': 40
    },
    {
      'name': '1 month',
      'price': 130
    }
  ],
  'cards_accepted': [
    {
      'name': 'Multisport',
      'accepted': false
    },
    {
      'name': 'ActiveSport',
      'accepted': false
    },
    {
      'name': 'OKsystem',
      'accepted': false
    },
    {
      'name': 'FitWro',
      'accepted': true
    },
    {
      'name': 'FitProfit',
      'accepted': false
    }
  ],
  'password': '$2a$10$ZqmPnzKm4QU5WRrZTkrhbup8UpDM55p2wreARh6cCc6FpUF3vv9Xa',
  'email': 'gym2@gym2.pl'
};

const wrapper = mount(<GymsListElem gym={GYM}/>);

test('Current photo is the first of photo_urls of gym on ComponentDidMount', () => {
  expect(wrapper.instance().state.currentPhoto).toBe('http://www.fru-fitness.pl/content/57.jpg');
});

test('_changePhoto method changes currentPhoto', () => {
  expect(wrapper.instance().state.currentPhoto).toBe('http://www.fru-fitness.pl/content/57.jpg');
  wrapper.instance()._changePhoto('http://www.anotherUrl.com/77.jpg');
  expect(wrapper.instance().state.currentPhoto).toBe('http://www.anotherUrl.com/77.jpg');
});

