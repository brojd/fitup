import React from 'react';
import EventBox from '../EventBox.component';
import renderer from 'react-test-renderer';

test('EventBox renders correctly', () => {
  
  const EVENT_TOP = 580;
  const EVENT_LEFT = -200;
  const EVENT_VISIBLE = true;
  const CURRENT_EVENT = {
    '_id': 1479128395909,
    'start_date': '2016-11-14T14:50:00.000Z',
    'end_date': '2016-11-14T15:40:00.000Z',
    'duration_in_minutes': 50,
    'classesName': 'yoga',
    'trainerName': 'Andrew Kowalski',
    'gymId': {
      '$oid': '581c7f51d686e4e41104eeb1'
    },
    'typeOfClassesId': {
      '$oid': '581cac9645633510184e0b80'
    },
    'trainerId': {
      '$oid': '581cacc145633510184e0b84'
    },
    'text': '',
    '_timed': true,
    '_sday': 0,
    '_inner': false,
    '_sorder': 0,
    '_count': 1,
    'color': '#661141'
  };
  const CURRENT_TRAINER = {
    '_id': {
      '$oid': '581cacc145633510184e0b84'
    },
    'name': 'Andrew',
    'surname': 'Kowalski',
    'about_me': 'Lorem ipsum',
    'specialties': {
      'yoga': true,
      'zumba': false
    },
    'photo_url': 'http://trenujzmichalem.pl/wp-content/uploads/2014/01/ostr-slider-535x572.png',
    'gymId': '581c7f51d686e4e41104eeb1',
    'id': {
      '$oid': '581cacc145633510184e0b84'
    }
  };
  const CURRENT_CLASSES = {
    '_id': {
      '$oid': '581cada645633510184e0b88'
    },
    'name': 'pilates',
    'description': 'pilates description',
    'photo_url': 'http://fitnessforladies.pl/wp-content/uploads/2013/12/pilates-640x504.jpg'
  };
  const CURRENT_GYM = {
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
      'http://www.fru-fitness.pl/content/57/0/1370494719_6ca505f63f8064d96281ac502dd903f2.jpg',
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
    'email': 'gym2@gym2.pl',
    'id': {
      '$oid': '581ca32345633510184e0b5d'
    }
  };
  
  const component = renderer.create(
    <EventBox eventTop={EVENT_TOP}
              eventLeft={EVENT_LEFT}
              eventVisible={EVENT_VISIBLE}
              currentGym={CURRENT_GYM}
              currentTrainer={CURRENT_TRAINER}
              currentClasses={CURRENT_CLASSES}
              currentEvent={CURRENT_EVENT} />
  );
  
  let tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
  
});
