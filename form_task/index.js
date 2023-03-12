function validateForm(event) {
    event.preventDefault();
  
    // Get form inputs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const genderInput = document.getElementById("gender");
    const passwordInput = document.getElementById("password");
  
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById("emailError").style.display = "block";
      return;
    }
  
    // Check required fields
    if (!nameInput.value) {
      nameInput.style.borderColor = "red";
    }
    if (!emailInput.value) {
      emailInput.style.borderColor = "red";
    }
    if (!phoneInput.value) {
      phoneInput.style.borderColor = "red";
    }
    if
  