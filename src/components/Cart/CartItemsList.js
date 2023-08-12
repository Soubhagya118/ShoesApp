import React from 'react'

const CartItemsList = ({name,L,M,S,}) => {
  return (
    <li>
      <span><b>{name} </b>&nbsp;
     {(L>0) &&L}
     {(M>0) &&M}
      {(S>0) &&S}
      </span>
    </li>
  )
}

export default CartItemsList
