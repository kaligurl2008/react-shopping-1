//import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';

function App() {

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
      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route path = '/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    
      
    
    </div>
  );
}



export default App;
