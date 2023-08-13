import React, { useState } from 'react';
import './App.css';
import RedeemForm from './components/RedeemForm';
import Merchandise from './components/Merchandise';
import Cart from './components/Cart';

function App() {
  const [redeemed, setRedeemed] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCodeRedeemed = () => {
    setRedeemed(true);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a simulated checkout process.');
    setCartItems([]);
  };

  return (
    <div className="App">
      <h1>MERCH X STORE </h1>
      {!redeemed ? (
        <RedeemForm onCodeRedeemed={handleCodeRedeemed} />
      ) : (
        <>
          <Merchandise onAddToCart={handleAddToCart} />
          {cartItems.length > 0 && <Cart cartItems={cartItems} onCheckout={handleCheckout} onRemoveItem={handleRemoveItem} />}
        </>
      )}
    </div>
  );
}

export default App;
