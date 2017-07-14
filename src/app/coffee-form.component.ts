import { Component } from '@angular/core';

import { Coffee } from './coffee';

@Component({
  selector: 'coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
  // styles: [ "../node_modules/@angular2-mdl-ext/select/select.scss" ]
})

export class CoffeeFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Coffee('test1', 'test2', 'test3');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
