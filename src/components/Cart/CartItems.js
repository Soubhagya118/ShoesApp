import React,{useContext} from 'react';
import BodyContext from '../Store/BodyContext/BodyContext';
import classes from './CartItems.module.css';
import CartItemsList from './CartItemsList';

const CartItems = (props) => {
  const dataContext = useContext(BodyContext);

  return (
    <div className={classes.modal}>
    <div className={classes.cart}>
    CartItems
    <ul style={{listStyle:'none'}}>
      {dataContext?.items.map((e)=><CartItemsList key={e.id} {...e}/>)}
    </ul>
    <h2>Total Price:- {dataContext?.totalAmount} </h2>
    {dataContext?.items.length ? <button>Order</button>:''}
    <button onClick={props.hideCartFn}>cancel</button>

    </div>
    </div>
  )
}

export default CartItems
