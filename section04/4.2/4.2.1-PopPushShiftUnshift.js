const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
console.log(nums);
const pop1 = nums.pop();
const pop2 = nums.pop();
console.log(pop1, pop2);
// remove each of the first two items with shift(), saving each item to a variable
console.log(nums);
const shift1 = nums.shift();
const shift2 = nums.shift();
console.log(shift1, shift2);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shift2,shift1);
console.log(nums);
nums.unshift(pop1,pop2);
console.log(nums);
