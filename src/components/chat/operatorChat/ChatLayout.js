import React, { useContext } from 'react'
import styles from './Operator.module.css'
import { ChatContext } from '../../../context/ChatContext'
import TextType from './MessageTypes/TextType';
const ChatLayout = () => {
    const { messages , userSelect , messageLoading } = useContext(ChatContext);
    console.log(messages);

    const [dataState,setDataState] = React.useState({
        'textValue' : ''
    });

    const changeHandler = (e) => {
        setDataState({
            ...dataState,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div className={styles.chatLayout}>
        <div className={styles.body}>
            <div className={styles.chatBase}>
                <div className={styles.dateStart}>
                    <span>چهارشنبه 16 آبان 1403</span>
                </div>
                
                <div className={styles.msgParent}>

                    {
                    messageLoading?
                    <p>Loading ...</p>:
                    (!messageLoading && messages.length < 1 && userSelect)?
                    <p>پیامی وجود ندارد</p>:
                    !userSelect?
                    <p>لطفا یک چت را انتخاب کنید</p>:
                        messages.map((item,index) => 
                            <TextType key={index} item={item} />
                        )
                    }

      

                    {/* <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>

                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>درباره محصول شماره 1 چنتا سوال داشتم</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>

                        <div className={styles.msg}>
                            <span className={styles.text}>قیمتش چقدره ؟</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>

                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>این محصول امریکایی هست و قیمتش 2 میلیون تومان هست</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>جنسش بسیار عالی و کاملا مقاومه و دارای گارانتی میباشد</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg} ${styles.active}`}>04:20</span>
                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>درباره محصول شماره 1 چنتا سوال داشتم</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>قیمتش چقدره ؟</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>

                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>این محصول امریکایی هست و قیمتش 2 میلیون تومان هست</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>جنسش بسیار عالی و کاملا مقاومه و دارای گارانتی میباشد</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>04:20</span>
                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <span className={`${styles.statusMsg}`}>08:20</span>

                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>درباره محصول شماره 1 چنتا سوال داشتم</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>قیمتش چقدره ؟</span>
                        </div>
                    </div>

                    <div className={styles.rightMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>این محصول امریکایی هست و قیمتش 2 میلیون تومان هست</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>جنسش بسیار عالی و کاملا مقاومه و دارای گارانتی میباشد</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                    </div>

                    <div className={styles.leftMsgPack}>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                        <div className={styles.msg}>
                            <span className={styles.text}>سلام وقت بخیر</span>
                        </div>
                    </div> */}

                </div>

            </div>
        </div>
    
    {
        !messageLoading && userSelect && 
        <div className={styles.footer}>
            <form>
                <div className={styles.right}>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#bababa"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    </a>
                </div>
                <div className={styles.center}>
                    <input name='textValue' value={dataState.textValue} onChange={(e) => changeHandler(e)} className="inputText danaFont" type="text" placeholder="پیامی بنویسید . . ." />
                </div>
                <div className={styles.left}>
                    <button className={styles.emoji}>
                        <svg fill="#bababa" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,21c-4.9,0-9-4.1-9-9c0-5,4.1-9,9-9s9,4.3,9,9 C21,16.7,16.8,21,12,21z M15.5,11c0.8,0,1.5-0.7,1.5-1.5S16.3,8,15.5,8S14,8.7,14,9.5S14.7,11,15.5,11z M8.5,11 c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11z M12,17.5c2.3,0,4.3-1.5,5.1-3.5H6.9C7.7,16,9.7,17.5,12,17.5z"></path></svg>
                    </button>
                    {
                        dataState?.textValue?
                        <span className={styles.addFile}>
                        <span className={`${styles.icon} dFlexallCenter`}>
                            <button className={styles.sendBtn}>send</button>
                            {/* <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg> */}
                        </span>
                        <input className={styles.fileInput} type="file"/>
                    </span>
                    :
                    <span className={styles.addFile}>
                    <span className={`${styles.icon} dFlexallCenter`}>
                        <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg>
                        </span>
                        <input className={styles.fileInput} type="file"/>
                    </span>
                    }
                    <span className={styles.addFile}>
                        <span className={`${styles.icon} dFlexallCenter`}>
                            <svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg>
                        </span>
                        <input className={styles.fileInput} type="file"/>
                    </span>
                </div>
            </form>
        </div>

    }

    </div>
  )
}

export default ChatLayout
