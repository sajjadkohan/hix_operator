import React from 'react'
import styles from './Operator.module.css'
const ChatLayout = () => {
  return (
    <div className={styles.chatLayout}>
    <div className={styles.body}>
    <div className={styles.chatBase}>
        <div className={styles.dateStart}>
            <span>چهارشنبه 16 آبان 1403</span>
        </div>
        <div className={styles.msgParent}>

            <div className={styles.leftMsgPack}>
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
            </div>

        </div>

    </div>
  </div>
  </div>
  )
}

export default ChatLayout
