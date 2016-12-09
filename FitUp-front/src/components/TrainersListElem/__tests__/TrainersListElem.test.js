import React from 'react';
import TrainersListElem from '../TrainersListElem.component';
import { mount } from 'enzyme';

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
    'id': 2,
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

const trainer = {
  'name': 'Sabina',
  'surname': 'Nowak',
  'about_me': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  'specialties': {
    'zumba': false,
    'yoga': false,
    'crossfit': false,
    'TBC': false,
    'pilates': true
  },
  'photo_url': 'http://muzeumpmw.pl/wp-content/uploads/2012/09/wpid-trener-personalny-dobrym-wsparciem-w-czasie-odchudzania-081d858b1d0db5ecb5c2a450ef04253c.jpg',
  'gymId': 1
};

test('_getSpecialties() returns proper list of specialties of a trainer', () => {
  
  const wrapper = mount(<TrainersListElem className='someClass'
                                          gyms={gyms}
                                          trainer={trainer} />);
  
  expect(wrapper.instance()._getSpecialties(trainer).length).toBe(1);
  expect(wrapper.instance()._getSpecialties(trainer)).toContain('pilates');
  
});

test('_getGymById() returns proper gym', () => {
  
  const wrapper = mount(<TrainersListElem className='someClass'
                                          gyms={gyms}
                                          trainer={trainer} />);
  
  expect(wrapper.instance()._getGymById()).toEqual(gyms[0]);
  
});
