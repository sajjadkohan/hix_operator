import toast from "react-hot-toast";
import { BASE_URL } from "./constanst";

const requestData = async(api,method,data) => {
    try {
        let res = null;
        method !== 'GET'? 
        res = await fetch(`${BASE_URL}${api}`,{
        method:method?method:'POST',
        // mode: "cors",
        // cache: "no-cache",
        credentials: "include",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      }) 
      :
      res = await fetch(`${BASE_URL}${api}`,{
        method:method?method:'POST',
        // mode: "cors",
        // cache: "no-cache",
        credentials: "include",
        headers:{'Content-Type':'application/json'},
      });
      
      
      return  {
        data :await res.json(),
        status : res.status
      }
    } catch (error) {
      console.log(error);
      toast.error('لطفا اتصال اینترنت خود را بررسی کنید')
      
    }


  }

  export{
    requestData
  }