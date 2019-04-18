import { Component, Input, NgZone, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators }   from '@angular/forms';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent {
  @Input() coffees;

  constructor(
    private coffeeService: CoffeeService,
    private _fb: FormBuilder,
    public zone: NgZone
  ) { }

  types = [
    'Hot', 
    'Iced',
    'Decaf',
    'Party Time'
  ];

  getCoffees(): void {
    // this.coffeeService.getCoffees()
    //   .then(coffees => {
    //     this.coffees = coffees;
    //   })
  }

  deleteCoffee(coffeeId: number): void {
    // this.coffeeService.delete(coffeeId)
    //   .then((res) => {
    //     this.zone.run(() => this.coffees && deleteFromList(this.coffees, coffeeId))
    //   })
  }

  updateCoffee(form, coffeeId, idx) {
    let editedCoffee = {
      id: coffeeId,
      name: form.value.name,
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: this.coffees[idx].imgURL
    }

    // this.coffeeService.update(editedCoffee)
    //   .then(coffee => {
    //     this.zone.run(() => updateCoffeeList(this.coffees, coffeeId, coffee))
    //   })
  }
}
