import React from 'react';
import styles from '../Operator.module.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { CircularProgress } from '@mui/material';
import { IoClose } from "react-icons/io5";


const MessageLoading = ({data}) => {
  return (
    <div className={`${styles.messageLoading} ${data.sender === "operator" ?styles.rightMsgPack:styles.leftMsgPack} ${data.sender === "operator" ?styles.right:styles.left}`}>
        <div className={styles.msg}>
          <span className={styles.fileName}>{data.content}</span>
            <span className={styles.icon}>
              <span className={styles.loadingParent}>
                {/* <span className={styles.closeBtn}><IoClose size={20} /></span> */}
                <span className={styles.loadingIcon}><CircularProgress color="info" size={33} /></span>
                
              </span>
            <IoDocumentTextOutline color='rgba(157, 157, 157, 0)' size={30} />
            </span>
            <span className={styles.text}></span>
        </div>
        {/* <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span> */}
    </div>
  )
}

export default MessageLoading