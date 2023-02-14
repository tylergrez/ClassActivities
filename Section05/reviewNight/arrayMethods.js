const testResults = [
  { student: 'Greg', subject: 'English', score: 90 },
  { student: 'Spike', subject: 'Math', score: 75 },
  { student: 'Moose', subject: 'History', score: 92 },
  { student: 'Peter', subject: 'English', score: 85 },
  { student: 'Chicken', subject: 'Math', score: 50 },
  { student: 'Spike', subject: 'English', score: 79 },
  { student: 'Chicken', subject: 'English', score: 33 },
  { student: 'Peter', subject: 'Math', score: 82 },
  { student: 'Chicken', subject: 'History', score: 65 },
  { student: 'Greg', subject: 'Math', score: 87 },
  { student: 'Spike', subject: 'History', score: 93 },
];

// 1.a) using .filter method, create an array called gregResults that only contains Greg's testResults
let gregResults = testResults.filter((arr) => arr.student === 'Greg'); // .filter returns an array of the array or object for specified path
console.log(gregResults);

// 1.b) Using the .filter method, create an array called englishResults that only contains 'English' testResults
let englishResults = testResults.filter((arr) => arr.subject === 'English');
console.log(englishResults);

// 1.c) Using the array created for 1.a, create an array called gregScores only containing Greg's scores
// Example: [50, 90, ect]
let gregScores = gregResults.map((arr) => arr.score); //.map returns an array of  values for specified path
console.log(gregScores);

// 2) Create a function called testAverage, which will take test results and return the average test score
function testAverage(arr) {
 let tempScores = arr.map(obj => obj.score);
 let finalScores = tempScores.reduce((acc, curr) => acc + curr) / tempScores.length;
 console.log(finalScores `The ${arr.length} tests resulted in an average of ${average}`);
}

testAverage(englishResults);

// alternative results
function testAverage2(tests) {
  let total = 0;
  tests.forEach(test) => (total += test.score);
  let avg = total / tests.length;
  console.log(`The ${test.length} test resulted in an average of: ${avg}`);
  return avg;
}

// These are the requirements of the function:
// A single parameter that accepts an array as an argument (we will be using the arrays created earlier)
// NOTE: Remember, each item of the arrays above are objects
// Inside the function, iterate through the array to gain access to the values of each property
// HINT: This is VERY similar to how we accessed values from properties in objects
