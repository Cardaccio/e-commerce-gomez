import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';

function CartItem({item}) {

    const {removeItem} = useCart();
  return (
    <div className='center'>
    <Stack direction="row" spacing={6} alignItems="center" justifyContent="space-between">
        <img src={item.pictureUrl} alt={item.title} className="thumb-img"/>
        <span>{item.title}</span>
        <span>{item.quantity}</span>
        <span>${item.price}</span>
        <IconButton aria-label="delete" onClick={()=>removeItem(item.id)}>
            <DeleteIcon fontSize="small" color="secondary" />
        </IconButton>
    </Stack>
    </div>
  )
}

export default CartItem