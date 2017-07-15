import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';
import { checkLocalStorage } from './utils';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private coffeeService: CoffeeService) { }

  coffees = COFFEES;

  ngOnInit() {
    // Check local storage on init for correct cofee list
    this.getCoffees();
    checkLocalStorage(this.coffees);
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
      })
  }
}
