document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("power-button").addEventListener("click", function() {
    var asciiArtElement = document.getElementById("ascii-art");
    var asciiArtText = asciiArtElement.textContent;
    
    asciiArtText = asciiArtText.replace("C:\\> ", "Err0r ");
    asciiArtElement.textContent = asciiArtText;
  });
});
