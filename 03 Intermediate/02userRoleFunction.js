function getUserRole(userName, role) {
  switch (role) {
    case "admin":
      return `${userName} you are an admin having full access `;

    case "subadmin":
      return `${userName} you are an subadmin having access to create and delete course `;
    case "testprep":
      return `${userName} you are an testprep having access to create and delete test`;
    case "user":
      return `${userName} you are an user having access to consume content `;
    default:
      return `${userName}contact admin`;
  }
}

var getRole = getUserRole("kalp", "testprep");
console.log(getRole);
