import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ItemDetailContainer() {
  const { idproduct } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const productsCollection = collection(db, 'products')
    
    const docReference = doc(productsCollection, idproduct)

    getDoc(docReference)
    .then((result)=>{
      setItem({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[])

return(
  <div>
  {loading ? <CircularProgress/> : <ItemDetail item={item} />}
  </div>
)
}
