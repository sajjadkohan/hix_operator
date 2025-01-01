import React from 'react'
import styles from './ListItems.module.css';
import TitleList from '../../../components/dashbord/content/products/ListProducts/TitleList';
import Grid from '@mui/material/Grid2';
import ProductItem from '../../../components/dashbord/content/products/ListProducts/ProductItem';




const ListItems = ({title,productList,headRow}) => {
  return (
    <div className={styles.listProducts}>
    <TitleList title={title} lastUpdate={'5 دقیقه قبل'} />
    <Grid className={`${styles.head} danaRegular`} spacing={1} container size={12}>
        {
            headRow.map((item,index) => {
                return(
                    <Grid item='true' size={item.size}><p className={styles.text}>{item.text}</p></Grid>

                )
            })
        }

    </Grid>

  </div>
  )
}

export default ListItems