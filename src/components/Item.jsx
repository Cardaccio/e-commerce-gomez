import React from 'react'

function Item({producto}) {
  return (
    <div>
        <img src={producto.pictureUrl} alt={producto.title} />
        <p>{producto.id}</p>
        <h3>{producto.title}</h3>
        <h4>{producto.price}</h4>
    </div>
  )
}

export default Item