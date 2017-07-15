import { Component, Input } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { addToCoffeeList } from './utils';

@Component({
  selector: 'coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
})

export class CoffeeFormComponent {
  @Input() coffees;

  constructor(private coffeeService: CoffeeService) { }

  coffee = {};
  submitted = false;
  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  onSubmit(form) {
    let newCoffee = {
      id: this.coffees[this.coffees.length  - 1].id + 1,
      name: form.value.name,
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: '../assets/coffee-default.png'
    }
    this.coffee = newCoffee;
    localStorage.setItem(form.value.name, JSON.stringify(newCoffee));
    this.add(newCoffee);
    this.submitted = true;
    form.reset();
  }

  newSubmission() {
    this.submitted = false;
  }

  add(newCoffee: any): void {
    this.coffeeService.create(newCoffee)
      .then(coffee => {
        addToCoffeeList(this.coffees, coffee);
      });
  }
}
