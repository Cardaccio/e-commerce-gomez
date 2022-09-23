import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "react-toastify/dist/ReactToastify.css";
import { Link as RouterLink}   from 'react-router-dom'; 
import Button from '@mui/material/Button';

function Item({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <RouterLink to={`/product/${product.id}`}>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.pictureUrl}
      />
      </RouterLink>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
          {product.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={'center'}>
          $ {product.price}
        </Typography>
      </CardContent>
 
      <CardActions className='center'>
        <Button component={RouterLink} to={`/product/${product.id}`}
        style={{ fontSize: '1rem' }} variant="text">Ver mas</Button>
      </CardActions>
    </Card>

  )
}

export default Item

