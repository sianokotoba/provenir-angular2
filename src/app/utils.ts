export const checkLocalStorage = (coffeeList) => {
  console.log('on init yo, checked')
  if (localStorage.length > 0) {
    for (let key in localStorage) {
      coffeeList.push(JSON.parse(localStorage.getItem(key)));
    }
  }
}

export const updateCoffeeList = (coffeeList, idx, editedCoffee) => {
  console.log('updating now')
  coffeeList[idx] = editedCoffee;
  updateLocalStorage(coffeeList[idx].name, editedCoffee);
}

export const updateLocalStorage = (coffeeName, editedCoffee) => {
  if (localStorage.length > 0) {
    if (localStorage.getItem(coffeeName)) {
      localStorage.setItem(coffeeName, editedCoffee);
    }
  }
}

export const addToCoffeeList = (coffeeList, newCoffee) => {
  console.log('adding now')
  coffeeList.push(newCoffee);
}

export const deleteFromList = (coffeeList, idx) => {
  deleteFromLocalStorage(coffeeList[idx].name);
  coffeeList.splice(idx, 1);
}

export const deleteFromLocalStorage = (coffeeName) => {
  if (localStorage.length > 0) {
    if (localStorage.getItem(coffeeName)) {
      localStorage.removeItem(coffeeName);
    }
  }
}
