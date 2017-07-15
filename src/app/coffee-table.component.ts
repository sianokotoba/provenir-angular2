import { Component, Input, NgZone } from '@angular/core';
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

  constructor(
    private coffeeService: CoffeeService,
    public zone: NgZone
  ) { }

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

  deleteCoffee(coffeeId: number, panelGroup: any, idx: number): void {
    console.log("what is panel group?", panelGroup.getPanel(idx))
    console.log("tester")
    // panelGroup.getPanel(idx).collapse()
    // panelGroup.getPanel(idx).header.onChange.isStopped = true
    // panelGroup.getPanel(idx).removeListener('onChange', panelGroup.getPanel(idx).header.onChange, false);
    console.log("delete called, initializing", this.coffees)
    this.coffeeService.delete(coffeeId)
      .then((res) => {
        console.log("HERHERE", this.coffees)
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

//   delete(hero: Hero): void {
//   this.heroService
//       .delete(hero.id)
//       .then(() => {
//         this.heroes = this.heroes.filter(h => h !== hero);
//         if (this.selectedHero === hero) { this.selectedHero = null; }
//       });
// }
}
