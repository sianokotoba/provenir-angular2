export const checkLocalStorage = (coffeeList) => {
  if (localStorage.length > 0) {
    for (let key in localStorage) {
      for (let i = 0; i < coffeeList.length; i++) {
        if (key === coffeeList[i].name) {
          break;
        }
        if (key !== coffeeList[i].name && i === coffeeList.length - 1) {
          coffeeList.push(JSON.parse(localStorage.getItem(key)));
        }
      }
    }
  }
}

export const addToLocalStorage = (coffeeList) => {
  for (let i = 0; i < coffeeList.length; i++) {
    if (!localStorage[coffeeList[i].name]) {
      localStorage.setItem(coffeeList[i].name, JSON.stringify(coffeeList[i]));
    }
  }
}

export const buildCoffeeListOnReload = (coffeeList) => {
  let newList = [];
  for (let key in localStorage) {
    newList.push(JSON.parse(localStorage.getItem(key)));
  }
  coffeeList = newList;
}

export const updateCoffeeList = (coffeeList, id, editedCoffee) => {
  for (let i = 0; i < coffeeList.length; i++) {
    if (coffeeList[i].id === id) {
      updateLocalStorage(coffeeList[i].id, editedCoffee);
      coffeeList[i] = editedCoffee;
    }
  }
}

export const updateLocalStorage = (coffeeId, editedCoffee) => {
  if (localStorage.length > 0) {
    if (localStorage.getItem(coffeeId)) {
      localStorage.setItem(coffeeId, editedCoffee);
    }
  }
}

export const addToCoffeeList = (coffeeList, newCoffee) => {
  coffeeList.push(newCoffee);
}

export const deleteFromList = (coffeeList, id) => {
  for (let i = 0; i < coffeeList.length; i++) {
    if (coffeeList[i].id === id) {
      deleteFromLocalStorage(coffeeList[i].id);
      coffeeList.splice(i, 1);
    }
  }
}

export const deleteFromLocalStorage = (coffeeId) => {
  if (localStorage.length > 0) {
    if (localStorage.getItem(coffeeId)) {
      localStorage.removeItem(coffeeId);
    }
  }
}
