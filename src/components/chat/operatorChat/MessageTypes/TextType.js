import React from 'react';
import styles from '../Operator.module.css'

const TextType = ({item}) => {
  return (
    <div className={item.sender === "operator" ?styles.rightMsgPack:styles.leftMsgPack}>
        <div className={styles.msg}>
            <span className={styles.text}>{item.content}</span>
        </div>
        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
    </div>
  )
}

export default TextType