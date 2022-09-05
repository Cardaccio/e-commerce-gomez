import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "./ItemList";
import products from "../items"
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  const { idcategory} = useParams(); 

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsArray = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    if(!idcategory){
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
    }else{
      itemsArray
      .then((res) => {
        
        setItems(res.filter((product)=>product.idcategory === idcategory));
      })
      .catch((err) => {
        console.log("No se pudo cargar");
      })
      .finally((loading) => {
        setLoading(false);
      });
    }

  }, [idcategory]);

  if (loading) {
    return <div className="center full-div"><CircularProgress /></div>;
  } else {
    return <ItemList items={items} />;
  }
}
