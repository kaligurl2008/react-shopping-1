import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css';



function Product(props) {
  return (
     <Link to={`/products/${props.id}`}>
    <div className='prod-card'>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <img className= "product-img" src={props.image} alt={props.title}></img>
    </div>
     </Link>
  )
}

export default Product