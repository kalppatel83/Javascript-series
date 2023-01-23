// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var userLoggedIn = 0;

// if (userLoggedIn) {
//   console.log("show logout");
// } else {
//   console.log("show Login");
// }

// TODO: Ternary Operator
// syntax => condition ? ifTrue : ifFalse
var button = userLoggedIn
  ? console.log("show logout")
  : console.log("show Login");
console.log(button);
