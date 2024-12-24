import React from 'react'
import styles from './Operator.module.css'
import OploadFile from './OploadFile'
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineEmojiEmotions , MdOutlineAttachFile } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";



const FooterWindow = ({
    handleOpen,sendMessageToClient,socket,textMessage,
    setTextMessage,fileLoading,setFileLoading
}) => {

  return (
    <div className={styles.footer}>

            <button onClick={() => handleOpen()} className={styles.sendProduct}>
                <AiOutlineProduct color={'#767676'} size={30} />
            </button>

            <form onSubmit={(e) => sendMessageToClient(e,socket,{message:textMessage,type:"text"})}>
                <div className={styles.right}>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#bababa"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    </a>
                </div>
                <div className={styles.center}>
                    <input name='textValue' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} className="inputText danaFont" type="text" placeholder="پیامی بنویسید . . ." />
                </div>

                <div className={styles.left}>
                    <button className={styles.emoji}>
                        <MdOutlineEmojiEmotions size={30} />
                    </button>

                    {
                        textMessage?
                        <span className={styles.addFile}>
                        <span className={`${styles.icon} dFlexallCenter`}>
                            <button 
                            className={styles.sendBtn}>
                                <IoSendSharp className={styles.sendIcon} size={30} />
                            </button>
                            {/* <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg> */}
                        </span>
                        {/* <input className={styles.fileInput} type="file"/> */}
                    </span>
                    :
                    <span className={styles.addFile}>
                    <span className={`${styles.icon} dFlexallCenter`}>
                    <MdOutlineAttachFile className={styles.fileIcon} size={25} />
                        {/* <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg> */}
                        </span>
                        <OploadFile 
                        fileLoading={fileLoading}
                        setFileLoading={setFileLoading}
                        socket={socket} />
                    </span>
                    }
                    {/* <span className={styles.addFile}>
                        <span className={`${styles.icon} dFlexallCenter`}>
                            <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg>
                        </span>
                        <input className={styles.fileInput} type="file"/>
                    </span> */}
                </div>
            </form>
        </div>
  )
}

export default FooterWindow