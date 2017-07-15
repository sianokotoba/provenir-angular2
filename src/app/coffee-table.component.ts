import { Component, Input } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList, checkLocalStorage } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent {
  @Input() coffees;

  // coffees = COFFEES;
  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  // build service to handle delete and idx updating correctly?
  deleteCoffee(idx) {
    console.log('triggers', idx)
    deleteFromList(this.coffees, idx);
    this.coffees = this.coffees;
    console.log('~~~', this.coffees)

  }

  updateCoffee(form, idx) {
    console.log('FORM', form, idx)
    let editedCoffee = {
      name: form.value.name,
      type: form.value.type,
      displayText: form.value.displayText,
      imgURL: '../assets/coffee-default.png'
    }
    updateCoffeeList(this.coffees, idx, editedCoffee)
  }

//   delete(hero: Hero): void {
//   this.heroService
//       .delete(hero.id)
//       .then(() => {
//         this.heroes = this.heroes.filter(h => h !== hero);
//         if (this.selectedHero === hero) { this.selectedHero = null; }
//       });
// }
}
