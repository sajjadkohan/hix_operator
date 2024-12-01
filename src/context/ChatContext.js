import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ChatContext = createContext();
export const ChatProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [userSelect,setSelectUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [messageLoading,setMessageLoading] = useState(false);
    const [messages,setMessages] = useState([])


    const loadMessages = (socket,cookieId,socketId) => {
        setMessageLoading(true)
        socket.emit("getMessages",{cookieId,id:socketId} , (data) => {
            if(data.success){
                setSelectUser(socketId);
                setMessages(data.data)
            }else{
                toast.error(data.message)
            }
        })
        setMessageLoading(false)

        // console.log(cookieId)
        // console.log(socketId)
    }

    return(
        <ChatContext.Provider value={{
            users,setUsers,
            userSelect,setSelectUser,
            loadMessages,messages,
            messageLoading,setMessageLoading
            }}>
            {children}
        </ChatContext.Provider>
    )
}