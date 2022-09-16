import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink}   from 'react-router-dom'; 

function ItemCount({ stock, initial, onAdd, cant, setCant }) {
  const[showButton, setShowButton] = useState(false);
  
  return (
    <div className="item-div">
      <div className="item-qty">
        <Button style={{ fontSize: '2rem  ' }} variant="text" 
          onClick={() => {
            if (cant > initial) {
              setCant(cant - 1);
            }
          }}
        >
          -
        </Button>
        <p>{cant}</p>
        <Button style={{ fontSize: '2rem  ' }} variant="text"
          onClick={() => {
            if (cant < stock) {
              setCant(cant + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      {!showButton?<Button variant="outlined"
        onClick={() => {
          if (cant > 0) {
            onAdd(cant);
            setShowButton(true)
          }
        }}
        startIcon={<AddShoppingCartIcon />}
      >
          Agregar al Carrito
      </Button>:<Button
          component={RouterLink} to={`/cart`}
          variant="contained"
          >
          Ir al Carrito
        </Button>}
      
    </div>
  );
}

export default ItemCount;
