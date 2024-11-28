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
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر2',
    'id' : '2',
    'active' : true,
    'disable' : false,
    'avatar' : avatar2,
  },
  {
    'name' : 'sajjad.k.9093@gmail.com',
    'id' : '3',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر4',
    'id' : '4',
    'active' : false,
    'disable' : true,
    'avatar' : avatar1,
  },
  {
    'name' : 'تست',
    'id' : '5',
    'active' : false,
    'disable' : true,
    'avatar' : avatar2,
  },
  {
    'name' : 'کاربر',
    'id' : '6',
    'active' : false,
    'disable' : false,
    'avatar' : avatar2,
  },
  {
    'name' : 'بدون نام',
    'id' : '7',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
    'avatar' : avatar1,
  },
  {
    'name' : 'کاربر8',
    'id' : '8',
    'active' : false,
    'disable' : false,
    'avatar' : avatar3,
  },
  {
    'name' : 'کاربر0',
    'id' : '0',
    'active' : false,
    'disable' : false,
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
