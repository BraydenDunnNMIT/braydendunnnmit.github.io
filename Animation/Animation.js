// Retrieve the button element
const button = document.getElementById("go-to-page-button");

// Define the text for the typing animation
const text = "{Booting up device .    .    .";

// Function to simulate typing animation and redirect
function typeAnimationAndRedirect() {
  let index = 0;
  let animatedText = "";

  const interval = setInterval(() => {
    animatedText += text[index];
    button.innerText = animatedText + "}";

    if (index === text.length - 1) {
      clearInterval(interval);
      // Add delay before redirecting
      setTimeout(() => {
        // Redirect to the new page
        window.location.href = "../index.html";
        ;
      }, 1500);
    }

    index++;
  }, 100);
}

// Start the typing animation when the page is loaded
window.addEventListener("load", typeAnimationAndRedirect);
