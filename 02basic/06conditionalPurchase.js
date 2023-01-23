// Condition to Purchase a course on LCO

var isLoggedIn = true;
var isEmailVerifeid = true;
var cardInfo = true;

// If all the above 3 value are true then only the transation should proceed

// if (isLoggedIn) {
//   console.log("Logged in success");
//   if (isEmailVerifeid) {
//     console.log("email verified");
//   }
//   if (cardInfo) {
//     console.log("Allowed to purchase");
//   }
// } else {
//   console.log("contact Admin");
// }

if (isLoggedIn && isEmailVerifeid && cardInfo) {
  console.log(`Allowed to make a purchase`);
} else {
  console.log(`Contact Admin`);
}
