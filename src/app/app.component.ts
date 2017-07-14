import { Component, OnInit } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';
import { checkLocalStorage } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {




  title = 'A La Cafe';
  coffees = COFFEES;
  selectedCoffee: Coffee;

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }

  constructor() {}

  ngOnInit() {
    // Check local storage on init for correct cofee list
    checkLocalStorage(this.coffees);
  }
}
