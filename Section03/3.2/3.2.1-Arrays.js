// create an Array using an Array literal
const testArr = [1, 2, 3, 4, 6];
// access the 1st item in the Array
testArr[0];
// access the last item in the Array
testArr[4];
// print the length of the Array
console.log(testArr.length);
// use the length property to access the last item in the Array
console.log(testArr[testArr.length - 1])
// with for...of, loop over the Array, modify the value and add to a different Array
for (let number of testArr) {
  console.log(number);
  number += 1
}
