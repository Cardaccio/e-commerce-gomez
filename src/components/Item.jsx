import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({product}) {
  //const image = require(`../assets/img/${producto.pictureUrl}`).default;
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={product.stock}
        initial={product.initial}
        onAdd={onAdd}/>
      </CardActions>
    </Card>

  )
}

export default Item

