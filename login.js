document.getElementById("login-btn").addEventListener("click", () => {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("login-msg");

  // Validation
  if (username === "" || password === "") {
    msg.textContent = "⚠️ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  // Default demo credentials
  const admin = { username: "admin", password: "admin123" };
  const user = { username: "user", password: "user123" };

  if (role === "admin" && username === admin.username && password === admin.password) {
    msg.textContent = "✅ Admin login successful!";
    msg.style.color = "green";
    setTimeout(() => window.location.href = "admin-dashboard.html", 1000);
  } 
  else if (role === "user" && username === user.username && password === user.password) {
    msg.textContent = "✅ User login successful!";
    msg.style.color = "green";
    setTimeout(() => window.location.href = "user-dashboard.html", 1000);
  } 
  else {
    msg.textContent = "❌ Invalid credentials. Try again.";
    msg.style.color = "red";
  }
});
