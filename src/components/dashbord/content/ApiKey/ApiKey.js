import React, { useContext } from 'react'
import styles from './ApiKey.module.css'
import { AuthCtx } from '../../../../context/AuthContext'
const ApiKey = () => {

    const {user} = useContext(AuthCtx);
    let code = `
                <script 
                    id="HixChat" 
                    src="https://hixnew.storage.c2.liara.space/files/script.js"
                    data-key="${user?.apiKey}"
                    >
                </script>
                `
// console.log(user);

  return (
    <div className={styles.apiKey}>
        {
            !user.merchantId?
            <>
            <div className={styles.showKey}>key :</div>
            <br/>
            <div className={styles.script}>
                <code disabled>
                {code}
                </code>
            </div>
            <button className={styles.btn}
                onClick={() =>  {
                    navigator.clipboard.writeText(code);
                    alert("کپی شد!")
                }}
                >Copy
            </button>
        </>:
        <p>کلید برای اپراتور وجود ندارد</p>
        }
        
    </div>
  )
}

export default ApiKey