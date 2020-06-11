import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCart(props) {

    const [cart, setCart] = useState([]);

    const checkout = () => {
        prompt("Please enter your payment information");
    }

    return (
        <div>
            <h2>Your Cart</h2>
            <nav>
                <Link to="/">Hide Cart</Link>
            </nav>
            {cart.map(item => <div>{item.name}</div>)}
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}