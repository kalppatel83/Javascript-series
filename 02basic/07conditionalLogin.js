// In the case of login we are bit
// lenient if any one of the condition is true user can watch the website content
// If all of them are false then only the else block will execute

var isLogedinFromEmail = 0;
var isLogedinFromGoogle = 0;
var isLogedinFromFacebook = 0;

// if (isLogedinFromEmail || isLogedinFromGoogle || isLogedinFromFacebook) {
//   console.log("Login Success");
// } else {
//   console.log("Login Failed");
// }

// TODO: Assignment

if (isLogedinFromEmail) {
  console.log("Email login success");
} else if (isLogedinFromGoogle) {
  console.log("Google login success");
} else if (isLogedinFromFacebook) {
  console.log("Facebook login success");
} else {
  console.log("login Failed");
}
