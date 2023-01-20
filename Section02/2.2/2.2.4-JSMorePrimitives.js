// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let string = "string";
let number = 1;
let boolean = true;
let primNull = null;
let primUndef;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(string, number, boolean, primUndef, primNull);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
`This is my template literal and my variables are ${number} and ${boolean}`;
// reassign the value of the variable that references "null"
primNull = 5;
// print the value and its type
console.log(primNull, typeof primNull);
// print a variable that causes a ReferenceError
console.log(doesNotExist);
// alter the previous line to no longer cause a ReferenceError
let doesNotExist = 1;
console.log(doesNotExist);
