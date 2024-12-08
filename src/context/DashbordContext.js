import React, { createContext, useState } from 'react'
import { requestData } from '../utils/functions';
export const DashbordContext = createContext();

const DashbordPrivider = ({children}) => {


    const [products,setProducts] = useState([10]);


    const getProductByMtId = async (mtId) => {
      // Get products by merchantid
      const res = await requestData('/product/getByMerchantId','POST',{merchantId : mtId});
      console.log(res);
      if(res?.status == 200){
          // setUser(res?.data?.data);
          // return res?.data?.data
      } else {
          // navigate('/login',{replace : true});
          // toast.error(res?.data?.message);
          
          // setUser({userName : ''})
          return false
      }
    }


// /product/addsingleproduct

// Method:POST
// Params:title-category-price-slug-description-image

// First Login!

const addSingleProduct = async (dataRequest) => {
    // Add Single Product
    const data = {
      'title' : '',
      'category' : '',
      'price' : '',
      'slug' : '',
      'description' : '',
      'image' : ''

    }
  const res = await requestData('/product/addsingleproduct','POST',data);
  console.log(res);
  if(res?.status == 200){
      // setUser(res?.data?.data);
      // return res?.data?.data
  } else {
      // navigate('/login',{replace : true});
      // toast.error(res?.data?.message);
      
      // setUser({userName : ''})
      return false
  }
}

  return (
    <DashbordContext.Provider value={{
            products,setProducts,
            getProductByMtId,
            addSingleProduct
        }}>
      {children}
    </DashbordContext.Provider>
  )
}

export default DashbordPrivider
