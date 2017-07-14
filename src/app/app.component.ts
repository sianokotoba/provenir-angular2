import { Component } from '@angular/core';
import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A La Cafe';
  coffees = COFFEES;
  selectedCoffee: Coffee;

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }
}
