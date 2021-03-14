"use strict";

const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");

// Listens for submit to be clicked
// If nonvalid, notify user
button.addEventListener("click", function () {
  let email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "You have successfully submitted your request!";
  } else {
    response.innerHTML = "Oops! Please check your email";
  }
});

// On submit, check for valid email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
