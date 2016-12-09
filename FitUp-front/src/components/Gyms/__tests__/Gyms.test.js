import React from 'react';
import Gyms from '../Gyms.component';
import { mount } from 'enzyme';

jest.mock('react-select');

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
  },
  {
    'name': 'Spartan',
    'address': {'city': 'Opole', 'postal_code': '50-001', 'street':'Kwiska', 'number':3},
    'description': 'Sed ut perspiciatis unde omnis iste natus error.',
    'logo_url': 'http://www.spartan.wroc.pl/files/spartan_logo.gif',
    'photo_urls': [
      'http://czasatrakcji.pl/uploads/pictures/da1b79c9564e4bdac4cf583c3275404753dd2680.jpg'
    ],
    'pricing': [
      {'name':'1 workout', 'price':15}
    ],
    'cards_accepted': [
      {'name':'Multisport', 'accepted':true}
    ]
  }
];

test('initial state for gyms', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Gdańsk' />);
  expect(wrapper.state('gyms')).toBe(gyms);
  
});

test('initial state for currentCity', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Gdańsk' />);
  expect(wrapper.state('currentCity')).toBe('Gdańsk');
  
});

test('initial state for filteredGyms', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Gdańsk' />);
  const wrapper2 = mount(<Gyms gyms={gyms} userLocation='Wrocław' />);
  
  expect(wrapper.state('filteredGyms').length).toBe(0);
  expect(wrapper2.state('filteredGyms').length).toBe(2);
  expect(wrapper2.state('filteredGyms')).toContain(gyms[0]);
  expect(wrapper2.state('filteredGyms')).toContain(gyms[1]);
  
});

test('initial state for gymsInCity', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Gdańsk' />);
  const wrapper2 = mount(<Gyms gyms={gyms} userLocation='Wrocław' />);
  
  expect(wrapper.state('gymsInCity').length).toBe(0);
  expect(wrapper2.state('gymsInCity').length).toBe(2);
  expect(wrapper2.state('gymsInCity')).toContain(gyms[0]);
  expect(wrapper2.state('gymsInCity')).toContain(gyms[1]);
  
});

test('_handleCityChange() set state properly', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Wrocław' />);
  
  expect(wrapper.state('gymsInCity').length).toBe(2);
  expect(wrapper.state('filteredGyms').length).toBe(2);
  expect(wrapper.state('gymsInCity')).toContain(gyms[0]);
  expect(wrapper.state('gymsInCity')).toContain(gyms[1]);
  expect(wrapper.state('filteredGyms')).toContain(gyms[0]);
  expect(wrapper.state('filteredGyms')).toContain(gyms[1]);
  
  wrapper.instance()._handleCityChange('Opole');
  expect(wrapper.state('gymsInCity').length).toBe(1);
  expect(wrapper.state('filteredGyms').length).toBe(1);
  expect(wrapper.state('gymsInCity')).toContain(gyms[2]);
  expect(wrapper.state('filteredGyms').length).toBe(1);
  expect(wrapper.state('filteredGyms')).toContain(gyms[2]);
  expect(wrapper.state('currentCity')).toBe('Opole');
  
  wrapper.instance()._handleCityChange('Gdańsk');
  expect(wrapper.state('gymsInCity').length).toBe(0);
  expect(wrapper.state('filteredGyms').length).toBe(0);
  expect(wrapper.state('currentCity')).toBe('Gdańsk');
  
});

test('_handleGymChange() set state properly', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Opole' />);
  const wrapper2 = mount(<Gyms gyms={gyms} userLocation='Wrocław' />);
  const newChoice = [
    {
      label: 'Spartan',
      value: 'Spartan'
    }
  ];
  const newChoice2 = [
    {
      label: 'Fitness Academy',
      value: 'Fitness Academy'
    }
  ];
  const newChoice3 = [
    {
      label: 'Spartan',
      value: 'Spartan'
    },
    {
      label: 'Fitness Academy',
      value: 'Fitness Academy'
    }
  ];
  
  expect(wrapper.state('filteredGyms').length).toBe(1);
  expect(wrapper.state('filteredGyms')).toContain(gyms[2]);
  expect(wrapper.state('currentChoices').length).toBe(0);
  
  wrapper.instance()._handleGymChange(newChoice);
  expect(wrapper.state('currentChoices').length).toBe(1);
  expect(wrapper.state('currentChoices')).toContain(newChoice[0]);
  expect(wrapper.state('filteredGyms').length).toBe(1);
  expect(wrapper.state('filteredGyms')).toContain(gyms[2]);
  
  wrapper2.instance()._handleGymChange(newChoice2);
  expect(wrapper2.state('currentChoices').length).toBe(1);
  expect(wrapper2.state('currentChoices')).toContain(newChoice2[0]);
  expect(wrapper2.state('filteredGyms').length).toBe(1);
  expect(wrapper2.state('filteredGyms')).toContain(gyms[0]);
  
  wrapper.instance()._handleGymChange(newChoice3);
  expect(wrapper.state('currentChoices').length).toBe(2);
  expect(wrapper.state('currentChoices')).toBe(newChoice3);
  expect(wrapper.state('filteredGyms').length).toBe(1);
  expect(wrapper.state('filteredGyms')).toContain(gyms[2]);
  
});

test('filterArray() works properly', () => {
  
  const wrapper = mount(<Gyms gyms={gyms} userLocation='Opole' />);
  const choices = [
    {
      label: 'Spartan',
      value: 'Spartan'
    },
    {
      label: 'Fitness Academy',
      value: 'Fitness Academy'
    }
  ];
  
  expect(wrapper.instance().filterArray('Spartan', choices)).toBeTruthy();
  expect(wrapper.instance().filterArray('Fitness Academy', choices)).toBeTruthy();
  expect(wrapper.instance().filterArray('Spartan', [])).toBeTruthy();
  expect(wrapper.instance().filterArray('Spartaaaa', choices)).toBeFalsy();
  expect(wrapper.instance().filterArray('FitnessAcademy', choices)).toBeFalsy();
  
});
