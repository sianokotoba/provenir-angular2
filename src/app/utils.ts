export const checkLocalStorage = function (coffeeList) {
  console.log('hiiiiiiiit')
  if (localStorage.length > 0) {
    for (let key in localStorage) {
      coffeeList.push(JSON.parse(localStorage.getItem(key)));
    }
  }
}
