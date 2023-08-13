// src/components/Merchandise.js

import React from 'react';
import './Merchandise.css';

function Merchandise({ onAddToCart }) {
  const merchandiseItems = [
    {
      id: 1,
      name: 'Eco-Friendly Reusable Water Bottle',
      coins: 100,
      image: '/images/water-bottle.png',
    },
    {
      id: 2,
      name: 'Organic Cotton Tote Bag',
      coins: 150,
      video: '/images/tote-bag.mp4', // Update the video path
    },
    {
      id: 3,
      name: 'Bamboo Cutlery Set',
      coins: 200,
      image: '/images/bamboo-cutlery.png',
    },
  ];

  return (
    <div className="merchandise">
      {merchandiseItems.map((item) => (
        <div key={item.id} className="merch-item">
          {item.video ? (
            <video width="100%" controls>
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.image} alt={item.name} />
          )}
          <h3>{item.name}</h3>
          <p>{item.name} - {item.coins} coins</p>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <p>Cart at end of page</p>
        </div>
      ))}
    </div>
  );
}

export default Merchandise;
