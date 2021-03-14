"use strict";

const email = document.GetElementById("email");
const button = document.getElementById("button");
const response = document.getElementById("response");

// Listens for submit to be clicked
// If nonvalid, notify user
button.addEventListener("click", function () {
  let mail = email.value;
  if (validateMail(mail)) {
    response.innerHTML = "You have successfully submitted your request!";
  } else {
    response.innerHTML = "Oops! Please check your email";
  }
});

// On submit, check for valid email
function validateMail(mail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(string(mail).toLowerCase());
}
