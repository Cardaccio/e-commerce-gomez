import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ItemListContainer() {
  const { idcategory} = useParams(); 

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //Firebase
  useEffect(()=>{
    const products = idcategory?query(collection(db, 'products'), where('idcategory','==',idcategory)) :collection(db, 'products')
    getDocs(products)
    .then((result)=>{
    const list = result.docs.map((item)=>{
      return{
        id:item.id,
        ...item.data()
      }
    })
    setItems(list)  
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[idcategory]);

  //mock
  /*
  useEffect(() => {
    const itemsArray = new Promise((res, rej) => {
      setTimeout(() => { console.log(result
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
*/
  if (loading) {
    return <div className="center full-div">
              <CircularProgress />
           </div>;
  } else {
    return <>
    <ItemList items={items} />;
    </>
  }
}
