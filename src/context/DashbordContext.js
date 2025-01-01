import React, { createContext, useState } from 'react'
import { requestData } from '../utils/functions';
import toast from 'react-hot-toast';
export const DashbordContext = createContext();

const DashbordPrivider = ({children}) => {


    const [products,setProducts] = useState(false);
    const [reloadList,setReloadList] = useState(false);
    const [questionList,setQuestionsList] = useState(false);


    const getProductByMtId = async (mtId) => {
      // Get products by merchantid
      const res = await requestData('/product/getByMerchantId','POST',{merchantId : mtId});
      console.log(res);
      res?.data?.data&&setProducts(res?.data?.data);
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
  const res = await requestData('/product/addsingleproduct','POST',dataRequest);
  console.log(res);
  toast.success(res?.data?.message);
  res?.data?.success&&setReloadList(!reloadList);
  if(res?.status == 200){
      // setUser(res?.data?.data);
      // return res?.data?.data
  } else {
      // navigate('/login',{replace : true});
      // toast.error(res?.data?.message);
      
      // setUser({userName : ''})
      return false
  }
};

const addQuestions = async (dataRequest) => {
  //const dataRequest = { question : '' , answer : '' }

  const res = await requestData('/questions/add','POST',dataRequest);
  console.log(res);
  res?.data?.success&&setReloadList(!reloadList);
  
  // const res = await fetch('/questions/add',{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({ question : '' , answer : '' })
// })
};

const getQuestions = async (dataRequest) => {

  const res = await requestData('/questions/get','GET');
  console.log(res);
  if(res?.status == 200){
    setQuestionsList(res.data.data);
  }

};




  return (
    <DashbordContext.Provider value={{
            products,setProducts,
            getProductByMtId,
            addSingleProduct,
            reloadList,
            addQuestions,getQuestions,questionList
        }}>
      {children}
    </DashbordContext.Provider>
  )
}

export default DashbordPrivider
