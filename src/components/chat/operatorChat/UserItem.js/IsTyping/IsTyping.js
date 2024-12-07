import React from 'react';
import styles from '../../Operator.module.css';

const IsTyping = ({position}) => {
  return (
    <div className={styles.isTyping}>
        <p className={styles.text}>در حال نوشتن</p>
        <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default IsTyping
