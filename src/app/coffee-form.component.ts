import { Component } from '@angular/core';

import { Coffee } from './coffee';

@Component({
  selector: 'coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
  // styles: [ "../node_modules/@angular2-mdl-ext/select/select.scss" ]
})

export class CoffeeFormComponent {

  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  coffee = {};

  submitted = false;

  onSubmit(form) {
    this.coffee = new Coffee(form.value.name, form.value.type, form.value.displayText, '../assets/coffee-default.png');
    localStorage.setItem(form.value.name, JSON.stringify({
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: '../assets/coffee-default.png'
    }))
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.coffee); }

  createNewCoffee(form) {
    console.log('~~~~~~~~', form.value)
    console.log('hfjkhfkdjhajkf', localStorage)
  }

}
