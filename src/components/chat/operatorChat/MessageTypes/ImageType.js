import React from 'react'
import styles from '../Operator.module.css';
import image from '../../../../images/logo/Hix-192.png';
import { BASEURLIMAGE } from '../../../../utils/constanst';


const ImageType = ({data}) => {
  return (
    <div className={`${data.sender === "operator" ?styles.rightMsgImg:styles.leftMsgImg} ${data.sender === "operator" ?styles.right:styles.left}`}>
      <div className={styles.content}>
            <img src={data.fullLink?data.fullLink:`${BASEURLIMAGE}${data.link}`} />
            <p className={styles.desc}>توضیحات درباره این عکس</p>
        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
      </div>
    </div>
  )
}

export default ImageType
