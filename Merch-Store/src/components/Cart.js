import React from 'react';
import './Cart.css'; // Import the CSS file for this component

function Cart({ cartItems, onCheckout, onRemoveItem }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.coins} coins
            <button onClick={() => onRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;
