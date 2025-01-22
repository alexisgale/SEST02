let cartItems = [];
function addToCart(productObject) {
  cartItems.push(productObject);
}
module.exports = {
  addToCart,
};
function displayCartItems() {
  console.log(cartItems);
}
module.exports = {
  addToCart,
  displayCartItems,
};
