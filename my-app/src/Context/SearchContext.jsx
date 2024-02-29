import React, { createContext, useContext, useState } from 'react'

const Searchcontext=createContext();
function SearchContext({children}) {
    const [auth,setAuth] = useState({
        keyword: "",
        results:[],
    })
  return (
    <div>
      <Searchcontext.Provider value={[auth,setAuth]}>
      {children}
      </Searchcontext.Provider>
    </div>
  )
}
//custom hook
const useSearch =()=>useContext(Searchcontext);
export default {SearchContext,useSearch}
