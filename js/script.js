document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    const content = document.getElementById("content");
    content.style.opacity = "1";
    content.style.animation = "fadeIn 1s ease-in-out forwards";
  }, 5000);
});