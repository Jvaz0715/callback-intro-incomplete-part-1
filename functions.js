const identity = function (value) {
  return value;
};

//first function will return the first index if n is undefined or up until n index if defined
const first = function (array, n) {
  // declare a new array to be returned
  let results = [];
  // if n is undefined, simply return the first element of the array
  if (n === undefined) {
    return array[0];
  }
  // if n parameter is longer than array length, return all elements in array
  else if (n > array.length) {
    for (let i = 0; i < array.length; i++) {
      results.push(array[i]);
    }
  } 
  // if n is defined loop through until the n index
  else {
    for (let i = 0; i < n; i++) {
      results.push(array[i]);
    }
  };
  
  return results;
};

const last = function (array, n) {
  // declare a new array to be returned
  let results = [];
  // if n is undefined, simply return the LAST element of the array
  if (n === undefined) {
    return array[array.length -1];
  }
  // if n is 0 return an empty array;
  else if (n === 0) {
    return [];
  }

  // if n is greater than array length, return all elements
  else if (n > array.length) {
    for (let i = 0; i < array.length; i++) {
      results.push(array[i]);
    }
  }

  else {
    // i needs to initialize at n - 1 index
    for (let i = n - 1; i < array.length; i++) {
      results.push(array[i]);
    }
  }
  return results;
};

const each = function (collection, callback) {};



const indexOf = function (array, target) {
  let indexLocated = [];
  // if target exists, we will loop and check each array[i] to see if it matches the target
  for (let i = 0; i < array.length; i++) {
    //if we find an index that matches the target:
    //we will push that index or 'i', to the indexLocated array;
    if (array[i] === target) {
      indexLocated.push(i);
    }
  }

  // create if statement that will account for no target found
  if (indexLocated.length === 0) {
    return -1;
  } else {
    return indexLocated[0];
  }
};



const map = function (collection, iterator) {
  //declare a new collection as to not modify the existing collection
  let newCollection = [];
  // loop through the collection and apply the iterator function to each value
  for (let i = 0; i < collection.length; i++) {
    let newValue = iterator(collection[i]);
    // once you have the newValue, push it into the newCollection array;
    newCollection.push(newValue);
  }
  return newCollection;
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};