let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
console.log("before mutation x = " + x +" , y = " + y + " and z = " + z);
// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = "";
console.log("before mutation x = " + x +" , y = " + y + " and z = " + z);
// print x, y, and z
console.log("after mutation", x,y,z);
const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = NaN;
// b = false; // cannot reassign const
// c = 0;
// using BRACKET NOTATION, assign a value to b
b[0] = 1;
console.log("b after mutation", b);
// using DOT NOTATION, assign a PROPERTY to c
c.good = "time";
console.log(c.good);
// using DOT NOTATION, assign a METHOD to c
c.greet = () => "hello there";
console.log("c after 2nd mutation", c.greet());
// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());
console.log("simpler method call...", c.greet());
// print a, b, and c
console.log(a,b,c);
