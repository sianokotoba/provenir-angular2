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

  approved = false;
  denied = false;

  coffee = {};
  submitted = false;
  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  constructor(private coffeeService: CoffeeService) { }

  onSubmit(form) {
    const newCoffee = {
      formId: "9056322",
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      ssn: form.value.ssn.toString(),
      age: form.value.age.toString(),
      loanAmount: form.value.loanAmount.toString(),
      email: form.value.email
    };
    this.coffee = newCoffee;

    this.submitted = true;
    this.coffeeService.postToEndpoint(this.coffee).subscribe(result => {
      console.log('RES', result);
      this.approvedOrDenied(result['approved']);
      form.reset();
    }, error => {
      console.log("error", error)
      // alert(`There was an issue submitting your application!`);
    });
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

  approvedOrDenied(approvedValue: string|boolean): void {
    if (approvedValue || approvedValue === 'true') {
      this.approved = true;
      this.denied = false;
    } else {
      this.approved = false;
      this.denied = true;
    }
  }
}
