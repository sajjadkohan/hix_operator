import { io } from 'socket.io-client';
import { CHAT_BASE_URL } from './constanst';
export const socket = io(CHAT_BASE_URL,{
    cors: {
        origin: CHAT_BASE_URL
      }
});
