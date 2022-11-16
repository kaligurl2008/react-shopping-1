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

  //create state for search value to send to Homepage
  const [productSearchValue, setProductSearchValue] = React.useState("");

  // create function used by ProductDetail to add item to cart
  function addProductToCart (productToAdd) {
    console.log(productToAdd);
    let newCart = [];
    //if productToAdd is NOT in car, add with a qty of 1
    //else increment qty of object already in the cart

    //look for this product in cartProducts using find
    const match = cartProducts.find(prod => prod.id === productToAdd.id)
    console.log('match', match);
    //if not there match will be undefined which is "falsy"
    if(!match){
      console.log('first buy');
      //add to cartProducts with a qty of 1
      //keep everything already in state
      newCart = [...cartProducts, {...productToAdd, quantity: 1}];
      console.log('new cart', newCart);
      //replace state with this new cart
      setCartProducts(newCart);



    }
    else{
      console.log('increase qty');
      updateCartQuantity(match, true);
    }
    //need to add this product to cart products
    //spread operator
    //setCartProducts([...cartProducts, productToAdd])      //three dots means to copy
  }

  //function to increase or decrease qty of a product
  function updateCartQuantity(productToChange, increase){
    let newqty = productToChange.quantity;
    if (increase){
      newqty++;
    }
    else{
      newqty--;
    }
    //create a new cart with this new qty
    let newCart = cartProducts.map(prod => prod.id === productToChange.id ? 
      {...productToChange, quantity: newqty} 
      : prod )
      //replace the state
      setCartProducts(newCart)
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

  function handleProductSearch(searchInput){
    console.log("in app ", searchInput);
    //set the state
    setProductSearchValue(searchInput);
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
      <Navbar handleProductSearch={handleProductSearch} />
      <Routes>
        <Route exact path = '/products' element={<Homepage 
                                          productSearchValue={productSearchValue} />} />
        <Route path = '/products/:id' element={<ProductDetail addProductToCart ={addProductToCart}/>} />
        <Route path = '/cart' element={<Cart cartProducts={cartProducts}  
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}/>} />
        <Route path='*' element={<Navigate to='/products' replace />} />
      </Routes>
      {/*footer goes here*/}
      </BrowserRouter>
    
      
    
    </div>
  );
}



export default App;
