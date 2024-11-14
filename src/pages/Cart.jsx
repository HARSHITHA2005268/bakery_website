import React from 'react';
import './Cart.css'; // Adjust relative path

function Cart() {
  // Extended placeholder cart items for design purposes
  const cartItems = [
    { id: 1, name: 'Chocolate Cake', price: 20.0, quantity: 1, image: '/assets/cake2.jpg' },
    { id: 2, name: 'Vanilla Cake', price: 15.0, quantity: 2, image: '/assets/cake5.jpg' },
    { id: 3, name: 'Red Velvet Cake', price: 25.0, quantity: 1, image: '/assets/cake3.jpg' },
    { id: 4, name: 'Black Forest Cake', price: 30.0, quantity: 1, image: '/assets/cake4.jpg' },
    { id: 5, name: 'Fruit Cake', price: 18.0, quantity: 3, image: '/assets/cake6.jpg' },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

