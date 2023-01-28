function isEven(element) {
  //   if (element % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return element % 2 === 0;
}
// console.log(isEven(9));

// Declaring a arrow function
// It is required to write return in arrow function otherwise it will give undefined error

var isOdd = (e) => {
  return e % 2 != 0;
};
// console.log(isOdd(2));

// TODO: Callback function
// every goes into your array check the given condition if all of them pass the test it will return true or false if any one of them fail

var results = [2, 3, 6, 8].every(isEven);
// console.log(results);

// TODO: How to write a call back?? A simple function which won't having name

// ()=>{required return keyword}
// ()=>(return not requied)

var results = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(results);
