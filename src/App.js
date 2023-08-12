import React, {useState} from 'react';
import Header from './components/Header/Header';
import HeaderContextProvider from './components/Store/HeaderContext/HeaderContextProvider';
import BodyContextProvider from './components/Store/BodyContext/BodyContextProvider';

import CartItems from './components/Cart/CartItems';
import DisplayAddedProduct from './components/Body/DisplayAddedProduct';


function App() {
  const [showCart,setShowCart] = useState(false);
  const showCartFn =()=>{
    setShowCart(true)
  }
  const hideCartFn =()=>{
    setShowCart(false)
  }

  return (
  <HeaderContextProvider>
  <BodyContextProvider>

  {showCart && <CartItems hideCartFn={hideCartFn}/>}
  <Header showCartFn={showCartFn}/>
  <DisplayAddedProduct/>

  </BodyContextProvider>
  </HeaderContextProvider>
  );
}

export default App;
