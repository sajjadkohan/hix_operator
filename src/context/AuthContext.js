import React, { createContext, useEffect, useState } from 'react';
import { requestData } from '../utils/functions';
import toast from 'react-hot-toast';

export const AuthCtx = createContext();

const AuthContext = ({children}) => {

    const [user,setUser] = useState(false);



    const isLogin = async () => {
        const res = await requestData('/user/checkLogin','GET','');
        // console.log(res);
        if(res?.status == 200){
            setUser(res?.data?.data);
            return res?.data?.data
        } else {
            // navigate('/login',{replace : true});
            toast.error(res?.data?.message);
            
            setUser({userName : ''})
            return false
        }
    }

    const logout = async () => {
        const res = await requestData('/user/logout','GET','');
        console.log(res);
        if(res.status == 200){
            setUser(false);
            return !!res.data.data
        } else {
            // navigate('/login',{replace : true});
            return false
        }
    }

    useEffect(() => {
        const hasLogin = async () => {
         return await isLogin();
        };
        hasLogin();
      },[]);



  return (
    <AuthCtx.Provider value={{
        isLogin,
        user,
        logout,
        setUser
    }}>
      {children}
    </AuthCtx.Provider>
  )
}

export default AuthContext
