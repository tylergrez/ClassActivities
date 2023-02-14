// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar").outerHTML;
console.log(navBar);
// print the inner HTML of the navigation bar
console.log(navBar.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
// skipping for now, cover later//
// select the img element and add a src attribute
document.querySelector("img").src =
  "https://www.shutterstock.com/image-photo/pure-youth-crazy-english-cocker-260nw-1424153078.jpg";
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";
