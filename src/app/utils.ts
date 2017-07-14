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
}

export const addToCoffeeList = (coffeeList, newCoffee) => {
  console.log('adding now')
  coffeeList.push(newCoffee);
}
