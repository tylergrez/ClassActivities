const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
let newArr = arrOne.concat(arrTwo, 4, "e");
console.log(newArr);
// print the new, merged array

// join the merged array and print the result
console.log(newArr.join());
console.log(newArr.join("-"));
