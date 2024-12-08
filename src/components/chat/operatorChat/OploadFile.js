import React, { useContext, useEffect, useState } from 'react'
import styles from './Operator.module.css'
import { ChatContext } from '../../../context/ChatContext';
import toast from 'react-hot-toast';


const OploadFile = ({socket,fileLoading,setFileLoading}) => {
    const [file,setFile] = useState(null);
    const { userSelect , createMessage } = useContext(ChatContext)

    const handleUpload = async () => {
        // if (!file) {
        //     alert('لطفاً یک فایل انتخاب کنید.');
        //     return;
        // }

        if(file){
            setFileLoading(true)
            // خواندن فایل به صورت base64 برای ارسال از طریق سوکت
            const reader = new FileReader();
    
            reader.onload = function(event) {
                const fileData = {
                  operator:true,
                  socketID:userSelect.sid,
                  name: file.name,
                  type: file.type,
                  data: event.target.result.split(',')[1]  // جدا کردن base64 از URI
                };
            
                socket.emit('operatorSendFile', fileData, async (data) => {
                  console.log("xxxx",data)
                  if(data.success){
                    createMessage({
                        type: file.type,
                        content: "",
                        link:null,
                        fullLink:data.fileName
                    },"operator")
                  }else{
                    toast.error(data.message)
                  }
                  setFileLoading(false)
                });
            };
            
            reader.readAsDataURL(file);
        }

    
    }

    useEffect(() => {
      handleUpload()
    }, [file])
    

  return (
    <input 
    onChange={(e) => setFile(e.target.files[0])}
    className={styles.fileInput} type="file"/>
  )
}

export default OploadFile