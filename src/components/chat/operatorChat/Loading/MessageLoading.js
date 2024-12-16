import React from 'react';
import styles from '../Operator.module.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { CircularProgress } from '@mui/material';
import { IoClose } from "react-icons/io5";


const MessageLoading = ({data}) => {
  console.log(data)
  
  return (
    <div className={`${styles.messageLoading} ${styles.rightMsgPack}`}>
        <div className={styles.msg}>
          <span className={styles.fileName}>
            {data}
            </span>
            <span className={styles.icon}>
              <span className={styles.loadingParent}>
                <span className={styles.closeBtn}><IoClose size={20} /></span>
              <CircularProgress color="secondary" />
              </span>
            <IoDocumentTextOutline size={25} />
            </span>
            <span className={styles.text}></span>
        </div>
        {/* <span className={`${styles.statusMsg} ${styles.active}`}>{`${data?.fullTime?.hour}:${data?.fullTime?.minute} ${data?.fullTime?.ampm}`}</span> */}
    </div>
  )
}

export default MessageLoading