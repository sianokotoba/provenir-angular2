import { Component } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';
import { deleteFromList } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent {
  coffees = COFFEES;
  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  // build service to handle delete and idx updating correctly?
  deleteCoffee(idx) {
    console.log('triggers', idx)
    deleteFromList(this.coffees, idx);

    console.log('~~~', this.coffees)
  }
}
