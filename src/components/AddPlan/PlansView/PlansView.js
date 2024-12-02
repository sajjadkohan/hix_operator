import React, { useContext, useEffect, useState } from 'react'
import styles from './PlansView.module.css';
import Grid from '@mui/material/Grid2';
import PlanCard from '../PlanCard/PlanCard';
import { PlanCtx } from '../../../context/PlanContext';
import { AuthCtx } from '../../../context/AuthContext';
import { ViewCtx } from '../../../context/ViewContext';
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const dataPlan = [
    {
        'planName' : 'پلن رایگان',
        'price' : 'رایگان',
        'expire' : '3',
        'operatorCount' : '1',
        'messageCount' : '300',
        'dateType' : 'ماهانه'
    },
    {
        'planName' : 'پلن نقره ای',
        'price' : '200',
        'expire' : '30',
        'operatorCount' : '5',
        'messageCount' : '700',
        'dateType' : 'ماهانه'
    },
    {
        'planName' : 'پلن طلایی',
        'price' : '500',
        'expire' : '30',
        'operatorCount' : '10',
        'messageCount' : '8000',
        'dateType' : 'ماهانه'
    },
];

const PlansView = () => {

    const[play,setPlay] = useState(false);
    const {getPlans,plansState} = useContext(PlanCtx);
    const {user} = useContext(AuthCtx);
    const {loading,setLoading} = useContext(ViewCtx);
    const navigate = useNavigate();


    useEffect(() => {
        const getPlansFn = async () => {
            await getPlans();
        };
        getPlansFn();
        
    },[]);

    useEffect(() => {

        setPlay(true);
        if(play){
    
            if(!user?.userName){
                navigate('/login',{replace : true}); 
            }

        }
    },[user])
  

  return (
    <Grid container spacing={5} size={12}>
    {
        plansState?.length? plansState.map((item,index) => {
            return(
                <Grid key={index} item='true' size={4}>
                        <PlanCard active={index == 1?true:false} data={item} />
                    </Grid>
            )
        })
        :

        <div>
            {
            !user?.userName?

            <div className=''>ابتدا وارد شوید</div>
            :
            <Grid container size={12} spacing={4}>
                <Grid item='true' size={4}><Skeleton variant="rounded" width={310} height={418} /></Grid>
                <Grid item='true' size={4}><Skeleton variant="rounded" width={310} height={418} /></Grid>
                <Grid item='true' size={4}><Skeleton variant="rounded" width={310} height={418} /></Grid>
            </Grid>
            }
        </div>

    }
   </Grid>
  )
}

export default PlansView
