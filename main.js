document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('#form');
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const cpassword = document.querySelector('#cpassword');
  form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
      e.preventDefault();
    }
  });

  function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let valid = true;

    if (usernameVal === '') {
      setError(username, ' * Username is required');
      valid = false;
    } else {
      setSuccess(username);
    }

    if (emailVal === '') {
      setError(email, ' * Email is required');
      valid = false;
    } else if (!validateEmail(emailVal)) {
      setError(email, '* Enter a valid email');
      valid = false;
    } else {
      setSuccess(email);
    }

    if (passwordVal === '') {
      setError(password, ' * Password is required');
      valid = false;
    } else if (passwordVal.length < 8) {
      setError(password, '* Password must be at least 8 characters long');
      valid = false;
    } else {
      setSuccess(password);
    }

    if (cpasswordVal === '') {
      setError(cpassword, '* Confirm Password is required');
      valid = false;
    } else if (cpasswordVal !== passwordVal) {
      setError(cpassword, ' * Passwords do not match');
      valid = false;
    } else {
      setSuccess(cpassword);
    }
    if (valid) {
      window.location.href = 'login.html'; // Redirect to the login page
    }
    
    return valid;
  }
  
  
  

  function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    element.style.border = '1px solid red';
  }

  function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    element.style.border = '1px solid green';
  }


function showSuccessAlert() {
  const alertBox = document.querySelector('.alert-box');
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.innerText = 'Account created successfully.';
  alertBox.classList.add('show');

  setTimeout(function() {
    alertBox.classList.remove('show');
    window.location.href = 'login.html';
  }, 3000);
}





  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  }
});


