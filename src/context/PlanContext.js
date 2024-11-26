import React, { createContext, useState } from 'react'
export const PlanCtx = createContext();

const PlanContext = ({children}) => {


    const [products,setProducts] = useState([10]);

  return (
    <PlanCtx.Provider value={{
            products,setProducts
        }}>
      {children}
    </PlanCtx.Provider>
  )
}

export default PlanContext
