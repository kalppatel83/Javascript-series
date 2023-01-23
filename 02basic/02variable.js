// TODO: String Interpolation or Template Literals

const uid = "abc123";
var fullName = "Kalp Patel";
var email = "kalp_patel@rocketmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");

console.log("Your email is", email);
// Some better ways

console.log(`
Your fullName is= ${fullName}
your email-Id is: ${email}
you're using password which is ${password}
is user logged in from google ${isLoggedInFromGoogle}`);

// Assignment

const userFirstName = "ABC";
const userLastName = "cda";
var userEmail = "abc@email.com";
var userPassword = "12345678";
var userCountry = "india";
var userState = "gujarat";
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;
var userCourseCount = 5;

console.log(`
User FirstName is${userFirstName}
User LastName is${userLastName}
Uses the email ${userPassword}
his country is ${userCountry}
his state is ${userState}
is he isLoggedInFromGoogle ${isLoggedInFromGoogle}
is he isLoggedInFromFacebook ${isLoggedInFromFacebook}
his total Course count is ${userCourseCount}
`);
