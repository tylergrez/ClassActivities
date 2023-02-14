// select all unordered list (ul) elements ///// console.logs for class purposes only! ///
console.log(
  "This is UL elements from getElements: ",
  document.getElementsByTagName("ul")
);

console.log(
  "this is UL elements from selectorQuery: ",
  document.querySelectorAll("ul")
);
// select all elements with the class "class-week"
console.log("this is ", document.querySelectorAll(".class-week"));

console.log("This is ", document.getElementsByClassName("class-week"));
// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar"));

console.log(document.getElementsByClassName("nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.getElementById("dog-picture");
console.log("this is: ", dogPic);
