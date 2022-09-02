import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import products from '../items';
import { CircularProgress } from '@mui/material';

export default function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getItem = new Promise ( (res,rej)=>{
            setTimeout(()=>{
                res(products[0])
            }, 2000)
        });
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
    }, []);

    if (loading) {
        return <CircularProgress />
      } else {
        return <ItemDetail item={item} />;
      }
    }
