import React, { useState, useEffect } from 'react';
import Search from './Components/Search'
import ShoppingCart from './Components/Cart'
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {

  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <img src='/shopping-cart-black-shape.png' width="100px" height="100px"></img>
      <h1>Let's Shop With React</h1>
      <nav>
        <Link to="/cart">Show Cart</Link>
      </nav>
      <Route path="/cart">
        <ShoppingCart />
      </Route>
      <p></p>
      <Search />
    </div>
  );
}



export default App;
