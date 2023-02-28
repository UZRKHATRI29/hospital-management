const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value.trim();
  const dob = form.elements.dob.value;
  const gender = form.elements.gender.value;
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();
  const address = form.elements.address.value.trim();

  if (name === '' || dob === '' || gender === '' || phone === '' || email === '' || address === '') {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateName(name)) {
    alert('Please enter a valid name.');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});

function validateName(name) {
  // Name must only contain letters and spaces
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
}

function validatePhone(phone) {
  // Phone number must be 10 digits and may contain dashes or parentheses
  const regex = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(phone);
}

function validateEmail(email) {
  // Email must be a valid email address
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  return regex.test(email);
}
