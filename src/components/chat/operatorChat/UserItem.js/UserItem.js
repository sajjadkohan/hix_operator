import React, { useContext } from 'react';
import styles from './UserItem.module.css'
import avatar1 from '../../../../images/chat/avatars/a1.jpg'
import userIcon from '../../../svgs/userIcon.svg';
import { ChatContext } from '../../../../context/ChatContext';
import { AuthCtx } from '../../../../context/AuthContext';


const UserItem = ({dataUser}) => {
  const { userSelect } = useContext(ChatContext);
  const { user } = useContext(AuthCtx);
  // console.log(dataUser)

  return (
    <div className={`${styles.userItem} ${dataUser.id === userSelect?.sid ? styles.active : ""} ${(dataUser.targetOperator && dataUser.targetOperator !== user.socketId ) &&styles.disable}`}>
      {
        (dataUser.targetOperator && dataUser.targetOperator !== user.socketId )  &&
        <div className={styles.disableParent}>
        <span className={styles.icon}>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
        </svg>

        </span>
      </div>
      }
      <img alt='avatar' className={styles.avatar} src={userIcon} />
      <div className={styles.left}>
        <h3 className='danaRegular'>{dataUser.name}</h3>
        <div className={styles.lastMsg}>
          {

          dataUser.lastMessage &&
            <p>{dataUser.lastMessage} </p>
          }
        </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.badgeParent}>
          {!dataUser.lastMessageSeen && <span className={styles.badge}></span> }
          <span className={styles.date}>27/08/1403</span>
        </div>
      </div>

      
    </div>
  )
}

export default UserItem
