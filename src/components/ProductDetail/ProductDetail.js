import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css';

function ProductDetail() {

  console.log('need the param');
  const params = useParams();
  console.log(params.id);

  //need state to store the info for this product
  const[selectedProduct, setSelectedProduct] = React.useState();

  //call api to get detail when the page loads
  React.useEffect( ()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => {
      console.log(res.data);
      //save this info to state
      setSelectedProduct(res.data);
    })
  }, [])

  return (
    <div>Product Detail</div>
  )
}

export default ProductDetail