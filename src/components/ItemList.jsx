import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="center full-div">
      {items.map((product) => {
        return( 

            <Item product={product} key={product.id} />

            )})}
    </section>
  );
};
export default ItemList;
