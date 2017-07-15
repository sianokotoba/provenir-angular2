import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { checkLocalStorage } from './utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private coffeeService: CoffeeService) { }

  coffees = [];

  ngOnInit() {
    // Check local storage on init for correct cofee list
    this.getCoffees();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
        checkLocalStorage(this.coffees);
      })
  }
}
