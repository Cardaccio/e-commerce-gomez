import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemList from "./ItemList";

const productosIniciales = [
  {
    id: 1,
    title: "Medalla Galaxy",
    price: 1490,
    pictureUrl: "assests/img/galaxy.jpg",
  },
  {
    id: 2,
    title: "Medalla Black Bone",
    price: 1490,
    pictureUrl: "assests/img/black-bone.jpg",
  },
  {
    id: 3,
    title: "Medalla Cute Girl",
    price: 1490,
    pictureUrl: "assests/img/cool-girl.jpg",
  },
  {
    id: 4,
    title: "Medalla Navy Paw",
    price: 1490,
    pictureUrl: "assests/img/navy-paw.jpg",
  },
];

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    productos
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
    return <ItemList productos={items} />;
  }
}
