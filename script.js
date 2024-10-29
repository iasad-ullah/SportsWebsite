const cartCountElement = document.getElementById("cart-count");

let cartCount = 0;

document.querySelectorAll(".add-to-cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++; 
    cartCountElement.textContent = cartCount; 
  });
});