import React from 'react';
import Trainers from '../Trainers.component';
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
    '_id': 3,
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
const trainers = [
  {
    'name': 'Sabina',
    'surname': 'Nowak',
    'about_me': 'Lorem ipsum dolor sit amet',
    'specialties': {
      'zumba': false,
      'yoga': false,
      'crossfit': false,
      'TBC': false,
      'pilates': true
    },
    'photo_url': 'http://muzeumpmw.pl/wp-content/uploads/2012/09/wpid-trener-personalny-dobrym-wsparciem-w-czasie-odchudzania-081d858b1d0db5ecb5c2a450ef04253c.jpg',
    'gymId': 1
  },
  {
    'name': 'Peter',
    'surname': 'Nowicki',
    'about_me': 'Lorem ipsum dolor sit amet',
    'specialties': {
      'zumba': true,
      'yoga': false,
      'crossfit': false,
      'TBC': false,
      'pilates': true
    },
    'photo_url': 'http://www.treningi-personalne.com/images/Jakub-Kulej-trener-personalny-500.jpg',
    'gymId': 2
  },
  {
    'name': 'Konrad',
    'surname': 'Okowski',
    'about_me': 'Lorem ipsum dolor sit amet',
    'specialties': {
      'zumba': true,
      'yoga': false,
      'crossfit': false,
      'TBC': true,
      'pilates': false
    },
    'photo_url': 'http://www.znanytrener.pl/wp-content/uploads/image/2011/09/pawel-247x300.jpg',
    'gymId': 3
  }
];

test('initial state for gyms', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Gdańsk' />);
  expect(wrapper.state('gyms')).toBe(gyms);
  
});

test('initial state for trainers', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Gdańsk' />);
  expect(wrapper.state('trainers')).toBe(trainers);
  
});

test('initial state for currentCity', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Gdańsk' />);
  expect(wrapper.state('currentCity')).toBe('Gdańsk');
  
});

test('initial state for filteredTrainers', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Gdańsk' />);
  const wrapper2 = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Wrocław' />);
  const wrapper3 = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Opole' />);
  
  expect(wrapper.state('filteredTrainers').length).toBe(0);
  expect(wrapper2.state('filteredTrainers').length).toBe(2);
  expect(wrapper3.state('filteredTrainers').length).toBe(1);
  expect(wrapper2.state('filteredTrainers')).toContain(trainers[0]);
  expect(wrapper2.state('filteredTrainers')).toContain(trainers[1]);
  expect(wrapper3.state('filteredTrainers')).toContain(trainers[2]);
  
});

test('initial state for trainersInCity', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Gdańsk' />);
  const wrapper2 = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Wrocław' />);
  const wrapper3 = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Opole' />);
  
  expect(wrapper.state('trainersInCity').length).toBe(0);
  expect(wrapper2.state('trainersInCity').length).toBe(2);
  expect(wrapper3.state('trainersInCity').length).toBe(1);
  expect(wrapper2.state('trainersInCity')).toContain(trainers[0]);
  expect(wrapper2.state('trainersInCity')).toContain(trainers[1]);
  expect(wrapper3.state('trainersInCity')).toContain(trainers[2]);
  
});

test('_handleCityChange() set state properly', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Wrocław' />);
  
  expect(wrapper.state('trainersInCity').length).toBe(2);
  expect(wrapper.state('filteredTrainers').length).toBe(2);
  expect(wrapper.state('trainersInCity')).toContain(trainers[0]);
  expect(wrapper.state('trainersInCity')).toContain(trainers[1]);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[0]);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[1]);
  
  wrapper.instance()._handleCityChange('Opole');
  expect(wrapper.state('trainersInCity').length).toBe(1);
  expect(wrapper.state('filteredTrainers').length).toBe(1);
  expect(wrapper.state('trainersInCity')).toContain(trainers[2]);
  expect(wrapper.state('filteredTrainers').length).toBe(1);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[2]);
  expect(wrapper.state('currentCity')).toBe('Opole');
  
  wrapper.instance()._handleCityChange('Gdańsk');
  expect(wrapper.state('trainersInCity').length).toBe(0);
  expect(wrapper.state('filteredTrainers').length).toBe(0);
  expect(wrapper.state('currentCity')).toBe('Gdańsk');
  
});

test('_handleTrainerChange() set state properly', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Wrocław'/>);
  const wrapper2 = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Opole'/>);
  const newChoice = [
    {
      label: 'Sabina Nowak',
      value: 'Sabina Nowak'
    }
  ];
  const newChoice2 = [
    {
      label: 'Konrad Okowski',
      value: 'Konrad Okowski'
    }
  ];
  const newChoice3 = [
    {
      label: 'Sabina Nowak',
      value: 'Sabina Nowak'
    },
    {
      label: 'Peter Nowicki',
      value: 'Peter Nowicki'
    }
  ];
  
  expect(wrapper.state('filteredTrainers').length).toBe(2);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[0]);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[1]);
  expect(wrapper.state('currentChoices').length).toBe(0);
  
  wrapper.instance()._handleTrainerChange(newChoice);
  expect(wrapper.state('currentChoices').length).toBe(1);
  expect(wrapper.state('currentChoices')).toContain(newChoice[0]);
  expect(wrapper.state('filteredTrainers').length).toBe(1);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[0]);
  
  wrapper2.instance()._handleTrainerChange(newChoice2);
  expect(wrapper2.state('currentChoices').length).toBe(1);
  expect(wrapper2.state('currentChoices')).toContain(newChoice2[0]);
  expect(wrapper2.state('filteredTrainers').length).toBe(1);
  expect(wrapper2.state('filteredTrainers')).toContain(trainers[2]);
  
  wrapper.instance()._handleTrainerChange(newChoice3);
  expect(wrapper.state('currentChoices').length).toBe(2);
  expect(wrapper.state('currentChoices')).toBe(newChoice3);
  expect(wrapper.state('filteredTrainers').length).toBe(2);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[0]);
  expect(wrapper.state('filteredTrainers')).toContain(trainers[1]);
  
});

test('filterArray() works properly', () => {
  
  const wrapper = mount(<Trainers gyms={gyms} trainers={trainers} userLocation='Opole' />);
  const choices = [
    {
      label: 'Sabina Nowak',
      value: 'Sabina Nowak'
    },
    {
      label: 'Peter Nowicki',
      value: 'Peter Nowicki'
    }
  ];
  
  expect(wrapper.instance()._filterArray('Sabina Nowak', choices)).toBeTruthy();
  expect(wrapper.instance()._filterArray('Peter Nowicki', choices)).toBeTruthy();
  expect(wrapper.instance()._filterArray('xxxxx', [])).toBeTruthy();
  expect(wrapper.instance()._filterArray('Sabina Nowak2', choices)).toBeFalsy();
  expect(wrapper.instance()._filterArray('Peter Nowicki2', choices)).toBeFalsy();
  
});

