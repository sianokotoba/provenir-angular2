import { Component } from '@angular/core';
import { Coffee } from './coffee';

const COFFEES: Coffee[] = [
  { name: 'Dirty Chai Latte',
    type: 'Venti',
    displayText: 'Spiced black tea with steamed milk and a dash of espresso'
  },
  { name: 'Breve',
    type: 'Short',
    displayText: 'Espresso and steamed half and half'
  },
  { name: 'Lazy Eye',
    type: 'Grande',
    displayText: 'Espresso and dripped coffee decaffeinatted'
  },
  { name: 'Mocha',
    type: 'Tall',
    displayText: 'Hot chocolate and espresso, topped with whipped cream'
  },
  { name: 'Irish Coffee',
    type: 'Tall',
    displayText: 'French press coffee with sugar, a dash of Irish whiskey and heavy cream'
  },
  { name: 'Cafe au lait',
    type: 'Venti',
    displayText: 'Scalded milk and French press coffee'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A La Cafe';
  coffees = COFFEES;
  selectedCoffee: Coffee;

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }
}
