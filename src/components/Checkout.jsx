import { Button, CircularProgress } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase/firebase';
import { useCart } from './CartContext'

export default function Checkout() {
  const {cart, cartTotal} = useCart()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [purchase, setPurchase] = useState(false)
  const [newOrder, setNewOrder] = useState('')
  const [procesing, setProcesing] = useState(false)

  function finishSale(){
    setProcesing(true)
    let date = new Date();
    let order = {
      buyer: {name: name, email: email, tel: tel},
      purchase: [{id:'cart.id', title:'cart.title', price:'cart.price'}],
      total: cartTotal(),
      date: date
    }
    const orderCollection = collection (db, 'orders')
    addDoc(orderCollection, order).then(({id})=>{
      setNewOrder(id);
      setPurchase(true)
    })

  }

  return(
      <div className='center'>
        <div className='outlined'>
          {!purchase
          ?<div>
            <h2>Completa tus datos personales</h2>
            <form action="" className='item-div'>
              <label htmlFor="name">Nombre y Apellido:</label>
              <input type="text" value={name} onChange={(e)=>setName(e)} name='name'/>
              <label htmlFor="tel">Telefono:</label>
              <input type="text" value={tel} onChange={(e)=>setTel(e)} name='tel'/>
              <label htmlFor="email">E-mail:</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e)} name='email'/>
              {!procesing
              ?<Button style={{ fontSize: '1rem' }} variant="contained" color="success" onClick={finishSale} >Ir a pagar</Button>
              :<CircularProgress />
              }
            </form>
          </div>
          :<div className='item-div'>
            <h2>Muchas Gracias!</h2>
            <p>Tu N de compra es {newOrder}</p>
          </div>
          }
          
        </div>
      </div>
    )
}

