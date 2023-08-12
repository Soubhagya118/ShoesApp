import React,{useRef, useContext} from 'react';
import BodyContext from '../Store/BodyContext/BodyContext';

import classes from './DisplayEachProduct.module.css'

const DisplayEachProduct = ({id,name,price,description,L,M,S}) => {
  const bodyContext = useContext(BodyContext);

  const l= useRef();
  const m=useRef();
  const s= useRef();

  const quantityAdd=(e)=>{
    e.preventDefault();
    const l1= l.current.value;
    const m1=m.current.value;
    const s1= s.current.value;
bodyContext.addItems({id:id,name:name,price:price,description:description,L:l1,M:m1,S:s1})
  }
  return (
    <li className={classes.eachList}>

    
     {name && <p>Name:-{name}&nbsp;&nbsp;  </p>}

      { price !=0 ?<p> Price:-{price} &nbsp;&nbsp;</p>:''}

      <form onSubmit={quantityAdd}>
        <p> L {L} :-</p>
        <input type='number' defaultValue={0} name='L' id='L' ref={l}/>

        <p>M {M} :-</p>
        <input type='number' defaultValue={0} name='M' id='M' ref={m} />

        <p>S {S} :-</p>
        <input type='number' defaultValue={0} name='S' id='S' ref={s}/>

       <button>Add</button>
      </form>
     
    </li>
  )
}

export default DisplayEachProduct
