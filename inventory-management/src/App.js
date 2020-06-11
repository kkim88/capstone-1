import React, { useState, useEffect } from 'react';
import Search from './Components/Search'
import ShoppingCart from './Components/Cart'
import './App.css';
import { Link, Route } from 'react-router-dom';
import data from './Components/data.json';

function App() {

  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  useEffect(() => {
    console.log("Items in <App/>", items);
    console.log("cart in <App/>", cart);
  }, []);

  return (
    <div className="App">
      <img src='/shopping-cart-black-shape.png' width="100px" height="100px"></img>
      <h1>Let's Shop With React</h1>
      <nav>
        <Link to="/cart">Show Cart</Link>
        <Link to="/search" />
      </nav>
      <Route exact path="/search">
        <Search cart={cart} setCart={setCart} items={items} setItems={setItems} />
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
