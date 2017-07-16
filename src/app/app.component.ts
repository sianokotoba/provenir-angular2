import { Component, OnInit, OnChanges } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
// import { COFFEES } from './coffee-seed';
import { addToLocalStorage, checkLocalStorage } from './utils';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  constructor(private coffeeService: CoffeeService) {

  }

  coffees = [
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

  ngOnInit() {
    // Check local storage on init for correct cofee list
    // this.getCoffees();
  }

  ngOnChanges() {
    // this.getCoffees();
  }

  get() {
    addToLocalStorage(this.coffees);
    checkLocalStorage(this.coffees);
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
        addToLocalStorage(this.coffees);
        checkLocalStorage(this.coffees);
      })
  }
}
