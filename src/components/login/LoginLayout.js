import React from 'react'
import styles from './Login.module.css';
import LoginComponent from './LoginComponent/LoginComponent';
import Grid from '@mui/material/Grid2';
import { ViewCtx } from '../../context/ViewContext';

const LoginLayout = () => {

  const {hasLogin} = React.useContext(ViewCtx);


  return (
    <div className={styles.loginLayout}>
      <Grid item size={4}>
        <p className='danaRegular textMuted fn18'>برای شروع </p>
        {hasLogin?
        <h1 className='danaBold color1976d2'> وارد حساب خود کنید </h1>
        
        :
        <h1 className='danaBold color1976d2'> یک حساب ایجاد کنید </h1>
      }
      </Grid>
    <Grid container size={12}>
        <Grid item size={4.5}>
        <LoginComponent />
        </Grid>
    </Grid>

    </div>
  )
}

export default LoginLayout
