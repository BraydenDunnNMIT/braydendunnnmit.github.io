function typeWelcomeText() {
  var text = "Welcome back master";
  var welcomeTextElement = document.getElementById("welcome-text");
  var delay = 100; // Delay in milliseconds

  for (var i = 0; i < text.length; i++) {
    (function (i) {
      setTimeout(function () {
        welcomeTextElement.textContent += text[i];
      }, i * delay);
    })(i);
  }
}

typeWelcomeText();

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // You can replace this with an AJAX request to validate against a server-side JSON file or database
  var storedUsername = "Administrator";
  var storedPassword = "Pa$$w0rd";

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
window.location.href = window.location.href = "PersonalWebsite/dashboard/dashboard.html"; // Redirect to the dashboard.html
  } else {
    alert("Invalid credentials. Please try again.");
  }
}




