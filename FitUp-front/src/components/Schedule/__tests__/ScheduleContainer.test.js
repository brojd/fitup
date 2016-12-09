import React from 'react';
import ScheduleContainer from '../ScheduleContainer.component';
import { shallow } from 'enzyme';

jest.mock('react-select');
jest.mock('dhtmlx-scheduler');

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
    '_id': 1,
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
    '_id': 2,
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
    '_id': 3,
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
    '_id': 1,
    'name': 'yoga',
    'description': 'string',
    'gymId': 1
  },
  {
    '_id': 2,
    'name': 'zumba',
    'description': 'string',
    'gymId': 2
  },
  {
    '_id': 3,
    'name': 'pilates',
    'description': 'string',
    'gymId': 3
  }
];
const events = [
  {
    '_id': {
      '$oid': '5834080b33764e1ff864f305'
    },
    'start_date': '2016-11-22T05:00:00.000Z',
    'end_date': '2016-11-22T05:05:00.000Z',
    'text': '',
    'id': 1479804936885,
    '_timed': true,
    '_sday': 1,
    '_inner': false,
    '_sorder': 0,
    '_count': 1,
    'typeOfClassesId': '582c86e0e846940ac4d5c8ab',
    'trainerId': '582c8778e846940ac4d5c8ae',
    'classesName': 'tbc',
    'trainerName': 'Jan Jankowski',
    'duration_in_minutes': 5,
    'color': '#38343D',
    'gymId': '1'
  }
];

test('_isEventInCity works properly', () => {
  
  const wrapper = shallow(<ScheduleContainer  gyms={gyms}
                                              userLocation='Wrocław'
                                              events={events}
                                              classes={classes}
                                              trainers={trainers} />);
  
  expect(wrapper.instance()._isEventInCity(events[0], 'Opole')).toBeFalsy();
  expect(wrapper.instance()._isEventInCity(events[0], 'Wrocław')).toBeTruthy();
});

test('_findElem works properly', () => {
  
  const wrapper = shallow(<ScheduleContainer  gyms={gyms}
                                              userLocation='Wrocław'
                                              events={events}
                                              classes={classes}
                                              trainers={trainers} />);
  
  expect(wrapper.instance()._findElem(1, gyms, false)).toBe(gyms[0]);
  expect(wrapper.instance()._findElem(2, gyms, false)).toBe(gyms[1]);
  expect(wrapper.instance()._findElem(1, trainers, false)).toBe(trainers[0]);
  expect(wrapper.instance()._findElem(2, trainers, false)).toBe(trainers[1]);
  expect(wrapper.instance()._findElem(1, classes, false)).toBe(classes[0]);
  expect(wrapper.instance()._findElem(2, classes, false)).toBe(classes[1]);
  expect(wrapper.instance()._findElem(1479804936885, events, true)).toBe(events[0]);
  
});
