window.onload = function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
  } else {
    document.getElementById("welcomeMessage").textContent = `Hello, ${user.username}!`;
  }

  document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
};