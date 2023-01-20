// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "evening";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
const greeting = `Good ${timeOfDay}!`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;
// Print the new variable and its type
// What type should we expect?
console.log(newVar, typeof newVar); // should return undefined //
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;
// Print the variable and its type again
// What type should we expect?
console.log(newVar, typeof newVar);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(doesNotExist); // should return reference error //
// Print "greeting" again
// Will this line run?
console.log(greeting); // the undefined error thrown by the non-existent variable will overtake following proper console results //
