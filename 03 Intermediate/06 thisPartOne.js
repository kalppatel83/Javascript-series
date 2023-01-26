// PArt 1 of this keyword

console.log(this); //{}

var game = "basketball";

function sayName() {
  var name = "Tod";
  console.log(this);
}

sayName(); // on this line we are getting things are which is really hard to understand but this
//exact same code will return window object in the case of browser
