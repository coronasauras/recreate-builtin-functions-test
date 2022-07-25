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
  let temp = [];
  while (array.length) {
    temp.push(array.pop());
  }
  return temp;
}

//Slice function
function slice(start, stop, array) {
  let temp = [];
  for (let i = start; i < stop; i++) {
    temp.push(array[i]);
  }

  return temp;
}

//Concat function
function concat(a, b) {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
}

//Join function
function join(sep, array) {
  let temp = "";
  let sep1 = 0;
  for (let i = 0; i < array.length; i++) {
    if (sep1 === 1) {
      temp += sep;
    }
    temp += array[i];
    sep1 = 1;
  }
  return temp;
}

//Max function
function max(array) {
  let temp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > temp) {
      temp = array[i];
    }
  }
  return temp;
}
