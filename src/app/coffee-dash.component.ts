import { Component } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';

@Component({
  selector: 'coffee-dash',
  templateUrl: './coffee-dash.component.html',
  styleUrls: ['./coffee-dash.component.css']
})

export class CoffeeDashComponent {
  coffees = COFFEES;
}
