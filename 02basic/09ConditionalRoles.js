var user = "subAdmin";

switch (user) {
  case "admin":
    console.log("you get full access ");
    break;
  case "subAdmin":
    console.log("you get access to create and delete the course ");
    break;
  case "testPrep":
    console.log("you are allowed to create test");
    break;
  case "user":
    console.log("you get access to consume the content ");
    break;

  default:
    console.log("Contact Admin");
    break;
}
