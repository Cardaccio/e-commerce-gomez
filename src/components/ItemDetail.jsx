import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from './ItemCount';

export default function ItemDetail({item}) {

    const onAdd = (cant) =>
    toast.success(`Agregaste al carrito ${cant} 👌`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className='prod-div'>
        <img src={item.pictureUrl} alt={item.title} className="prod-img"/>
        <div>
        <h2>{item.title}</h2>
        <h4>${item.price}</h4>
        <p>{item.detail}</p>
        <ItemCount stock={item.stock}
        initial={item.initial}
        onAdd={onAdd}/>
        </div>
        </div>
      </Container>
    </React.Fragment>
  )
}
