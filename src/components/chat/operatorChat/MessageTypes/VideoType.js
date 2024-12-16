import React from 'react'
import styles from '../Operator.module.css';
import { BASEURLIMAGE } from '../../../../utils/constanst';

const VideoType = ({data}) => {
  return (
    <div className={`${data.sender === "operator" ?styles.rightMsgImg:styles.leftMsgImg} ${data.sender === "operator" ?styles.right:styles.left}`}>
      <div className={styles.content}>
        <video
            width="300"
            controls
            autoPlay
            loop
            muted
            preload="auto"
        >
            <source
            src={data.fullLink?data.fullLink:`${BASEURLIMAGE}${data.link}`}
            type="video/mp4"
            />
            <source
            src={data.fullLink?data.fullLink:`${BASEURLIMAGE}${data.link}`}
            type="video/ogg"
            />
            مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
        </video>
            <p className={styles.desc}>توضیحات درباره این عکس</p>
        <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span>
        </div>
    </div>
  )
}

export default VideoType
