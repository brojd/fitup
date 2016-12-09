const GYMS = [
  {
    'name': 'Fitness Academy',
    'address': {
      'city': 'Wroclaw',
      'postal_code': '50-001',
      'street': 'Długa',
      'number': 3
    },
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'logo_url': 'https://pbs.twimg.com/profile_images/378800000513930765/1518318ade4947d639fca13c47b457f6.jpeg',
    'photo_urls': [
      'https://www.thegymgroup.com/fileadmin/uploads/gym/Photos/Gym_Leicester/Leicester14.jpg'
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
        'accepted': true
      },
      {
        'name': 'ActiveSport',
        'accepted': true
      },
      {
        'name': 'OKsystem',
        'accepted': true
      },
      {
        'name': 'FitWro',
        'accepted': false
      },
      {
        'name': 'FitProfit',
        'accepted': false
      }
    ],
    'id': 1
  },
  {
    'name': 'Fitness World',
    'address': {
      'city': 'Wroclaw',
      'postal_code': '50-001',
      'street': 'Olszowa',
      'number': 3
    },
    'description': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'logo_url': 'http://www.feriogaj.com/wp-content/uploads/fitnes-world.png',
    'photo_urls': [
      'http://www.fru-fitness.pl/content/57/0/1370494719_6ca505f63f8064d96281ac502dd903f2.jpg',
      'http://www.top-gym.pl/files/dzialy/wydarzenia/lipiec%202015/Art%20Fitness2.png',
      'http://www.fru-fitness.pl/content/57/0/1370494719_6ca505f63f8064d96281ac502dd903f2.jpg'
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
    'id': 2
  },
  {
    'name': 'Spartan',
    'address': {
      'city': 'Opole',
      'postal_code': '50-001',
      'street': 'Kwiska',
      'number': 3
    },
    'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    'logo_url': 'http://www.spartan.wroc.pl/files/spartan_logo.gif',
    'photo_urls': [
      'http://czasatrakcji.pl/uploads/pictures/da1b79c9564e4bdac4cf583c3275404753dd2680.jpg',
      'http://www.spartan.wroc.pl/pliki/zdjecia/P5300224.jpg',
      'http://bi.gazeta.pl/im/2a/34/e1/z14758954Q,Fitnessklub-Spartan-przy-ul--Lubinskiej.jpg'
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
        'accepted': true
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
        'accepted': true
      }
    ],
    'id': 3
  },
  {
    'name': 'Jatomi',
    'address': {
      'city': 'Katowice',
      'postal_code': '50-001',
      'street': 'Długa',
      'number': 3
    },
    'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    'logo_url': 'http://atrium-mosty.pl/wp-content/uploads/2015/04/nowe_logo_jatomi.jpg',
    'photo_urls': [
      'http://niechwiedza.pl/upload/avatar_user/141591967370c4296b75401dfec1e57f394d353bb9klub-fitness-wroc%C5%82aw-pasa%C5%BC-grunwaldzki357_0.jpg',
      'http://img2.sprzedajemy.pl/540x405_czlonkostwo-karnet-pure-jatomi-p-25020882.jpg',
      'http://niechwiedza.pl/upload/avatar_user/14159161631c5b7cb45be6dbb3307ce92fb5b19a59gallery_1371444980_0.jpg'
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
        'accepted': true
      },
      {
        'name': 'ActiveSport',
        'accepted': true
      },
      {
        'name': 'OKsystem',
        'accepted': true
      },
      {
        'name': 'FitWro',
        'accepted': false
      },
      {
        'name': 'FitProfit',
        'accepted': true
      }
    ],
    'id': 4
  }
];

export default GYMS;
