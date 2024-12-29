import React, { useContext } from 'react'
import styles from './ApiKey.module.css'
import { AuthCtx } from '../../../../context/AuthContext'
import CodeBlock from '../../../../global/CodeBlock/CodeBlock';
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
    <>
    {
       user&& user?.Roles.find(item => item === 'USER')?
    <div className={styles.apiKey}>
        key :<CodeBlock code={`${user.apiKey}`}/>
        {/* <div className={styles.showKey}></div> */}
        <br/>
        <div className={styles.script}>
        <CodeBlock code={
    `
    <script 
        id="HixChat" 
        src="https://hix.storage.c2.liara.space/files/script.js"
        data-key="${user.apiKey}"
        >
    </script>
    `
        } />
            
        </div>
    </div>
    :
    <h1>شما به این بخش دسترسی ندارید</h1>

    }
    </>
  )
}

export default ApiKey