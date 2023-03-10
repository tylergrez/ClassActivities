const sodas = [
  {
      "name": "Pepsi",
      "sugarFree": false,
      "energy": false,
      "image": "fake.cdn/pepsi.jpg"
  },
  {
      "name": "Coke",
      "sugarFree": false,
      "energy": false,
      "image": "fake.cdn/coke.jpg"
  },
  {
      "name": "NOS",
      "sugarFree": false,
      "energy": true,
      "image": "fake.cdn/nos.jpg"
  },
  {
      "name": "Diet Pepsi",
      "sugarFree": true,
      "energy": false,
      "image": "fake.cdn/diet_pepsi.jpg"
  }
]

let attributeList = [
  "name",
  "image"
]

// expected output 1
// name: Pepsi, image: fake.cdn/pepsi.jpg
// name: Coke, image: fake.cdn/coke.jpg
// name: NOS, image: fake.cdn/nos.jpg
// name: Diet Pepsi, image: fake.cdn/diet_pepsi.jpg

// let attributeList = [
//   "name",
//   "sugarFree",
//   "energy"
// ]

// expected output 2
// name: Pepsi, sugarFree: false, energy: false
// name: Coke, sugarFree: false, energy: false
// name: NOS, sugarFree: false, energy: true
// name: Diet Pepsi, sugarFree: true, energy: false

// function whiteBoard (array) {
//   let output = "";
//   let params = array.forEach (attribute => {
//     for (let soda of sodas) {
//       output += `${attribute}: ${soda[attribute]}`
//     }
//   })
//   console.log(output);
// }

// whiteBoard(attributeList);

function thisIsTorture (array) {
  let output = "";
  for (let soda of sodas) {
    array.forEach (attribute => console.log(`${attribute}: ${soda[attribute]}`));
  }
}

thisIsTorture (attributeList);
