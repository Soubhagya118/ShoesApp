import React, {useState} from 'react';
import Header from './components/Header/Header';
import HeaderContextProvider from './components/Store/HeaderContext/HeaderContextProvider';
import './App.css';
import CartItems from './components/Cart/CartItems';

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
  {showCart && <CartItems hideCartFn={hideCartFn}/>}
  <Header showCartFn={showCartFn}/>
  </HeaderContextProvider>
  );
}

export default App;
