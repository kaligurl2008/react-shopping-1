import axios from 'axios';
import React from 'react'
import Product from '../Product/Product';
import './Homepage.css';

function Homepage() {

    const [products, setProducts] = React.useState([]);
    //create function to get to the products
    const fetchProducts = () => {

        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response.data)
                //put this data into products
                setProducts(response.data)
            });

        console.log("fetch");
    }
    React.useEffect(
        ()=>{
            console.log("page loaded");
            fetchProducts()
        }, []
    )

  return (
    <div>
        <button onClick={fetchProducts}>Fetch Products</button>
        <div className = "prod-container">
            {
            products.map (item => {
                return <Product key = {item.id}
                            title = {item.title}
                            price = {item.price}
                            cateogry = {item.cateogry}
                            image = {item.image}
                        />
            })
            }
        </div>
    </div>
  )
}

export default Homepage