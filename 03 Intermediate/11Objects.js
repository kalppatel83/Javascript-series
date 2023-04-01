let user = {
  firstName: "Kalp",
  lastName: "Patel",
  role: "sub-Admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user);
console.log(user.firstName);

console.log(user["lastName"]); // another way of accessing

console.log(user.loginCount);
user.loginCount = 55;
console.log(user.loginCount);
