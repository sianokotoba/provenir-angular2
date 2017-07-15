import { Component, Input } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';

@Component({
  selector: 'coffee-dash',
  templateUrl: './coffee-dash.component.html',
  styleUrls: ['./coffee-dash.component.css']
})

export class CoffeeDashComponent {
  @Input() coffees;
}
