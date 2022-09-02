import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "./ItemList";
import products from "../items"
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  const { idcategory, idproduct } = useParams(); 

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsArray = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    itemsArray
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("No se pudo cargar");
      })
      .finally((loading) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return <ItemList items={items} />;
  }
}
