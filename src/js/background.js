import { WebSocketClient } from '@wazo/sdk';

setTimeout(() => {
  // or create a button which, when clicked, does something with the sockets
  console.log(WebSocketClient);
}, 1000);

WebSocketClient.on('eventName', (data) => {
    console.log(data);
});