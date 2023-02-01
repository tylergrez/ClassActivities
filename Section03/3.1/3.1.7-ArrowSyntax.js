// refactor the functions below into arrow syntax
/* function myNumberFunction() {
    return ((2 ** 2 + 3) % 4) * 14;
  } */
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
console.log(myNumberFunction);
myNumberFunction();

  // function greet(name) {
  //   return `Hello, ${name}`;
  // }
const greet = name => `Hello ${name}`;
console.log(greet);
greet('Tyler')

  // const timeOfDayGreet = function(name, timeOfDay) {
  //   return `Hello, ${name}, good ${timeOfDay}`;
  // };
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
console.log(timeOfDayGreet);
timeOfDayGreet('Tyler', 'evening');


  // function tripleAndHalf(num) {
  //   let triple = num * 3;
  //   return triple / 2;
  // }
  const tripleAndHalf = num => {
    let triple = num * 3;
    return triple / 2;
  };
  console.log(tripleAndHalf);
  console.log(tripleAndHalf(4));

  // function sumTwoNumbers(num1, num2) {
  //   let sum = num1 + num2;
  //   console.log(`The sum of your numbers is ${sum}.`);
  //   return sum;
  // }
const sumTwoNumbers = (num1, num2) => {
  sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
console.log(sumTwoNumbers);
console.log(sumTwoNumbers(1,2));
