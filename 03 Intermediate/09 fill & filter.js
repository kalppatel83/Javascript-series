// TODO: Fill
var testArray = [2, 4, 8, 6, 5, 1, 5, 9];

// ("Value to be filled", "Start position => inclusive", end position => exclusive)

console.log(testArray.fill("h", 2, 7));

// TODO: Filter
//when ever you use filter you'll get a new array
// Filter expect you give callbacks
const myNumber = [55, 44, 03, 45, 87, 98, 12];

const results = myNumber.filter((e) => e != 55);
console.log(results);

// Anykind of operation you want to perform
// (e) => e >= 55
// (e) => e < 55
