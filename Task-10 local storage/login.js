document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});