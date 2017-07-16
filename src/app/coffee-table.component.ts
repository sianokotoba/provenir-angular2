import { Component, Input, NgZone, OnInit, DoCheck, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators }   from '@angular/forms';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList, addToLocalStorage, checkLocalStorage, buildCoffeeListOnReload } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent implements OnInit, OnChanges, DoCheck {
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

  ngOnInit() {
  // Check local storage on init for correct cofee list
    console.log("THHREWJLRKFAWE", this.coffees)
    // this.getCoffees();

    this.coffeeTForm = new FormGroup({
      subFormList: new FormArray([])
    })
    this.getValues();

    console.log('!!!!!!', this.coffeeTForm)
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
        addToLocalStorage(this.coffees);
        checkLocalStorage(this.coffees);
      })
  }

  ngOnChanges() {
  }

  ngDoCheck() {

  }

  getValues() {
    const control = <FormArray> this.coffeeTForm.get('subFormList');
    // if (this.coffees.length === 0) {
    //   control.push(this._fb.group({
    //     name: '',
    //     type: '',
    //     displayText: ''
    //   }))
    // }
    for (let i = 0; i < this.coffees.length; i++) {
      const temp = this._fb.group({
        name: '' || this.coffees[i].name,
        type: '' || this.coffees[i].type,
        displayText: '' || this.coffees[i].displayText
      });
      control.push(temp);
    }
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
