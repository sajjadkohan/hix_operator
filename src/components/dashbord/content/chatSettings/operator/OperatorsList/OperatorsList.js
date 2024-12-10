import React, { useContext, useEffect } from 'react'
import styles from '../../../products/ListProducts/ListProducts.module.css';
import Grid  from '@mui/material/Grid2';
import TitleList from '../../../products/ListProducts/TitleList';
import { ChatContext } from '../../../../../../context/ChatContext';
import { AuthCtx } from '../../../../../../context/AuthContext';
import OperatorItem from './OperatorItem';

const OperatorList = ({title}) => {

  const {getOperators,operatorsList} = useContext(ChatContext);
  const {user} = useContext(AuthCtx);

  useEffect(() => {
    const getOperatorsFn = async () => {
      await getOperators();
    };
    user?.userName&&getOperatorsFn();
  },[user]);

  return (
    <div className={styles.listProducts}>
      <TitleList title={title} lastUpdate={'5 دقیقه قبل'} />
      <Grid className={`${styles.head} danaRegular`} spacing={1} container size={12}>
        <Grid item='true' size={2}>نام</Grid>
        <Grid item='true' size={2}>نام خانوادگی</Grid>
        <Grid item='true' size={2}>نام کاربری</Grid>
        <Grid item='true' size={1}> دسترسی ها</Grid>
        {/* <Grid item='true' size={2}>نمودار فروش</Grid>
        <Grid item='true' size={1}>جزییات</Grid> */}
      </Grid>
      
      <div className={styles.ListParent}>
        {
          operatorsList&&operatorsList.map((item,index) => {
            return(
              <div key={index}><OperatorItem data={item} /></div>
            )
          })
        }
      </div>

    </div>
  )
}

export default OperatorList
