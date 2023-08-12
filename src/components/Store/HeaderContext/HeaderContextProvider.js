
import React,{useState} from 'react';
import HeaderContext from "./HeaderContext";


const HeaderContextProvider = ({children}) => {
const [data,setData] = useState([]);

const addData=(newData)=>{
  setData([...data,newData]);

}

  return (
    <HeaderContext.Provider value={{data,addData}}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider
