import React from 'react';
import styles from './Operator.module.css';
import UserItem from './UserItem.js/UserItem';
import avatar1 from '../../../images/chat/avatars/a1.jpg'
import avatar2 from '../../../images/chat/avatars/a2.jpg'
import avatar3 from '../../../images/chat/avatars/a3.jpg'

const userArr = [
  {
    'name' : 'کاربر1',
    'id' : '1',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر2',
    'id' : '2',
    'avatar' : avatar2,
  },
  {
    'name' : 'sajjad.k.9093@gmail.com',
    'id' : '3',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر4',
    'id' : '4',
    'avatar' : avatar1,
  },
  {
    'name' : 'تست',
    'id' : '5',
    'avatar' : avatar2,
  },
  {
    'name' : 'کاربر',
    'id' : '6',
    'avatar' : avatar2,
  },
  {
    'name' : 'بدون نام',
    'id' : '7',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'avatar' : avatar1,
  },
]

const UsersList = () => {
  return (
    <div className={styles.userList}>
      {userArr.map((item,index) => {
        return (
          <div onClick={() => console.log('test')}> <UserItem dataUser={item} /></div>
         
        )
      })}
    </div>
  )
}

export default UsersList