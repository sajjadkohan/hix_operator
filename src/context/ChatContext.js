import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthCtx } from "./AuthContext";
import { requestData } from "../utils/functions";

export const ChatContext = createContext();
export const ChatProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [seletedProduct,setSelectedProduct] = useState([]);
    const [userSelect,setSelectUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [messageLoading,setMessageLoading] = useState(false);
    const [messages,setMessages] = useState([]);
    const [changeValueChat,setChangeValueChat] = useState(1);
    const { user } = useContext(AuthCtx);
    const [textMessage,setTextMessage] = useState("");
    const [isTyping,setIsTyping] = useState(false);
    const [operatorsList,setOperatorsList] = useState(false);
   

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
                localStorage.setItem("selectedUser",JSON.stringify({sid:socketId,cid:cookieId}))
            }else{
                toast.error(data.message)
            }
        })
        setMessageLoading(false)
    }

    // Create Message By Type
    const createMessage = async (message,sender) => {
        setMessages(prevMessages => [
            ...prevMessages,
            { 
                type: message.type,
                sender: sender?sender:"guest",
                content: message.message,
                link:message.link?message.link:"",
                fullLink:message.fullLink?message.fullLink:"",
                fullTime:message.fullTime,
                fileName:message.fileName
             }
        ]);

    }

    // Send Message To Client 
    const sendMessageToClient = (e,socket,message) => {
        let sendMessage;
        switch (message.type) {
            case "text":
                    e.preventDefault();
                    sendMessage = {
                        sid:userSelect.sid,
                        message:message.message,
                        content:message.message,
                        apiKey:user.apikey,
                        cookieId:userSelect.cid,
                        type:message.type,
                        data: [],
                        link:"",
                        sender:"operator"
                    }
                    
                    socket.emit("sendMessageToUser",sendMessage,(data) => {
                        if(data.success){
                            createMessage(data.message,"operator")
                            setTextMessage("");
                            return true
                        }else{
                            alert(data.message)
                        }
                    })
            case "slider":
                sendMessage = {
                    sid:userSelect.sid,
                    message:"",
                    content:"",
                    apiKey:user.apikey,
                    cookieId:userSelect.cid,
                    type:message.type,
                    data: message.data,
                    link:"",
                    sender:"operator"
                }
                
                socket.emit("sendMessageToUser",sendMessage,(data) => {
                    if(data.success){
                        
                        createMessage(data.message,"operator")
                        // setTextMessage("");
                        return true
                    }else{
                        alert(data.message)
                    }
                })
                break;
        
            default:
                break;
        }


    }

    // Get Users List
    const getUsersList = (data) => {

        const selected = localStorage.getItem("selectedUser")

        if(selected){
            const {sid} = JSON.parse(selected)
            const isUser = data.find(item => item.id === sid);
            if(isUser){
                setUsers(data)
            }else{
                localStorage.removeItem("selectedUser")
                setSelectUser(null)
                setUsers(data)  
            }
        }else{
            setUsers(data)
        }
        
    }

    // Connect Operator
    const handleConnect = () => {
        console.log("Connected to the socket");
    };

    // Disconnect Operator
    const handleDisconnect = () => {
        console.log("Disconnected from the socket");
    };

    const handleIsTyping = (data) => {
        const uSelect = localStorage.getItem("selectedUser");
        if(uSelect){
            if(data.isTyping && data.socketID === JSON.parse(uSelect).sid){
                setIsTyping(true)
            }else{
                setIsTyping(false) 
            }
        }else{
            setIsTyping(false)
        }
    }
    
    const getOperators = async () => {
        const res = await requestData('/user/getoperators','GET',{});
        console.log(res);
        if(res?.status == 200){
            setOperatorsList(res?.data?.data);
            // setUser(res?.data?.data);
            // return res?.data?.data
        } else {
            // navigate('/login',{replace : true});
            // toast.error(res?.data?.message);
            
            // setUser({userName : ''})
            return false
        }
    }


    return(
        <ChatContext.Provider value={{
            users,setUsers,
            userSelect,setSelectUser,
            loadMessages,messages,
            messageLoading,setMessageLoading,
            createMessage,sendMessageToClient,textMessage,setTextMessage,
            getUsersList,handleConnect,handleDisconnect,
            changeValueChat,setChangeValueChat,
            getOperators,handleIsTyping,isTyping,
            seletedProduct,setSelectedProduct,
            operatorsList
            }}>
            {children}
        </ChatContext.Provider>
    )
}