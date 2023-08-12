import React,{useReducer} from 'react';
import BodyContext from './BodyContext';

const defaultValue={
  items:[],
  totalAmount:0
}

const reducerFn=(state,action)=>{
  if(action.type=='add'){
    

  }

  return defaultValue;
}

const BodyContextProvider = ({children}) => {
  const [cartState,dispatcherCartFn] = useReducer(reducerFn,defaultValue);
  const addItemsFn=(item)=>{
    dispatcherCartFn({type:'add', item:item});
  }

const cartItems={
  items:cartState.items,
  totalAmount:cartState.totalAmount,
  addItems:addItemsFn
}

  return (
    <BodyContext.Provider value={cartItems}>
      {children}
    </BodyContext.Provider>
  )
}

export default BodyContextProvider
