/*jshint esversion: 6*/
"use strict";

const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");

const emailInput = document.getElementById("emailInput");
const btn = document.getElementById("btn");
const reply = document.getElementById("reply");

// Listens for submit to be clicked
// If nonvalid, notify user
button.addEventListener("click", function () {
  let email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "";
  } else {
    response.innerHTML = "Oops! Please check your email";
  }
});

btn.addEventListener("click", function () {
  let mail = emailInput.value;
  if (validateMail(mail)) {
    response.innerHTML = "";
  } else {
    response.innerHTML = "Oops! Please check your email";
  }
});

// On submit, check for valid email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateMail(mail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}
