import React, { useEffect } from 'react'
import styles from './Login.module.css';
import LoginComponent from './LoginComponent/LoginComponent';
import Grid from '@mui/material/Grid2';
import { ViewCtx } from '../../context/ViewContext';
import { AuthCtx } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginLayout = () => {

  const {hasLogin} = React.useContext(ViewCtx);
  const {user} = React.useContext(AuthCtx);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    user?.userName&&navigate('/dashbord',{replace : true})
    
  },[user]);

  return (
    <div className={styles.loginLayout}>
      <Grid item='true' size={4}>
        <p className='danaRegular textMuted fn18'>برای شروع </p>
        {hasLogin?
        <h1 className='danaBold color1976d2'> وارد حساب خود کنید </h1>
        
        :
        <h1 className='danaBold color1976d2'> یک حساب ایجاد کنید </h1>
      }
      </Grid>
    <Grid container size={12}>
        <Grid item='true' size={4.5}>
        <LoginComponent />
        </Grid>
    </Grid>

    </div>
  )
}

export default LoginLayout
