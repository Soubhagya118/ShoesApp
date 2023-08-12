import React from 'react';
import classes from './CartItems.module.css';

const CartItems = (props) => {
  return (
    <div className={classes.modal}>
    <div className={classes.cart}>
    CartItems<button onClick={props.hideCartFn}>close</button>

    </div>
    </div>
  )
}

export default CartItems
