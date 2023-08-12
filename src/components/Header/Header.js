import React,{useRef, useContext} from 'react';
import HeaderContext from '../Store/HeaderContext/HeaderContext';
import BodyContext from '../Store/BodyContext/BodyContext';
import classes from './Header.module.css'

const Header = (props) => {
    const dataContext = useContext(HeaderContext);
    const bodyLength = useContext(BodyContext);
console.log("bodylength",bodyLength);
    const cartCount = bodyLength.items.reduce((a,c)=>{return a+((+c.L)+(+c.M)+(+c.S))},0)
    const name = useRef();
    const description=useRef();
    const price = useRef();

    const large =useRef();
    const medium= useRef();
    const small = useRef();

    const headerInputFn=(e)=>{
e.preventDefault();

        const name1=name.current.value;
        const des= description.current.value;
        
        const price1=price.current.value;
        const priceInNumber= +price1;

        const l= large.current.value;
        const m= medium.current.value;
        const s= small.current.value;
        dataContext.addData({id:Math.random(),name:name1,description:des,price:priceInNumber, L:l,M:m,S:s})
        

    }
  return (
    <div className={classes.header}>
    <form className={classes.form} onSubmit={headerInputFn}>
        <label>Shoe Name:- </label>
        <input type='text'  id='name' ref={name}/>
        <label>Description:- </label>
        <input type='text'  id='description' ref={description}/>
        <label>Price:- </label>
        <input type='number'  id='price' ref={price}/>

        <label>L:- </label>
        <input type='number'  id='large' ref={large} />
        <label>M:- </label>
        <input type='number'  id='medium' ref={medium} />
        <label>S:- </label>
        <input type='number'  id='small' ref={small} />

<button>Add Product</button>
    </form>
      


      <button onClick={props.showCartFn}>Cart {cartCount}</button>
    </div>
  )
}

export default Header
