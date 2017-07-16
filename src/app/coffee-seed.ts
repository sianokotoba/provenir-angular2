import { Coffee } from './coffee';

export const COFFEES: Coffee[] = [
  { id: 1,
    name: 'Cappuccino',
    type: 'Hot',
    displayText: 'Espresso and milk, topped with milk foam',
    imgURL: '../assets/coffee-cappuccino.png'
  },
  { id: 2,
    name: 'Americano',
    type: 'Hot',
    displayText: 'A mix of Espresso and agua (water!)',
    imgURL: '../assets/coffee-americano.png'
  },
  { id: 3,
    name: 'Espresso',
    type: 'Hot',
    displayText: 'The origin of many a coffee drink',
    imgURL: '../assets/coffee-espresso.png'
  },
  { id: 4,
    name: 'Cafe Macchiato',
    type: 'Hot',
    displayText: 'Espresso topped with lots of milk foam',
    imgURL: '../assets/coffee-macchiato.png'
  },
  { id: 5,
    name: 'Mocha',
    type: 'Hot',
    displayText: 'Espresso + chocolate syrup and lots of milk',
    imgURL: '../assets/coffee-mocha.png'
  },
  { id: 6,
    name: 'Latte',
    type: 'Hot',
    displayText: 'Espresso and lots of milk',
    imgURL: '../assets/coffee-latte.png'
  },
];
