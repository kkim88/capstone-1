import React, { useState, useEffect } from 'react';
import Search from './Components/Search'
import ShoppingCart from './Components/Cart'
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {

  // initialize cart

  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("cart in <App/>", cart);
  }, []);

  return (

    // contains header, which contains navigation, route links, render search component

    <div className="App">
      <header>
        <h1>Odds and Ends and Miscellaney</h1>
        <nav>
          <Link to="/cart"><img src='/shopping-cart-black-shape.png' width="18px" height="18px"></img>Show Cart</Link>
        </nav>
      </header>
      <Route exact path="/search" >
        <Search cart={cart} setCart={setCart} />
      </Route>
      <Route exact path="/cart">
        <ShoppingCart cart={cart} setCart={setCart} />
      </Route>
      <p></p>
      <Search />
    </div>
  );
}



export default App;
