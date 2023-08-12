import React,{useReducer} from 'react';
import BodyContext from './BodyContext';

const defaultValue={
  items:[],
  totalAmount:0
}

const reducerFn=(state,action)=>{
  if(action.type=='add'){
    const actionItemPrice =+action.item.price;

    let actionTotalPrice;
    let quanL;
    let quanM;
    let quanS;
    if(action.item.L !=0){
       quanL = +action.item.L;
       actionTotalPrice= quanL * actionItemPrice;
    }
    if(action.item.M !=0){
      quanM = +action.item.M;
      actionTotalPrice= quanM * actionItemPrice;
   }
   if(action.item.S !=0){
    quanS = +action.item.S;
    actionTotalPrice= quanS * actionItemPrice;

 }
  

    const updatedTotalAmount= state.totalAmount+actionTotalPrice;
    let updatedItems ;

    const currentIndex = state.items.filter((e)=>e.id==action.item.id);
    const currentItem = state.items[currentIndex];

     updatedItems = state.items.concat(action.item);
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount

    }

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
