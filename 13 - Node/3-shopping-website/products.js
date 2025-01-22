const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mobile Phone", price: 500 },
  { id: 3, name: "Mechanical Keyboard", price: 300 },
];

function displayProducts() {
  console.log("Products:");
  console.log(products);
}

function getProduct(productID) {
  // find(): return the first element that pass the test condition
  return products.find((productObject) => productID === productObject.id);
}
function calculateTotal() {
  let total = 0;
  for (let item of cartItems) {
    total += item.price;
  }
  return total;
}
module.exports = {
  addToCart,
  displayCartItems,
  calculateTotal,
};

module.exports = {
  displayProducts,
};
