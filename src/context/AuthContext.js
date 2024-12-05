import React, { createContext, useContext, useEffect, useState } from 'react';
import { requestData } from '../utils/functions';
import toast from 'react-hot-toast';

export const AuthCtx = createContext();

const AuthContext = ({children}) => {

    const [user,setUser] = useState(false);


    const [loadingLogin,setLoadingLogin] = useState(false);


    const isLogin = async () => {
        setLoadingLogin(true);
        const res = await requestData('/user/checkLogin','GET','');
        // console.log(res);
        if(res?.status == 200){
            setUser(res?.data?.data);
            setLoadingLogin(false);

            return res?.data?.data
        } else {
            console.log('ts');
            
            // navigate('/login',{replace : true});
            toast.error(res?.data?.message);
            // setLoadingLogin(true);
            
            setUser(false);
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
        setUser,
        loadingLogin
    }}>
      {children}
    </AuthCtx.Provider>
  )
}

export default AuthContext
