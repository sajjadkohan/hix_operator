import React, { useContext } from 'react';
import styles from './UserItem.module.css'
import avatar1 from '../../../../images/chat/avatars/a1.jpg'
import userIcon from '../../../svgs/userIcon.svg';
import { ChatContext } from '../../../../context/ChatContext';


const UserItem = ({dataUser}) => {
  const { userSelect } = useContext(ChatContext)
  // console.log(dataUser)

  return (
    <div className={`${styles.userItem} ${dataUser.id === userSelect?.sid ? styles.active : ""} ${dataUser.disable&&styles.disable}`}>
      {
        dataUser.disable&&
        <div className={styles.disableParent}>
        <span className={styles.icon}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
        </svg>

        </span>
      </div>
      }
      <img alt='avatar' className={styles.avatar} src={userIcon} />
      <div className={styles.left}>
        <h3 className='danaRegular'>{dataUser.name}</h3>
        <div className={styles.lastMsg}>
        <p>من این محصول را میخواهم اما نمیتوانم انرا در سایت پیدا کنم لطفا به من کمک کنید</p>
        </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.badgeParent}>
          <span className={styles.badge}>3</span>
          <span className={styles.date}>27/08/1403</span>
        </div>
      </div>
      {
        dataUser.lastMessage && 
      <p style={{margin: 0,marginLeft: 0,color: "#ccc",marginLeft: "14px"}}>{dataUser.lastMessage}</p>
      }
      
    </div>
  )
}

export default UserItem
