import React, { useContext, useEffect, useRef, useState } from 'react'
import Content from '../../dashbord/content/Content'
import Grid from '@mui/material/Grid2'
import UsersList from './UsersList'
import ChatLayout from './ChatLayout'
import { socket } from '../../../utils/socket'
import { onConnect, onDisconnect } from '../../../utils/chatFunctions'
import { AuthCtx } from '../../../context/AuthContext'
import { ChatContext } from '../../../context/ChatContext'
import music from "../../../assets/sounds/message.mp3"
import music2 from "../../../assets/sounds/message2.mp3"

const OperatorChatPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user , setUser } = useContext(AuthCtx);
  const { createMessage , getUsersList , handleConnect , handleDisconnect ,changeValueChat,setChangeValueChat } = useContext(ChatContext);
  const audioRef = useRef(null);
  const audioRef1 = useRef(null)


  useEffect(() => {
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    join();
    socket.on('updateUserList', (data) => {
      getUsersList(data);
      setChangeValueChat(!changeValueChat);
    });
    socket.on('newMessageFromUser', (data) => {
      createMessage(data)
    });

    socket.on('messageSound',(data) => {
      // Play Sound Message
      if(data.targetOperator === socket.id){
        audioRef1.current.play();
      }else{
        audioRef.current.play();
      }

    })


    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('updateUserList', (data) => getUsersList(data));
      socket.off('newMessageFromUser', (data) => createMessage(data));  // حذف listener پیام‌ها
      socket.off('messageSound',() => {})
    };
  }, []);  

  // Join Operator
  const join = async () => {
    setLoading(true);
    // console.log("****",user)
    socket.emit('join', { apiKey: user?.apikey, isOperator: true }, (res) => {
      if (!res.success) {
        setError(res.message);
      }else{
        setUser({...user,socketId:socket.id})
      }
    });
    setLoading(false);
  }



  return (
    <Content>
      {
        loading ?
          <p>Loading ...</p> :
          error ?
            <p>{error}</p> :
            <Grid spacing={1} container size={12}>
              <Grid item='true' size={5}><UsersList socket={socket} /></Grid>
              <Grid item='true' size={7}><ChatLayout socket={socket} /></Grid>
              <audio ref={audioRef} src={music} autoPlay={false} />
              <audio ref={audioRef1} src={music2} autoPlay={false} />
            </Grid>
      }
    </Content>
  );
};

export default OperatorChatPage;
