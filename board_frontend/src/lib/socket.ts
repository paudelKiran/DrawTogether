import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL =`${process.env.NEXT_PUBLIC_SOCKET_URL}`

export const socket = io(URL,{
  timeout: 10000,
  reconnectionAttempts:5,
  transports: ["websocket"],
});