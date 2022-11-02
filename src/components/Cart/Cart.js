import React from 'react'

function Cart(props) {
  return (
    <div>
      <h1>Cart</h1>
      {
        props.cartProducts.map(item => (
          <div key={item.id}>

            <img src = {item.image} alt = {item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick = {() =>props.removeFromCart(item)}>Remove From Cart</button>
          
          </div>
        )

        )
      }
    </div>
  )
}

export default Cart