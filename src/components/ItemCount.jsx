import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { Stack } from "@mui/system";

function ItemCount({ stock, initial, onAdd, cant, setCant }) {
  const [showButton, setShowButton] = useState(false);


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
      {!showButton
        ? <Button variant="outlined"
          onClick={() => {
            if (cant > 0) {
              onAdd(cant);
              setShowButton(true)
            }
          }}
          startIcon={<AddShoppingCartIcon />}
        >
          Agregar al Carrito
        </Button>
        : <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink} to={`/`}
            variant="text"
            color="secondary"
          >
            Seguir comprando
          </Button>
          <Button
            component={RouterLink} to={`/cart`}
            variant="contained"
          >
            Ir al Carrito
          </Button>
        </Stack>
      }

    </div>
  );
}

export default ItemCount;
