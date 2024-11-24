import React, { createContext, useState } from 'react'
export const DashBordCtx = createContext();

const DashbordContext = ({children}) => {


    const [products,setProducts] = useState([10]);

  return (
    <DashBordCtx.Provider value={{
            products,setProducts
        }}>
      {children}
    </DashBordCtx.Provider>
  )
}

export default DashbordContext
