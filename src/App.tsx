import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import ProductList from './ProductList';
import { CartProvider } from "./context/cartContext";

export default function App() {

  document.title = "Shop"
  return (
    <CartProvider>
      <Navbar />
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

