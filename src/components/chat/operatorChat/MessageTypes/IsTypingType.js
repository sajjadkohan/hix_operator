import React from 'react';
import styles from '../Operator.module.css';
import IsTyping from '../UserItem.js/IsTyping/IsTyping';

const IsTypingType = ({data}) => {
  return (
    <div className={`${data.sender === "operator" ?styles.rightMsgTyping:styles.leftMsgTyping} ${data.sender === "operator" ?styles.right:styles.left}`}>
        <div className={styles.content}>
        <IsTyping position={data.sender} />
        </div>
    </div>
  )
}

export default IsTypingType
