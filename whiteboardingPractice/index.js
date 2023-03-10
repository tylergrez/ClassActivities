// findHighest(5, 8, 1) // --> 8
// findHighest([4, 1, -3]) // --> 4

// - Enter values (integers) as arguments in a function
// - Arguments (integers) need to be compared to each other to
// return highest value in dataset

// create function findHighest
// enter values into function as arguments (arguments can be array or dataset)
// establish array within parameters of function
// - for n numbers
// - arguments = x + restParams
// function:
//   - loop to iterate through arguments
//   - each iteration check
// use array.sort (sorts ascending)
// use array.reverse to bring highest value
// console.log array[0]

// const nArray = [n,...x];
// const findHighest(nArray) {
//   let nArraySort = nArray.sort,
//   let nArraySolution = nArray.reverse,
//   console.log (nArraySolution[0]);
// }

// const findHighest(...x) => {
//   let xSort = x.sort,
//   let xReverse = x.reverse,
//   console.log(xReverse[0]);
// }


function findHighest(...x) {
  function compareNumbers(a, b) {
      return a - b;
  }
  let xSort = x.sort(compareNumbers);
  let xReverse = xSort.reverse();
  return (xReverse[0]);
}
console.log(findHighest('test', 'test2', 'test3','a','b')); //proof of concept
