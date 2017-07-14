import { Component } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';


@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent {
  coffees = COFFEES;

}
