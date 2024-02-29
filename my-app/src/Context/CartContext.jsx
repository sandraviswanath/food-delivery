import React, { createContext, useContext, useState } from 'react'

const Cartcontext=createContext();
function CartContext({children}) {
    const [cart,setCart] = useState({
        keyword: "",
        results:[],
    })
  return (
    <div>
      <div>
      <Cartcontext.Provider value={[cart,setCart]}>
        {children}
      </Cartcontext.Provider>
    </div>
    </div>
  )
}
const useCart =()=> useContext(Cartcontext);
export default {CartContext,useCart}
