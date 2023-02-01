/*
  3.2.2-MorePracticeWithObjects#index.js
  ========================================
*/

// bracket and dot notation
//-------------------------
const key = '1'
const obj = {
  key: 'The key is key',
  1: 'The key is 1'
}

// what will the following lines print?
console.log(obj['key']); // the key is key
console.log(obj[key]); // the key is 1
console.log(obj["1"]); // the key is 1
/*
Create an object with at least four properties, each with a different data type
Name one of the four properties "collection" and set its value to an Array or Object
*/
const favGame = {
  game: "fifa",
  love: true,
  sinceWhen: 10,
  collection: [2018, 2019, 2020, 2021]
}

// access a value in in "collection" property
console.log(favGame.collection); // can access a specific value with [x] //

// Nested Arrays and Objects
//===========================

// below is an array of strings with 5 elements
const keys = ["key","1","method","favorites", "list"];
// below is an object with 2x key-value pairs
const newObj = {
  key: "the key is key",
  1: "the key is 1"
}
// adding a method to the object `newObj`
newObj.method = function() {
  return "the key is 'method' and ti calls refers to a function";
}
console.log(newObj.method();)
// add a nested object key-value pair to the object `newObj`
// fill in your favorite movie and color below
newObj["favorites"] = {
  movie: "The Other Guys",
  number: 8,
  color: "Orange"
};

// add a complex array to the object `newObj`
newObj.list = ["a", "b", 3, "d", ["e", 4, 5],{f: 6}];

/*
How many lines will the following for...of statement print?
What do you expect to see on each line?
*/
for (let key of keys) {
  console.log(`The key is ${key}, and the value is: ${newObj[key]}`);
}

// use a template literal to print a sentence about your favorite movie and color
console.log(`My favorite movie is ${newObj.favorites.movie} and my favorite color is ${newObj.favorites.movie}`) //not sure if this works
// access the values "b", 4, and 6 from obj.list
console.log("This is b value", newObj[1], "this is 4", newObj[4][1], "this is 6", newObj[5].f]);
