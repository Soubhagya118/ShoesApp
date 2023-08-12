import React from 'react'

const DisplayEachProduct = ({name,price,description,L,M,S}) => {
  return (
    <li>
      <p>{name}</p><p>{price}</p>
    </li>
  )
}

export default DisplayEachProduct
