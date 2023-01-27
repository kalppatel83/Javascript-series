var countries = ["India", "Usa", "Japan", "Russia"];

var states = new Array("Gujarat", "Rajasthan", "Delhi", "Mumbai");

// console.log(states[0]);

// console.log(states.length); // 4 => day to day counting not in machine language
states[0] = "Punjab";
// console.log(states);

var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
// this is not a good data structure we can insted use object to store this kinds of values but possible to store in array too

// console.log(user);

user.pop();
user.pop();

// console.log(user);
//but this shift & unshift is costly operation bcoz every value in array need to get re-shifed so use it wisly
user.unshift("New Value");
user.shift();
console.log(user);

console.log(user.indexOf(3)); // programaticaly index will be given not in general
console.log("Newyy"); // will return -1 if the element is not present in array

console.log(Array.from("hitesh"));
