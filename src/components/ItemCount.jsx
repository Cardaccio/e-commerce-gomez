import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ItemCount({ stock, initial, onAdd }) {
  const [cant, setCant] = useState(initial);
  return (
    <div className="item-div">
      <div className="item-qty">
        <Button style={{ fontSize: '2rem  ' }} variant="text" 
          onClick={() => {
            if (cant > 0) {
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
      <Button variant="outlined"
        onClick={() => {
          if (cant > 0) {
            onAdd(cant);
          }
        }}
      >
        <AddShoppingCartIcon />  Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
