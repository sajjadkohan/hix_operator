import React from 'react'
import styles from '../Operator.module.css';

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
            src="https://www.w3schools.com/html/movie.mp4"
            type="video/mp4"
            />
            <source
            src="https://www.w3schools.com/html/movie.ogg"
            type="video/ogg"
            />
            مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
        </video>
            <p className={styles.desc}>توضیحات درباره این عکس</p>
        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
        </div>
    </div>
  )
}

export default VideoType
