import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="center">
      {items.map((producto) => {
        return <Item producto={producto} />;
      })}
    </section>
  );
};
export default ItemList;
