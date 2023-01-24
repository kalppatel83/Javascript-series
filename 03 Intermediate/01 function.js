function sayHello(name) {
  console.log("Hello There, Hitesh");
  console.log(`Hello There, Hitesh ${name}`);
}
// Calling a function

// sayHello("Kalp");
// sayHello("sammy");

function namstey() {
  return "Hello In India";
}
namstey();
// We are calling this successfully but we never said to print it
// here we are just saying return me this sting but we never defined what to do with that return value

// Storing the return value in an variable then printing that or you can directly call function inside the log

var gretting = namstey();
console.log(gretting);
