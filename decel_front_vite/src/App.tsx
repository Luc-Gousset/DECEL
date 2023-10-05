import React, { useEffect, memo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SocketInterface, Card_config } from './components/interface';


import Root from '@/components/root'
import Card_view from '@/components/cardview';


import './App.css'


const WEBSOCKET_ADDRESS = "ws://172.26.212.219:8080";

export const socket = new WebSocket(WEBSOCKET_ADDRESS);

socket.onopen = () => {
  console.log('Connected to the websocket');
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "card/:cardId",
    element: <Card_view />,
    loader: async ({ params }) => {
      return new Promise<Card_config>((resolve, reject) => {
        socket.onmessage = (event) => {
          try {
            if (params.cardId === undefined)
              reject(new Error("No card ID"));
            else
            {
              const msg: SocketInterface = JSON.parse(event.data.toString());
              console.log(msg)
              if (msg.message_header === "card_config" && msg.card_id===parseInt(params.cardId)) {
                const card_config: Card_config = msg.data;
                console.log(card_config)
                resolve(card_config);
              }
            }

          } catch (error) {
            reject(error); // in case there's an error, e.g., parsing
          }
        };

        // Send a request to get the card configuration
        var request: SocketInterface = { message_header: "get_card_confing", card_id: Number(params.card_id), data: null };
        socket.send(JSON.stringify(request));

        // Optional: Add a timeout for the request, reject if no response within given time
        setTimeout(() => {
          reject(new Error('Timeout while waiting for card configuration.'));
        }, 5000); // waiting for 5 seconds, adjust as needed
      });

    },
  },

]);


function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

};

export default App;
