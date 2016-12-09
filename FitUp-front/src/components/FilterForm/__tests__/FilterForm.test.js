import React from 'react';
import FilterForm from '../FilterForm.component';
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

const classes = [
  {
    'name': 'yoga',
    'description': 'string',
    'gymId': 1
  },
  {
    'name': 'zumba',
    'description': 'string',
    'gymId': 2
  },
  {
    'name': 'pilates',
    'description': 'string',
    'gymId': 3
  }
];

test('FilterForm has proper initial state properties', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('city')).toBe('Wrocław');
  expect(wrapper.state('gymsInCity').length).toBe(2);
  expect(wrapper.state('gymsInCity')).toContain(gyms[0]);
  expect(wrapper.state('gymsInCity')).toContain(gyms[1]);
  expect(wrapper.state('classesInCity').length).toBe(2);
  expect(wrapper.state('classesInCity')).toContain(classes[0]);
  expect(wrapper.state('classesInCity')).toContain(classes[1]);
  expect(wrapper.state('trainersInCity').length).toBe(2);
  expect(wrapper.state('trainersInCity')).toContain(trainers[0]);
  expect(wrapper.state('trainersInCity')).toContain(trainers[1]);
  expect(wrapper.state('textInputFocused')).toBeTruthy();
  expect(wrapper.state('advancedSearch')).toBeFalsy();
  
});

test('_toggleAdvancedSearch sets state properly', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('clickedAdvanced')).toBeFalsy();
  expect(wrapper.state('advancedSearch')).toBeFalsy();
  
  wrapper.instance()._toggleAdvancedSearch();
  expect(wrapper.state('clickedAdvanced')).toBeTruthy();
  expect(wrapper.state('advancedSearch')).toBeTruthy();
  
  wrapper.instance()._toggleAdvancedSearch();
  expect(wrapper.state('clickedAdvanced')).toBeTruthy();
  expect(wrapper.state('advancedSearch')).toBeFalsy();
  
});

test('_handleTrainerChange() sets trainer properly', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('trainer')).toBeFalsy();
  
  wrapper.instance()._handleTrainerChange('trainer1');
  expect(wrapper.state('trainer')).toBe('trainer1');
  
  wrapper.instance()._handleTrainerChange('trainer2');
  expect(wrapper.state('trainer')).toBe('trainer2');
  
});

test('_handleGymChange() sets gym properly', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('gym')).toBeFalsy();
  
  wrapper.instance()._handleGymChange('gym1');
  expect(wrapper.state('gym')).toBe('gym1');
  
  wrapper.instance()._handleGymChange('gym2');
  expect(wrapper.state('gym')).toBe('gym2');
  
});

test('_handleClassesChange() sets gym properly', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('classes').length).toBe(0);
  
  wrapper.instance()._handleClassesChange('classes1');
  expect(wrapper.state('classes')).toBe('classes1');
  
  wrapper.instance()._handleClassesChange('classes2');
  expect(wrapper.state('classes')).toBe('classes2');
  
});

test('_handleCityChange() sets city and filter other properties properly', () => {
  
  const wrapper = mount(<FilterForm gyms={gyms}
                                    userLocation='Wrocław'
                                    onUserInput={jest.fn()}
                                    classes={classes}
                                    trainers={trainers} />);
  
  expect(wrapper.state('city')).toBe('Wrocław');
  expect(wrapper.state('gymsInCity').length).toBe(2);
  expect(wrapper.state('gymsInCity')).toContain(gyms[0]);
  expect(wrapper.state('gymsInCity')).toContain(gyms[1]);
  expect(wrapper.state('classesInCity').length).toBe(2);
  expect(wrapper.state('classesInCity')).toContain(classes[0]);
  expect(wrapper.state('classesInCity')).toContain(classes[1]);
  expect(wrapper.state('trainersInCity').length).toBe(2);
  expect(wrapper.state('trainersInCity')).toContain(trainers[0]);
  expect(wrapper.state('trainersInCity')).toContain(trainers[1]);
  expect(wrapper.state('textInputFocused')).toBeTruthy();
  expect(wrapper.state('advancedSearch')).toBeFalsy();
  
  wrapper.instance()._handleCityChange('Opole');
  expect(wrapper.state('city')).toBe('Opole');
  expect(wrapper.state('gymsInCity').length).toBe(1);
  expect(wrapper.state('gymsInCity')).toContain(gyms[2]);
  expect(wrapper.state('classesInCity').length).toBe(1);
  expect(wrapper.state('classesInCity')).toContain(classes[2]);
  expect(wrapper.state('trainersInCity').length).toBe(1);
  expect(wrapper.state('trainersInCity')).toContain(trainers[2]);
  
  wrapper.instance()._handleCityChange('Gdańsk');
  expect(wrapper.state('city')).toBe('Gdańsk');
  expect(wrapper.state('gymsInCity').length).toBe(0);
  expect(wrapper.state('classesInCity').length).toBe(0);
  expect(wrapper.state('trainersInCity').length).toBe(0);
  
});
