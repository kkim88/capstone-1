import React, { useState, useEffect } from 'react';
import Search from './Components/Search'
import ShoppingCart from './Components/Cart'
import './App.css';
import { Link, Route } from 'react-router-dom';
import data from './Components/data.json';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log("Items in <App/>", items);
    console.log("cart in <App/>", cart);
  }, []);

  return (
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
