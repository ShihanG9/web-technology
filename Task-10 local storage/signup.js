document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});