import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './Operator.module.css'
import { ChatContext } from '../../../context/ChatContext'
import TextType from './MessageTypes/TextType';
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions , MdOutlineAttachFile } from "react-icons/md";
import image from '../../../images/logo/Hix-192.png';
import image1 from '../../../images/background/8271049_55412.jpg';
import IsTyping from './UserItem.js/IsTyping/IsTyping';
import ImageType from './MessageTypes/ImageType';
import VideoType from './MessageTypes/VideoType';
import IsTypingType from './MessageTypes/IsTypingType';
import DocumentType from './MessageTypes/DocumentType';
import ZipType from './MessageTypes/ZipType';
import OploadFile from './OploadFile';
import MessageLoading from './Loading/MessageLoading';
import TimeDetailsType from './MessageTypes/TimeDetailsType';
import { AiOutlineProduct } from "react-icons/ai";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DashbordContext } from '../../../context/DashbordContext';
import { AuthCtx } from '../../../context/AuthContext';
import ProductItem from './ProductItem/ProductItem';
import Grid from '@mui/material/Grid2';
import { groupMessageByTime } from '../../../utils/functions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height : '800px'
  };

const ChatLayout = ({socket}) => {

    const { messages , userSelect , messageLoading ,
        sendMessageToClient , textMessage,setTextMessage
        ,changeValueChat,setChangeValueChat,users,isTyping,
        seletedProduct,setSelectedProduct
    } = useContext(ChatContext);
    const messagesContainerRef = useRef(null);
    const {getProductByMtId,products} = useContext(DashbordContext);
    const {user} = useContext(AuthCtx);
    

    const [fileLoading,setFileLoading] = useState(false)
    let dating = {
        day:0,
        year:0,
        month:0
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct([])
    };

    useEffect(() => {
        const getProduct = async() => {
        await getProductByMtId(user?.merchantId)
        };

        open&&getProduct()

    },[open]);

    useEffect(() => {
   
        // console.log(messagesContainerRef.current.scrollTop,':test:',messagesContainerRef.current.scrollHeight);
        
        if (messagesContainerRef.current) {
                // messagesContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                messagesContainerRef.current.scrollTo({
                  top: messagesContainerRef.current.scrollHeight,
                  
                  behavior: 'smooth',  // اسکرول نرم
                });
              }

    },[messages,isTyping,fileLoading]);

  return (
    <div className={styles.chatLayout}>

      {/* Show Products Modal*/}  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} overflow={'scroll'}>
            <Grid container spacing={2} size={12} >

            
            {
                products&&products.map((item,index) => {
                    
                    return(
                        <Grid item key={index} size={3} sx={3}> 
                            <ProductItem data={item} >{item.title}</ProductItem>
                        </Grid>
                    )
                })
            }
            </Grid>
            <button onClick={() => {
                sendMessageToClient(null,socket,{type:"slider",data:seletedProduct})
                handleClose()
            }}>send product</button>
        </Box>
      </Modal>

        <div className={styles.body}>
            <div ref={messagesContainerRef} className={styles.chatBase}>
 
                <div className={styles.msgParent}>

                    {
                    messageLoading?
                    <p>Loading ...</p>:
                    (!messageLoading && messages.length < 1 && userSelect)?
                    <p>پیامی وجود ندارد</p>:
                    !userSelect?
                    <p>لطفا یک چت را انتخاب کنید</p>:
                        
                        groupMessageByTime(messages).map((item,index) => {
                            return(
                                <div key={index}>
                                    {
                                        item.type === "text"?
                                        <TextType key={index} data={item} />:
                                        item.type === "image/jpeg"?
                                        <ImageType data={item} />:
                                        item.type === "video/mp4"?
                                        <VideoType data={item} />:
                                        item.type === "application/pdf"?
                                        <DocumentType data={item} />:
                                        item.type === "application/x-zip-compressed"?
                                        <ZipType data={item} />:
                                        item.type === "time"?
                                        <TimeDetailsType item={item}/>:
                                        "not supported"
                                    }
                                </div>
                            )
                        }
                            
                        )
                    }
                    {fileLoading && <MessageLoading data={fileLoading} />}
                    {isTyping &&  <IsTypingType  data={{sender:"user"}}/>}
                </div>

            </div>
        </div>
    
    {
        !messageLoading && userSelect && 
        <div className={styles.footer}>
                <button onClick={() => handleOpen()} className={styles.sendProduct}>
                    <AiOutlineProduct color={'#767676'} size={30} />
                </button>
            <form onSubmit={(e) => {
                // e.preventDefault();
                sendMessageToClient(e,socket,{message:textMessage,type:"text"})

                // messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                
            }}>
                <div className={styles.right}>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#bababa"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    </a>
                </div>
                <div className={styles.center}>
                    <input name='textValue' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} className="inputText danaFont" type="text" placeholder="پیامی بنویسید . . ." />
                </div>
                {/* <button
                onClick={(e) => sendMessageToClient(e,socket,textMessage)}
                >send</button> */}
                <div className={styles.left}>
                    <button className={styles.emoji}>
                    <MdOutlineEmojiEmotions size={30} />
                    </button>

                    {
                        textMessage?
                        <span className={styles.addFile}>
                        <span className={`${styles.icon} dFlexallCenter`}>
                            <button 
                            onClick={(e) => {
                                // sendMessageToClient(e,socket,textMessage)
                // console.log(messagesContainerRef.current,messagesContainerRef.current.scrollTop);

                            }}
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

    }

    </div>
  )
}

export default ChatLayout
