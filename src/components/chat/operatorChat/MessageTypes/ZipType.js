import React from 'react'
import styles from '../Operator.module.css';
import { PiFileZip } from "react-icons/pi";


const ZipType = ({data}) => {
  return (
    <div className={`${styles.documentType} ${data.sender === "operator" ?styles.rightMsgPack:styles.leftMsgPack} ${data.sender === "operator" ?styles.right:styles.left}`}>
    <div className={styles.msg}>
        <div className={styles.text}>
        <span className={styles.textDocument}>{data.content}</span>
        <span className={styles.icon}>
        <PiFileZip size={25} />
        </span>
          </div>
    </div>
    <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
</div>
  )
}

export default ZipType