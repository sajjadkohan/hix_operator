import React from 'react';
import styles from './Dashbord.module.css'
// import { DashBordCtx } from '../../context/DashbordContext';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Sidebar from '../../components/dashbord/Sidebar/Sidebar';

const Dashbord = () => {
    // const {products} = useContext(DashBordCtx);

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

  return (
    <div className={styles.dashbord}>
        <Grid container spacing={0}>
            <Grid size={2}>
                size=2
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