import { Button, CircularProgress } from '@mui/material';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase/firebase';
import { useCart } from './CartContext'
import { Link as RouterLink}   from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const {cart, cartTotal, clearCart} = useCart()
  const [buyer, setBuyer] = useState('');
  const [purchase, setPurchase] = useState(false)
  const [newOrder, setNewOrder] = useState('')
  const [procesing, setProcesing] = useState(false)

  const buyerData = (e)=>{
    setBuyer({
      ...buyer,
      [e.target.name]:e.target.value,
    })
  }


  function finishSale(e){
    e.preventDefault()
    if(Object.values(buyer).length !== 3){
      toast.error(`Te falta completar los datos`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }else{
      setProcesing(true)
      let order = {
        buyer: {buyer},
        items: cart,
        total: cartTotal(),
        date: serverTimestamp()
      }
      const orderCollection = collection (db, 'orders')
      addDoc(orderCollection, order).then((res)=>{
        setNewOrder(res.id);
        setPurchase(true);
        clearCart()
        localStorage.clear()
      })
      .catch((err)=>console.log(err) )
  
    }

  };

  return(
      <div className='center'>
        <div className='outlined'>
          {!purchase
          ?<div>
            <h2>Completa tus datos personales</h2>
            <form onSubmit={finishSale} className='item-div'>
              <label htmlFor="name">Nombre y Apellido:</label>
              <input type="text" onChange={buyerData} name='name' placeholder='Juan Gomez'/>
              <label htmlFor="tel">Telefono:</label>
              <input type="number" onChange={buyerData} name='tel' placeholder='0115555555'/>
              <label htmlFor="email">E-mail:</label>
              <input type="email" onChange={buyerData} name='email' placeholder='juan@gmail.com'/>
              {!procesing
              ?<Button style={{ fontSize: '1rem' }} variant="contained" color="success" type='submit'>Ir a pagar</Button>
              :<CircularProgress />
              }
            </form>
          </div>
          :<div className='item-div'>
            <h2>Muchas Gracias!</h2>
            <p>Tu N de compra es {newOrder}</p>
            <Button style={{ fontSize: '1rem' }} variant="contained" color="primary" type='submit' component={RouterLink} to={`/`}>Volver</Button>
          </div>
          }
          
        </div>
      </div>
    )
}

