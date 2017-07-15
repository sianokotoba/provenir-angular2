import { Component, Input } from '@angular/core';
import { CoffeeService } from './coffee.service';

import { Coffee } from './coffee';
import { deleteFromList, updateCoffeeList, checkLocalStorage, buildCoffeeListOnReload } from './utils';

@Component({
  selector: 'coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})

export class CoffeeTableComponent {
  @Input() coffees;

  constructor(private coffeeService: CoffeeService) { }

  types = [
    'Hot',
    'Iced',
    'Decaf',
    'Party Time'
  ];

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .then(coffees => {
        this.coffees = coffees;
      })
  }

  deleteCoffee(coffeeId: number): void {
    this.coffeeService.delete(coffeeId)
      .then(() => {
        deleteFromList(this.coffees, coffeeId);
        window.location.reload();
        buildCoffeeListOnReload(this.coffees);
      })
      .then(() => {
        // this.getCoffees();
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
        updateCoffeeList(this.coffees, coffeeId, coffee);
      })
      .then(() => {
        console.log("HIT?")
        this.getCoffees();
      })
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
