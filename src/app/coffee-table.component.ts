import { Component, Input, NgZone, DoCheck } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators }   from '@angular/forms';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList, checkLocalStorage, buildCoffeeListOnReload } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent implements DoCheck {
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



  ngDoCheck() {


    // this.coffeeTForm = new FormGroup({
    //   name: new FormControl(),
    //   type: new FormControl(),
    //   displayText: new FormControl()
    // });
    // this.coffeeTForm = new FormGroup({
    //   subFormList: new FormArray([])
    // });
    // this.coffeeTForm = this._fb.group({
    //   subFormList: this._fb.array([])
    // })
    this.coffeeTForm = new FormGroup({
      subFormList: new FormArray([])
    })

    this.getValues();
    console.log('!!!!!!', this.coffeeTForm)
  }

  getValues() {
    const control = <FormArray> this.coffeeTForm.get('subFormList');
    console.log("NEFORE CONTROL", control)
    for (let i = 0; i < this.coffees.length; i++) {
      console.log('---------------', this.coffees)
      const temp = this._fb.control({
        name: this.coffees[i].name,
        type: this.coffees[i].type,
        displayText: this.coffees[i].displayText
      });
      control.push(temp);
    }
    console.log('~~~~CONTROL', control)
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

  updateCoffee(form, coffeeId, idx) {
    let editedCoffee = {
      id: coffeeId,
      name: form.value.name,
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: this.coffees[idx].imgURL
    }

    this.coffeeService.update(editedCoffee)
      .then(coffee => {
        this.zone.run(() => updateCoffeeList(this.coffees, coffeeId, coffee))
      })
  }
}
