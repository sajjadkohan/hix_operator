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

const checkTime = () => {

} 

const groupMessageByTime = (messages) => {
  // console.log(messages)
  let finallMessage = [];
  let year;
  let month;
  let day;

  messages.forEach(element => {
    if(element.fullTime.year != year || element.fullTime.month != month || element.fullTime.day != day){
      year = element.fullTime.year;
      day = element.fullTime.day;
      month = element.fullTime.month;
      finallMessage.push({
        type:"time",
        fullTime:element.fullTime
      })
    }
    finallMessage.push(element)
  });
  return finallMessage;
  // console.log(finallMessage)
}


  export{
    requestData,groupMessageByTime
  }