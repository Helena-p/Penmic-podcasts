/*jshint esversion: 6*/
"use strict";

const emailInput = document.getElementById("emailInput");
const btn = document.getElementById("btn");
const reply = document.getElementById("reply");

// Listens for submit to be clicked
// If nonvalid, notify user
btn.addEventListener("click", function () {
  let mail = emailInput.value;
  if (validateMail(mail)) {
    reply.innerHTML = "";
  } else {
    reply.innerHTML = "Oops! Please check your email";
  }
});

// On submit, check for valid email
function validateMail(mail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}
