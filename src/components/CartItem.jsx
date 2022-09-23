import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import { Divider } from '@mui/material';

function CartItem({item}) {

    const {removeItem} = useCart();
  return (
    <div className='center'>
    <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 6 }} alignItems="center" justifyContent="space-between"  divider={<Divider orientation="vertical" flexItem />}>
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