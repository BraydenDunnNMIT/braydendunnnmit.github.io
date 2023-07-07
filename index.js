window.addEventListener('DOMContentLoaded', () => {
  const logoText = document.getElementById('logo-text');
  animateLogoText(logoText);
});

function animateLogoText(element) {
  const initialText = element.textContent; // Store the initial text
  let animatedText = '';
  let index = 0;
  const animationDelay = 210; // Delay in milliseconds

  const interval = setInterval(() => {
    animatedText += initialText[index]; // Use the initialText variable
    element.textContent = animatedText;
    index++;

    if (index >= initialText.length) { // Use initialText.length
      clearInterval(interval);
      setTimeout(() => {
        reverseAnimation(element, animatedText);
      }, 3000);
    }
  }, animationDelay);
}

function reverseAnimation(element, text) {
  let index = text.length - 2; // Start from the second-to-last index
  const animationDelay = 260; // Delay in milliseconds

  const interval = setInterval(() => {
    const newText = text.slice(0, 1) + text.slice(index + 1); // Combine the first letter and remaining text
    element.textContent = newText;
    index--;

    if (index < 0) {
      clearInterval(interval);
      setTimeout(() => {
        animateLogoText(element);
      }, 4000);
    }
  }, animationDelay);
}
