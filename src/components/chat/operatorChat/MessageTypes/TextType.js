import React from 'react';
import styles from '../Operator.module.css'

const TextType = ({data}) => {
  // console.log(data);
  
  return (
    <div className={`${data.sender === "operator" ?styles.rightMsgPack:styles.leftMsgPack} ${data.sender === "operator" ?styles.right:styles.left}`}>
        <div className={styles.msg}>
            <span className={styles.text}>{data.content}</span>
        </div>
        <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span>
    </div>
  )
}

export default TextType