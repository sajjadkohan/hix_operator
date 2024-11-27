import React, { createContext, useContext, useState } from 'react'
import { requestData } from '../utils/functions';
import { ViewCtx } from './ViewContext';
import toast from 'react-hot-toast';
export const PlanCtx = createContext();

const PlanContext = ({children}) => {

  const [plansState,setPlansState] = useState(false);

  const {loading,setLoading} = useContext(ViewCtx);

    const getPlans = async () => {
      setLoading({...loading,plans : true});
      const res = await requestData('/plan/get','GET');
      console.log(res);
      if(res.status == 200) {
        let dataArr = await res.data.data;

        console.log(res.data.data);
        dataArr = [dataArr[0],dataArr[2],dataArr[1]];
        
        setPlansState(await dataArr)
      }else {
        setPlansState(false);
        toast.error(res.data.message)
      }
      setLoading({...loading,plans : false});

      
    };

    const setFreePlan = async (id) => {
      const data = {
        'id' : id
      }
      setLoading({...loading,setPlans : id});
      const res = await requestData('/user/setPlan','POST',data);
      console.log(res);
      if(res.status == 200) {
        toast.success(res.data.message)

      }else {
        toast.error(res.data.message)
      }
      setLoading({...loading,setPlans : false});

      
    };



  return (
    <PlanCtx.Provider value={{
            getPlans,plansState,
            setFreePlan
        }}>
      {children}
    </PlanCtx.Provider>
  )
}

export default PlanContext
