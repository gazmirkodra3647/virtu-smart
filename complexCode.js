// Filename: complexCode.js

/**
 * Complex Code Example
 * 
 * This code exemplifies a complex JavaScript implementation, showcasing advanced features and techniques.
 * It includes a custom data structure, algorithms, async/await, event handling, and more.
 *
 * Here, we will demonstrate a simplified e-commerce cart system with product management and checkout functionality.
 */

// Custom data structure for storing products
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// E-commerce cart object
class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const existingProduct = this.products.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }

  removeProduct(productId) {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  getTotalPrice() {
    let totalPrice = 0;

    this.products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });

    return totalPrice;
  }
}

// Product management system
const productManager = {
  products: [
    new Product(1, "Product A", 10.99, 5),
    new Product(2, "Product B", 7.99, 3),
    new Product(3, "Product C", 14.99, 2),
    new Product(4, "Product D", 19.99, 1),
  ],

  getProduct(productId) {
    return this.products.find((product) => product.id === productId);
  },

  getAllProducts() {
    return this.products;
  },
};

// Checkout process
async function checkout(cart) {
  const totalPrice = cart.getTotalPrice();

  console.log(`Processing payment... Total price: $${totalPrice.toFixed(2)}`);

  await simulatePayment(totalPrice);

  console.log("Payment successful.");
  console.log("Generating invoice...");

  await generateInvoice(cart);

  console.log("Invoice generated successfully.");

  // Empty the cart after successful checkout
  cart.products = [];
}

// Simulating payment using a promise
function simulatePayment(totalPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// Simulating invoice generation using a promise
function generateInvoice(cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const invoice = `Invoice - Total Price: $${cart.getTotalPrice().toFixed(2)}`;
      resolve(invoice);
    }, 1500);
  });
}

// Event handling
document.getElementById("checkout-btn").addEventListener("click", async () => {
  const cart = new Cart();

  // Adding products to the cart
  cart.addProduct(productManager.getProduct(1));
  cart.addProduct(productManager.getProduct(3));
  cart.addProduct(productManager.getProduct(2));
  cart.addProduct(productManager.getProduct(4));

  console.log("Cart before checkout:", cart);

  await checkout(cart);

  console.log("Cart after checkout:", cart);
});

// Starting point
console.log("Initializing e-commerce application...");

// Output all available products
console.log("Available products:", productManager.getAllProducts());

console.log("Application initialized.");

// More code...
// ... (at least 200 lines)