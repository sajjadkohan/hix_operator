import React from 'react'
import { socket } from '../../utils/socket'
import OperatorChatPage from './operatorChat/OperatorChatPage'

const AllContent = () => {
  return (
    <>
    {
    socket.connected?
    <OperatorChatPage/>:
    <p>Connecting ...</p>
    }
    </>
  )
}

export default AllContent