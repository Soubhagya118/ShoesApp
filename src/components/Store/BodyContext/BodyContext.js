import { createContext } from "react";

const BodyContext = createContext({
    items:[],
    totalAmount:0,
    addItems:()=>{}
})

export default BodyContext;