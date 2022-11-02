//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';


function App() {

  //create state to store all products added to cart
  const [cartProducts, setCartProducts] = React.useState([]);

  // create function used by ProductDetail to add item to cart
  function addProductToCart (productToAdd) {
    console.log(productToAdd);
    //need to add this product to cart products
    setCartProducts([...cartProducts, productToAdd])      //three dots means to copy
  }


  //create function to remove from cart
  function removeFromCart(productToRemove){
    console.log(productToRemove);
    //remove this product from cartProducts
    //create a new array with everything except this one
    const newCartProducts = cartProducts.filter(item => item.id !== productToRemove.id)
    console.log(newCartProducts);
    //now make this the new state
    setCartProducts(newCartProducts);
  }
  /* const product1 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    };

    const product2 = {
      "id": 1,
      "title": "ravens",
      "price": 200,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      }
      };
      */

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path = '/products' element={<Homepage />} />
        <Route path = '/products/:id' element={<ProductDetail addProductToCart ={addProductToCart}/>} />
        <Route path = '/cart' element={<Cart cartProducts={cartProducts}  removeFromCart={removeFromCart}/>} />
        <Route path='*' element={<Navigate to='/products' replace />} />
      </Routes>
      {/*footer goes here*/}
      </BrowserRouter>
    
      
    
    </div>
  );
}



export default App;
