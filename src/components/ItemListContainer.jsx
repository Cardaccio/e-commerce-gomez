import React from 'react'

export default function ItemListContainer(props) {
  const {greeting} = props;
    return (
    <div>
        <h1 className='mainTitle'>{greeting}</h1>
    </div>
  )
}
