
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function() {
    window.location.href = "./signup-login/signup.html";
});
let quantity = 0;
const decreaseQuantity = document.getElementById("decreaseQuantity");
const quantityBox = document.getElementById("productQuantity");
quantityBox.textContent = quantity;
decreaseQuantity.addEventListener("click", function () {
  if (quantity !== 0) {
    quantityBox.textContent = quantity -= 1;
};
});
const increaseQuantity = document.getElementById("increaseQuantity");
increaseQuantity.addEventListener("click", function(){
    quantityBox.textContent = quantity += 1;
});