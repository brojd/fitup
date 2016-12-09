import React from 'react';
import FilterForm from '../FilterForm.component';
import renderer from 'react-test-renderer';

jest.mock('react-select');

test('FilterForm renders correctly excluding 3rd party react-select', () => {
  
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
      'gymId': 1
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
      'gymId': 2
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
      'gymId': 2
    }
  ];
  const component = renderer.create(
    <FilterForm gyms={gyms} trainers={trainers} classes={classes} onUserInput={jest.fn()} userLocation='Wrocław' />
  );
  let tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
  
});
