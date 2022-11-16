import React from 'react'
import './Cart.css'

function Cart(props) {
  //make a function to calculate total of cart
  const cartTotal = () => {
    let total = 0;
    for (let i=0; i < props.cartProducts.length; i++){
      total += (props.cartProducts[i].quantity * props.cartProducts[i].price);
    }


    /*
    let total = props.cartProducts.reduce(
      (sum, curprod) => sum += (curprod.quantity * curprod.price), 0

    )
    */
    console.log(total);
    return total;
  }



  return (
    <div>
      <h1>Cart</h1>
      {
        props.cartProducts.map(item => (
          <div key={item.id}>

            <img className = 'cart-img' src = {item.image} alt = {item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick = {() =>props.removeFromCart(item)}>Remove From Cart</button>
            <p onClick = {() =>props.updateCartQuantity(item, true)}>+</p>
            <p>Quantity: {item.quantity}</p>
            { item.quantity >= 2 && <p onClick = {() =>props.updateCartQuantity(item, false)}>-</p>}
          </div>
        )

        )
      }
      {props.cartProducts.length > 0 && <h3>TOTAL: ${cartTotal().toFixed(2)}</h3>}
    </div>
  )
}

export default Cart