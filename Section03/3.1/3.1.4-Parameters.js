// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function testFunc(param1, param2){
  console.log(param1);
  console.log(param2);
  return (param1 + param2);
}
// invoke the function and pass in two numbers
testFunc(1, 2);
// invoke the function and pass in more than two numbers
testFunc(1, 2, 3);
// invoke the function and pass in only one number
testFunc(1);
// change the function to set default values for the parameters
function testFunc(param1="def1", param2="def2"){
  console.log(param1);
  console.log(param2);
  return (param1 + param2);
}
// again, invoke the function and pass in only one number
testFunc(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function testFunc(param1, param2,...restParam){
  console.log(param1);
  console.log(param2);
  console.log(restParam);
  return (param1 + param2);
}
// again, invoke the function and pass in more than two numbers
testFunc(1,2,3);
