import React from 'react';
import Grid from '@mui/material/Grid2';
import styles from './ProductItem.module.css';
import image from '../../../../../images/svg/Home.svg'
const ProductItem = ({data}) => {
  return (
    <div className={`${styles.productItem} danaRegular`}>
    <Grid className={styles.parentAll} container spacing={1} size={12}>
        <Grid item='true' size={0.5}>
            <span className={`${styles.checkbox}`}></span>
        </Grid>
        <Grid className={styles.imageParent} item size={2.5}>
          <img className='ml10' src={image} />
          <span>{data.name}</span>
          </Grid>
        <Grid item='true' size={2}><span className={`${styles.box} `}>{data.price}</span> </Grid>
        <Grid item='true' size={2}><span className={styles.box2}>{data.category}</span></Grid>
        <Grid item='true' size={2}><span className={styles.box3}>{data.count}</span></Grid>
        <Grid item='true' size={2}>نمودار فروش</Grid>
        <Grid item='true' size={1}>
          <a className={styles.detailBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.4999 12H3.66992" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          </Grid>
      </Grid>
    </div>
  )
}

export default ProductItem