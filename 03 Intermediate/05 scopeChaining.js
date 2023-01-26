var name = "Hitesh";

console.log("Line number 3 a small grandparent", name);

function sayName() {
  //   var name = "Mr.h";
  console.log("Line number 6 a parent", name);
  sayNameTwo();
  function sayNameTwo() {
    // var name = "Mr Hc";
    console.log("Line number 10 a small child", name);
  }
}

sayName();

// WE can ask as many as above level but not below bcoz it's not morally correct to ask from child
