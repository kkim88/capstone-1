import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCart(props) {

    // props

    const { cart, setCart } = props;

    React.useEffect(() => {
        console.log("props in <ShoppingCart/ >", props.cart);
    });

    // checkout "functionality" to ask for payment details

    const checkout = () => {
        prompt("Please enter your payment information");
    }

    return (

        // hide cart link and renders cart + checkout button

        <div>
            <h2>Your Cart</h2>
            <nav>
                <Link to="/"><img src='/shopping-cart-black-shape.png' width="18px" height="18px"></img>Hide Cart</Link>
            </nav>
            {cart.map(item => <div>{item.name}</div>)}
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}