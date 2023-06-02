"use strict";

const form = document.getElementById("subscribe-form");
const input = document.getElementById("email-address");
const errorDiv = document.querySelector(".error");
const main = document.getElementById("main");
const successScreen = document.getElementById("success-screen");
const emailAddressSuccess = document.getElementById("email-address-success");

let emailAdress;

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  emailAdress = input.value;
  emailAddressSuccess.textContent = emailAdress;
  main.classList.add("hidden");
  successScreen.classList.remove("hidden");
  successScreen.classList.add("flex");
});

input.addEventListener("invalid", (e) => {
  e.preventDefault();
  input.classList.add("error-input");
  errorDiv.classList.remove("hidden");
});

input.addEventListener("focus", (e) => {
  e.preventDefault();
  input.classList.remove("error-input");
  errorDiv.classList.add("hidden");
});
