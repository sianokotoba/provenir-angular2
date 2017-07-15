import { Injectable } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './coffee-seed';

@Injectable()
export class CoffeeService {
  getCoffees(): Promise<Coffee[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCoffees()), 2000);
    });
  }
}
