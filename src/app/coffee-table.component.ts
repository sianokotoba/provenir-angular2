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

    // this.coffeeT

    this.coffeeTForm.patchValue(this.coffees)

    // for (let i = 0; i < this.coffees.length; i++) {
      // (<FormControl>this.coffeeTForm.controls['name'])
      //   .patchValue(this.coffees[2]);
      // (<FormControl>this.coffeeTForm.controls['text'])
      //   .setValue(this.coffees[2].text);
      // (<FormControl>this.coffeeTForm.controls['displayText'])
      //   .setValue(this.coffees[2].displayText);
        // console.log('here', this.coffees[i])
    // let i = 0;
    // while (i < this.coffees.length) {
      // this.coffeeTForm = this._fb.group({
      //   name: [this.coffees[0].name],
      //   type: [this.coffees[0].type],
      //   displayText: [this.coffees[0].displayText]
      // })
      // ++i;
    // }
    // }
    // for (let i = 0; i < this.coffees.length)
    // })

    console.log('CTF', this._fb.group)
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
