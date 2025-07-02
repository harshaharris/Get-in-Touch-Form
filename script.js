const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let hasError = false;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    hasError = true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    hasError = true;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    hasError = true;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    hasError = true;
  }

  if (!hasError) {
    document.getElementById("successMessage").textContent = "Message sent successfully!";
    form.reset();
  }
});
