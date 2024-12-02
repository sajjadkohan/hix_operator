import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthCtx } from "./AuthContext";

export const ChatContext = createContext();
export const ChatProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [userSelect,setSelectUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [messageLoading,setMessageLoading] = useState(false);
    const [messages,setMessages] = useState([]);
    const { user } = useContext(AuthCtx);
    const [textMessage,setTextMessage] = useState("");


    // Load Last Messages
    const loadMessages = (socket,cookieId,socketId) => {
        setMessageLoading(true)
        socket.emit("getMessages",{cookieId,id:socketId} , (data) => {
            if(data.success){
                setSelectUser({
                    sid:socketId,
                    cid:cookieId
                });
                setMessages(data.data)
            }else{
                toast.error(data.message)
            }
        })
        setMessageLoading(false)

        // console.log(cookieId)
        // console.log(socketId)
    }

    // Create Message By Type
    const createMessage = (message,sender) => {
        switch (message.type) {
            case "text":
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: message.type, sender: sender?sender:"guest", content: message.message }
                ]);
                break;
        
            default:
                break;
        }
        // setMessages([...messages,{}])
    }

    // Send Message To Client 
    const sendMessageToClient = (e,socket,message) => {

        e.preventDefault();
        let sendMessage = {
            sid:userSelect.sid,
            message,
            content:message,
            apiKey:user.apikey,
            cookieId:userSelect.cid,
            type:"text",
            data: [],
            link:"",
            sender:"operator"
        }
        
        socket.emit("sendMessageToUser",sendMessage,(data) => {
            if(data.success){
                createMessage(sendMessage,"operator")
                setTextMessage("")
            }else{
                alert(data.message)
            }
        })
    }

    // Get Users List
    const getUsersList = (data) => {
        console.log("ssssss")
        setUsers(data)
    }

      // Connect Operator
    const handleConnect = () => {
        // setIsConnected(true);
        console.log("Connected to the socket");
    };

    // Disconnect Operator
    const handleDisconnect = () => {
        // setIsConnected(false);
        console.log("Disconnected from the socket");
    };

    return(
        <ChatContext.Provider value={{
            users,setUsers,
            userSelect,setSelectUser,
            loadMessages,messages,
            messageLoading,setMessageLoading,
            createMessage,sendMessageToClient,textMessage,setTextMessage,
            getUsersList,handleConnect,handleDisconnect
            }}>
            {children}
        </ChatContext.Provider>
    )
}