import React, { useContext, useEffect } from 'react'
import TitleList from './TitleList'
import styles from './ListProducts.module.css'
import Grid  from '@mui/material/Grid2';
import ProductItem from './ProductItem';
import { ChatContext } from '../../../../../context/ChatContext';
import { AuthCtx } from '../../../../../context/AuthContext';

const ListProducts = ({title}) => {
  const productsArr = [
    {
    name : 'محصول 1',
    price : '100',
    category : 'دسته 2',
    count : '6',
    details : 'details. . .'
  },
      {
    name : 'محصول 2',
    price : '200',
    category : 'دسته 1',
    count : '32',
    details : 'details. . .'
  },
      {
    name : 'محصول 3',
    price : '300',
    category : 'دسته 3',
    count : '4',
    details : 'details. . .'
  },
      {
    name : 'محصول 4',
    price : '400',
    category : 'دسته 4',
    count : '5',
    details : 'details. . .'
  },
      {
    name : 'محصول 5',
    price : '500',
    category : 'دسته 5',
    count : '6',
    details : 'details. . .'
  },
];
  const {getOperators} = useContext(ChatContext);
  const {user} = useContext(AuthCtx);

  // useEffect(() => {
  //   const getOperatorsFn = async () => {
  //     await getOperators();
  //   };
  //   user?.userName&&getOperatorsFn();
  // },[user]);

  return (
    <div className={styles.listProducts}>
      <TitleList title={title} lastUpdate={'5 دقیقه قبل'} />
      <Grid className={`${styles.head} danaRegular`} spacing={1} container size={12}>
        <Grid item='true' size={0.5}></Grid>
        <Grid item='true' size={2.5}>محصول</Grid>
        <Grid item='true' size={2}>قیمت</Grid>
        <Grid item='true' size={2}>دسته بندی</Grid>
        <Grid item='true' size={2}>وضعیت انبار</Grid>
        <Grid item='true' size={2}>نمودار فروش</Grid>
        <Grid item='true' size={1}>جزییات</Grid>
      </Grid>
      
      <div className={styles.ListParent}>
        {
          productsArr.map((item,index) => {
            return(
              <div key={index}><ProductItem data={item} /></div>
            )
          })
        }
      </div>

    </div>
  )
}

export default ListProducts
