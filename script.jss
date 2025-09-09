const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increase").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim().length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "✅ Registration successful!";
    form.reset();
  } else {
    document.getElementById("successMessage").textContent = "";
  }
});
