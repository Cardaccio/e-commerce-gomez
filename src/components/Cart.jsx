import React from 'react'
import { useCart } from './CartContext'

function Cart() {
  const {cart} = useCart()

  return (
    <div className='center'>
      <div className='outlined'>
        <h2>Tu Carrito</h2>
        <p>{JSON.stringify(cart)}</p>
      </div>
    </div>
  )
}

export default Cart