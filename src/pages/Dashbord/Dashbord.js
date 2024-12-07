import React, { useContext, useEffect, useState } from 'react';
import styles from './Dashbord.module.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Sidebar from '../../components/dashbord/Sidebar/Sidebar';
import { AuthCtx } from '../../context/AuthContext';

const Dashbord = () => {

    const {isLogin,user,logout,loadingLogin} = useContext(AuthCtx);
    const[play,setPlay] = useState(false);


    // const Item = styled('div')(({ theme }) => ({
    //     backgroundColor: '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     ...theme.applyStyles('dark', {
    //       backgroundColor: '#1A2027',
    //     }),
    //   }));
    const navigate = useNavigate();

    useEffect(() => {
        
        setPlay(true);
        // if(play){
            // console.log(loadingLogin,user);
    
            if(!user){
                navigate('/login',{replace : true}); 
            }
            
        // }
    },[user]);

  return (
    <div className={styles.dashbord}>
        <Grid container spacing={0}>
            <Grid size={2}>
                left
                <button onClick={async() => await logout()&&navigate('/login',{replace : true})}>logout</button>
            </Grid>
            <Grid className={'plr2'} size={8}>
                <Outlet />
            </Grid>
            <Grid size={2}>
                <Sidebar/>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Dashbord