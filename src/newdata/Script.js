// src/Menu.js
import React, { useState } from 'react';
import './Script.css';
import image1 from './image11.png';
import image2 from './image22.png';
import image3 from './image33.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';




const products = [
    { id: 1, name: "Burger Dreams", price: 9.20, image: image1, description: "A delicious dream burger" },
    { id: 2, name: "Burger Waldo", price: 10.00, image: image2, description: "Find the taste with Waldo burger" },
    { id: 3, name: "Burger Cali", price: 8.00, image:image3, description: "Cali style burger" },
    { id: 4, name: "Burger Bacon Buddy", price: 9.99, image:image4, description: "Buddy with bacon" },
    { id: 5, name: "Burger Spicy", price: 9.20, image:image5, description: "Spicy delight" },
    { id: 6, name: "Burger Classic", price: 8.00, image: image6, description: "Classic taste" },
];

const Script = () => {
    return (
        <div className="menu-container">
            <h1>Browse our menu</h1>
            <p>Use our menu to place an order online, or phone our store to place a pickup order.</p>
            <div className="category-buttons">
                <button className="active">Burgers</button>
                <button>Sides</button>
                <button>Drinks</button>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <span className="price">${product.price.toFixed(2)} USD</span>
                            <div className="add-to-cart">
                                <input type="number" min="1" defaultValue="1" />
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="see-full-menu">See Full Menu</button>
        </div>
    );
};

export default Script;
