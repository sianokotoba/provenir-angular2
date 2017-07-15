export const checkLocalStorage = (coffeeList) => {
  console.log('on init yo, checked')
  if (localStorage.length > 0) {
    for (let key in localStorage) {
      coffeeList.push(JSON.parse(localStorage.getItem(key)));
    }
  }
}

export const updateCoffeeList = (coffeeList, id, editedCoffee) => {
  console.log('updating now')
  for (let i = 0; i < coffeeList.length; i++) {
    if (coffeeList[i].id === id) {
      updateLocalStorage(coffeeList[i].name, editedCoffee);
      coffeeList[i] = editedCoffee;
    }
  }
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

export const deleteFromList = (coffeeList, id) => {
  for (let i = 0; i < coffeeList.length; i++) {
    if (coffeeList[i].id === id) {
      deleteFromLocalStorage(coffeeList[i].name);
      coffeeList.splice(i, 1);
    }
  }
}

export const deleteFromLocalStorage = (coffeeName) => {
  if (localStorage.length > 0) {
    if (localStorage.getItem(coffeeName)) {
      localStorage.removeItem(coffeeName);
    }
  }
}
