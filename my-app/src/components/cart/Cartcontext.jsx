import React, { createContext } from 'react'

export const cartcontext=createContext()
function Cartcontext() {
    const [quantity, setquantity] = useState(second)
    const [total, setTotal] = useState(0)
  return (
    <div>
      <cartcontext.Provider value={{total,setTotal}}>

      </cartcontext.Provider>
    </div>
  )
}

export default Cartcontext
