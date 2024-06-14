import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan").then(response => {
  console.log(response);
});