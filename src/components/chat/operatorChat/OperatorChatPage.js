import React, { useContext, useEffect, useState } from 'react'
import Content from '../../dashbord/content/Content'
import Grid from '@mui/material/Grid2'
import UsersList from './UsersList'
import ChatLayout from './ChatLayout'
import { socket } from '../../../utils/socket'
import { onConnect, onDisconnect } from '../../../utils/chatFunctions'
import { AuthCtx } from '../../../context/AuthContext'
import { ChatContext } from '../../../context/ChatContext'

const OperatorChatPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthCtx);
  const { setUsers } = useContext(ChatContext)

  // وقتی وضعیت اتصال تغییر می‌کند، مقدار جدید را در state ذخیره می‌کنیم
  useEffect(() => {

    // اتصال به event های connect و disconnect
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('updateUserList',(data) => setUsers(data))

    // اگر اتصال برقرار شد، درخواست join را ارسال می‌کنیم
    if (isConnected && user.userName) {
      join()
    }

    // پاک‌سازی اتصال در زمان unmount
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
    };
  }, [isConnected,user]); // زمانی که isConnected تغییر کند، دوباره effect اجرا می‌شود.

  // Join Operator
  const join = async () => {
    setLoading(true)
    socket.emit('join', { apiKey: user.apikey, isOperator: true }, (res) => {
      if (!res.success) {
        setError(res.message)
      }
    });
    setLoading(false)
  }

  // Connect Operator
  const handleConnect = () => {
    setIsConnected(true);
    console.log("Connected to the socket");
  };

  // Disconnect Operator
  const handleDisconnect = () => {
    setIsConnected(false);
    console.log("Disconnected from the socket");
  };


  return (
    <Content>
      {
        loading?
        <p>Loading ...</p>:
        error?
        <p>{error}</p>:
      <Grid spacing={1} container size={12}>
        <Grid spacing={1} item size={5}><UsersList socket={socket} /></Grid>
        <Grid spacing={1} item size={7}><ChatLayout socket={socket} /></Grid>
      </Grid>

      }
    </Content>
  );
};

export default OperatorChatPage;
