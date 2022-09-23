import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Banner from "./Banner";

export default function ItemListContainer() {
  const { idcategory } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //Firebase
  useEffect(() => {
    const products = idcategory
      ? query(collection(db, "products"), where("idcategory", "==", idcategory))
      : collection(db, "products");
    getDocs(products)
      .then((result) => {
        const list = result.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setItems(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idcategory]);

  return (
    <div className="center full-div">
      <Banner/>
      {loading ? <CircularProgress /> : <ItemList items={items} />}
    </div>
  );
}
