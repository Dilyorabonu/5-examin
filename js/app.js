const cart_toggle = document.getElementById("cart_toggle");
const cart = document.getElementById("cart");
const overlay = document.getElementById("overlay");

cart_toggle.addEventListener("click", () => {
  cart.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
