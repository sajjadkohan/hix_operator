import React from 'react';
import styles from './UserItem.module.css'

const UserItem = ({dataUser}) => {
  return (
    <div className={styles.userItem}>
      <img alt='avatar' className={styles.avatar} src={dataUser.avatar} />
      <h3 className='danaRegular'>{dataUser.name}</h3>
      <div className={styles.badgeParent}>
        <span className={styles.badge}>3</span>
        <span className={styles.date}>27/08/1403</span>
      </div>
    </div>
  )
}

export default UserItem
