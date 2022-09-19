import React from 'react'
import { useCart } from './CartContext'
import { Link as RouterLink}   from 'react-router-dom'; 
import Button from '@mui/material/Button';
import CartItem from './CartItem';


function Cart() {
  const {cart, cartTotal, clearCart} = useCart()
  console.log(cart)
  return (
    <div className='center'>
      <div className='outlined'>
        <h2>Tu Carrito</h2>
        {
        !cart.length
        ?<div className='item-div'><h3>Tu carrito esta vacio</h3><Button component={RouterLink} to={`/`}style={{ fontSize: '1rem' }} variant="contained">Ir a la tienda</Button></div> 
        :<div className='item-div'>
          {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
          <h3>Total: $ {cartTotal()}</h3>
          <div className='center'>
            <Button style={{ fontSize: '0.8rem' }} variant="text" onClick={clearCart}>Vaciar carrito</Button>
            <Button style={{ fontSize: '1rem' }} variant="contained" color="success">Ir a Pagar</Button>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Cart