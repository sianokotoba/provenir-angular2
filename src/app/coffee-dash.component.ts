import { Component, OnInit } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';
import { updateCoffeeList } from './utils';

@Component({
  selector: 'coffee-dash',
  templateUrl: './coffee-dash.component.html',
  styleUrls: ['./coffee-dash.component.css']
})

export class CoffeeDashComponent implements OnInit {

  coffees = COFFEES;

  constructor () {}

  ngOnInit() {
    updateCoffeeList(this.coffees);
  }
}
