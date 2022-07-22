// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

//Include function
function includes(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}

//Index of item function
function indexOf(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

//Reverse function
function reverse(array) {
  let arrayReverse = [];
  while (array.length) {
    arrayReverse.push(array.pop());
  }
  return arrayReverse;
}
