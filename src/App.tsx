import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import ProductList from './ProductList';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </>
  );
}

export default App;
