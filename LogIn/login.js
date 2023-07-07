function typeWelcomeText() {
  var text = "Welcome <3";
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

  //Check if password and user are the same 
  if (username === storedUsername && password === storedPassword) {
    alert("Authorization granted.");
window.location.href = window.location.href = "../index.html"; // Redirect to the homepage
  } else {
    alert("Authorization denied.");
  }
}




