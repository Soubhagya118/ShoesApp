import React,{useContext, useState} from 'react';
import HeaderContext from '../Store/HeaderContext/HeaderContext';
import classes from './DisplayAddedProduct.module.css'
import DisplayEachProduct from './DisplayEachProduct';

const DisplayAddedProduct = () => {
    const dataContext = useContext(HeaderContext);
    console.log("display",dataContext)
  return (
    <div className={classes.product}>
    <ul className={classes.list}>
    {dataContext?.data.map((e)=><DisplayEachProduct key={e.id} {...e}></DisplayEachProduct>)}

    </ul>
    </div>
  )
}

export default DisplayAddedProduct
