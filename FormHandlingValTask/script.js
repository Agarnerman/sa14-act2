const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateUsername() && validateEmail() && validatePassword()) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue.length < 6) {
    document.getElementById('usernameError').textContent = 'Username must be at least 6 characters';
    return false;
  } else {
    document.getElementById('usernameError').textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    return false;
  } else {
    document.getElementById('emailError').textContent = '';
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  const containsNumber = /[0-9]/.test(passwordValue);
  const containsCapital = /[A-Z]/.test(passwordValue);
  if (passwordValue.length < 8 || !containsNumber || !containsCapital) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain at least one number and one capital letter';
    return false;
  } else {
    document.getElementById('passwordError').textContent = '';
    return true;
  }
}
