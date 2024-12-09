import React from 'react';
import Grid from '@mui/material/Grid2';
import styles from '../../../products/Products.module.css';
import image from '../../../../../../images/chat/operator/icons8-operator-100-2.png'
const OperatorItem = ({data}) => {
  return (
    <div className={`${styles.productItem} ${styles.operatorItem} danaRegular`}>
    <Grid className={styles.parentAll} container spacing={1} size={12}>
        {/* <Grid item='true' size={0.5}>
            <span className={`${styles.checkbox}`}></span>
        </Grid> */}
        <Grid className={styles.imageParent} display={'flex'} alignItems={'center'} item size={2.5}>
          <img style={{width : '30px'}} className='ml10' src={image} />
          <span>{data.firstName}</span>
          </Grid>
        <Grid item='true' size={2}><span className={`${styles.box} `}>{data.lastName}</span> </Grid>
        <Grid item='true' size={2}><span className={styles.box2}>{data.userName}</span></Grid>
        <Grid item='true' size={2}><span className={styles.box3}>{
        data.Roles&&data.Roles.map((role,index) => {
            return(
                <span key={index}>{role}</span>
            )
        })
        }</span></Grid>
        {/* <Grid item='true' size={2}>نمودار فروش</Grid> */}
        {/* <Grid item='true' size={1}>
          <a className={styles.detailBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.4999 12H3.66992" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          </Grid> */}
      </Grid>
    </div>
  )
}

export default OperatorItem