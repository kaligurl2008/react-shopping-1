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
    <div className='product-card'>
      <img src={selectedProduct?.image} alt={selectedProduct?.title} />
      <div className='detail-txt'>
        <h3>{selectedProduct?.title}</h3>
        <h3>$ {selectedProduct?.price}</h3>
        <h4>Description</h4>
        <p>{selectedProduct?.description}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail