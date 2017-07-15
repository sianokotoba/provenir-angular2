import { Component, Input, NgZone, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators }   from '@angular/forms';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList, checkLocalStorage, buildCoffeeListOnReload } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent implements AfterViewChecked {
  @Input() coffees;
  public coffeeTForm: FormGroup;

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

  ngAfterViewChecked() {
    console.log('this COFFEEEEE', this.coffees)

    this.coffeeTForm = this._fb.group({
      subFormList: this._fb.array([])
    });
    this.getValues();
  }

  getValues() {
    const control = <FormArray> this.coffeeTForm.get('subFormList');
    for (let i = 0; i < this.coffees.length; i++) {
      const temp = this._fb.group({
        name: [this.coffees[i].name],
        type: [this.coffees[i].type],
        displayText: [this.coffees[i].displayText]
      })
      console.log('temp')
      control.push(temp);
    }
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
      })
  }

  deleteCoffee(coffeeId: number): void {
    this.coffeeService.delete(coffeeId)
      .then((res) => {
        this.zone.run(() => this.coffees && deleteFromList(this.coffees, coffeeId))
      })
  }

  updateCoffee(form, coffeeId) {
    let editedCoffee = {
      id: coffeeId,
      name: form.value.name,
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: this.coffees[coffeeId].imgURL
    }

    this.coffeeService.update(editedCoffee)
      .then(coffee => {
        console.log("COFFEEEEE", coffee)
        this.zone.run(() => updateCoffeeList(this.coffees, coffeeId, coffee))
      })
  }
}
