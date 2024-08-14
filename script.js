const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error function
const showError = (input, messagge) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = messagge;
};

// Show Success function
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email format validity
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(String(email).toLocaleLowerCase());
};

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email)) {
    showError(email, "Email is not valid!!");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value !== password.value) {
    showError(password2, "Password does not match!");
  } else if (password2.value === "") {
    showError(password2, "Re-enter your password");
  } else {
    showSuccess(password2);
  }
});
