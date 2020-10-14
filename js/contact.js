
  // Target selector
const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

  // Funksjon som validerer det som skrives inn
function validateForm(event) {
  event.preventDefault();
  console.log("Form submitted");

  // Fornavn
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;
  const trimNameValue = nameValue.trim();
  const nameValueLength = trimNameValue.length;

  if (nameValueLength > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  // Etternavn
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;
  const trimlastNameValue = lastNameValue.trim();
  const lastNameValueLength = trimlastNameValue.length;

  if (lastNameValueLength >= 1) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  // Epost
  const email = document.querySelector("#email");
  const emailValue = email.value;
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    emailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  // Beskjed
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;
  const trimMessageValue = messageValue.trim();
  const messageValueLength = trimMessageValue.length;

  if (messageValueLength >= 5) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

  // Egen funksjon for eport-validasjon
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
