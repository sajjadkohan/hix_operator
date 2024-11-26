import React from 'react'
import styles from './AddPlan.module.css';
import Grid from '@mui/material/Grid2';
import PlanCard from '../../components/AddPlan/PlanCard/PlanCard';
import PlanContext from '../../context/PlanContext';

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

const AddPlan = () => {
  return (
    <div className={styles.addPlan}>
        <PlanContext>
       <Grid container spacing={3} size={12}>
        {
            dataPlan.map((item,index) => {
                return(
                    <Grid key={index} item size={4}><PlanCard data={item} /></Grid>
                )
            })
        }
       </Grid>
       </PlanContext>
    </div>
  )
}

export default AddPlan
