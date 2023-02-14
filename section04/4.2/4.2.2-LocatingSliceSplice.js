const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a"); // 0
let firstB = arr.indexOf("b"); // 2
let firstC = arr.indexOf("c"); // 4
console.log(firstA, firstB, firstC);
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a"); // 6
let lastB = arr.lastIndexOf("b"); // 8
let lastC = arr.lastIndexOf("c"); // 11
console.log(lastA, lastB, lastC);
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValues) {
  let firstInstance = array.indexOf(duplicatedValues);
  let lastInstance = array.lastIndexOf(duplicatedValues);
  while (firstInstance !== lastInstance) {
      array.splice(lastInstance, 1);
      lastInstance = array.lastIndexOf(duplicatedValues);
  }
  return array;
}
let singleAList = removeDuplicates(arr, "a");
console.log(singleAList);
let singleB = removeDuplicates(arr, "b");
console.log(singleB);
let singleC = removeDuplicates(arr, "c");
console.log(singleC);
