import { Coffee } from './coffee';

export const COFFEES: Coffee[] = [
  { name: 'Cappuccino',
    type: 'Hot',
    displayText: 'Espresso and milk, topped with milk foam',
    imgURL: '../assets/coffee-coffee-cappuccino.png'
  },
  { name: 'Americano',
    type: 'Hot',
    displayText: 'A mix of Espresso and agua (water!)',
    imgURL: '../assets/coffee-coffee-americano.png'
  },
  { name: 'Espresso',
    type: 'Hot',
    displayText: 'The origin of many a coffee drink',
    imgURL: '../assets/coffee-espresso.png'
  },
  { name: 'Cafe Macchiato',
    type: 'Hot',
    displayText: 'Espresso topped with lots of milk foam',
    imgURL: '../assets/coffee-coffee-macchiato.png'
  },
  { name: 'Mocha',
    type: 'Hot',
    displayText: 'Espresso + chocolate syrup and lots of milk',
    imgURL: '../assets/coffee-coffee-mocha.png'
  },
  { name: 'Latte',
    type: 'Hot',
    displayText: 'Espresso and lots of milk',
    imgURL: '../assets/coffee-coffee-latte.png'
  },
];
