import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './Operator.module.css'
import { ChatContext } from '../../../context/ChatContext'
import TextType from './MessageTypes/TextType';
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DashbordContext } from '../../../context/DashbordContext';
import { AuthCtx } from '../../../context/AuthContext';
import ProductItem from './ProductItem/ProductItem';
import Grid from '@mui/material/Grid2';
import { groupMessageByTime } from '../../../utils/functions';
import FooterWindow from './FooterWindow';


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
                                        <ImageType data={item} />
                                        :
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

                    {fileLoading && <MessageLoading data={{sender : 'operator',content : 'image.jpeg'}} />}
                    {isTyping &&  <IsTypingType  data={{sender:"user"}}/>}
                </div>

            </div>
        </div>
    
    {
        !messageLoading && userSelect && 
        <FooterWindow
        handleOpen={handleOpen}
        sendMessageToClient={sendMessageToClient}
        socket={socket}
        textMessage={textMessage}
        setTextMessage={setTextMessage}
        fileLoading={fileLoading}
        setFileLoading={setFileLoading}
        />
    }

    </div>
  )
}

export default ChatLayout
