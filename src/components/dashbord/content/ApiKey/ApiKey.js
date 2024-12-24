import React, { useContext } from 'react'
import styles from './ApiKey.module.css'
import { AuthCtx } from '../../../../context/AuthContext'
const ApiKey = () => {

    const {user} = useContext(AuthCtx);
// console.log(user);

  return (
    <div className={styles.apiKey}>
        <div className={styles.showKey}>key : {user?.merchantId}</div>
        <br/>
        <div className={styles.script}>
            {
                `
                <script 
                    id="HixChat" 
                    src="https://hix.storage.c2.liara.space/files/script.js"
                    data-key="${user?.merchantId}"
                    >
                </script>
                `
            }
        </div>
    </div>
  )
}

export default ApiKey