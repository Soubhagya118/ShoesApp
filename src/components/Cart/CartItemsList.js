import React from 'react'

const CartItemsList = ({name,L,M,S,}) => {
  return (
    <li>
      <span><b>{name} </b>&nbsp;
     {(L>0) &&`L:- ${L}`}
     {(M>0) &&`M:- ${M}`}
      {(S>0) &&`S:- ${S}`}
      </span>
    </li>
  )
}

export default CartItemsList
