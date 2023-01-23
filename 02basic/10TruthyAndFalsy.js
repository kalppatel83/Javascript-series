// Topic truthy, fasly value and type coercion (==, ===)

// TODO: Fasly value
// undefined
// null
// 0
// ''
// NaN

// TODO: truthy value
// anything other then above 5 will be considered as truthy value

// Example
// Following code will not work bcoz we are assigning falsy value
// String would run fine but not empty string

var user = undefined;
if (user) {
  console.log("condition is true");
}

// Type coersion
var isNumber = "2";
// lenient check just to match the input
if (2 == isNumber) {
  console.log("condition is true");
}

// strict check match the input + datatype

// if (2 === isNumber) {
//   console.log("condition is true");
// }
