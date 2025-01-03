import React from 'react'
import styles from '../Operator.module.css';
import image from '../../../../images/logo/Hix-192.png';
import { BASEURLIMAGE } from '../../../../utils/constanst';


const ImageType = ({data}) => {
  // console.log(data);
  
  return (
    <div className={`${data?.sender === "guest" || data?.sender === "operator" ?styles.rightMsgImg:styles.leftMsgImg} ${data?.sender === "guest" || data?.sender === "operator" ?styles.right:styles.left}`}>
      <div className={styles.content}>
            <img src={data?.fullLink?data.fullLink:`${BASEURLIMAGE}${data?.link}`} />
            <p className={styles.desc}>توضیحات درباره این عکس</p>
        <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span>
      </div>
    </div>
  )
}

export default ImageType
