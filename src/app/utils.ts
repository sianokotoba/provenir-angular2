export const updateCoffeeList = (coffeeList) => {
  console.log('updating now')
  if (localStorage.length > 0) {
    for (let i = 0; i < coffeeList.length; i++) {
      if (localStorage[coffeeList[i].name]) {
        coffeeList[i] = JSON.parse(localStorage.getItem(coffeeList[i].name));
      }
    }
  }
}

export const addToCoffeeList = (coffeeList) => {
  console.log('adding now')
  if (localStorage.length > 0) {
    for (let key in localStorage) {
      for (let i = 0; i < coffeeList.length; i++) {
        if (i === coffeeList.length - 1 && !localStorage[coffeeList[i].name]) {
          coffeeList.push(JSON.parse(localStorage.getItem(key)))
        }
        if (localStorage[coffeeList[i].name]) {
          break;
        }
      }
    }
  }
}
