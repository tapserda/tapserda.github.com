function fadeOutAndRedirect() {
  document.body.style.transition = 'opacity 1s ease-in-out';
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "shop.html";
  }, 2000);
}
