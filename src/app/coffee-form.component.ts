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

  coffee = new Coffee('test1', 'test2', 'test3', 'test4');

  submitted = false;

  onSubmit(form) {
    this.submitted = true;
    console.log('~~~~~~~~', form.value)
    console.log('hfjkhfkdjhajkf', localStorage)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.coffee); }

  createNewCoffee(form) {
    console.log('~~~~~~~~', form.value)
    console.log('hfjkhfkdjhajkf', localStorage)
  }

}
