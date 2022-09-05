import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "../items";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { idproduct } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    if (!idproduct) {
      getItem
        .then((res) => {
          setItem(res);
        })
        .catch((err) => {
          console.log("No se pudo cargar");
        })
        .finally((loading) => {
          setLoading(false);
        });
    } else {
      getItem
        .then((res) => {
          setItem(res.find((item)=> item.id === `${idproduct}`));
          
        })
        .catch((err) => {
          console.log("No se pudo cargar");
        })
        .finally((loading) => {
          setLoading(false);
        });
    }
  }, [idproduct]);
return(
  <div>
  {loading ? <CircularProgress/> : <ItemDetail item={item} />}
  </div>
)
}
