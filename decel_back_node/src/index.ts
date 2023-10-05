import { Database } from "sqlite3";
import WebSocket, { WebSocketServer } from "ws";
import fs from 'fs';
import { PacketLengthParser, SerialPort } from 'serialport'
import { ByteLengthParser } from '@serialport/parser-byte-length'
import { GPIO_t, SocketInterface, Card_config , GPIO_State, AnalogOUT_t, AnalogIN_t} from "./interface";

//Constant
const WEBSOCKET_PORT = 8080;
const SQLITE3_FILE = "./data.sqlite"
const UART_BAUD = 115200

//DB
const db = new Database(SQLITE3_FILE);
db.exec(fs.readFileSync(__dirname + '/Create_DB.sql').toString())


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.onmessage =  (event) => {

    var msg: SocketInterface = JSON.parse(event.data.toString());
      console.log(msg);
    var GPIO: Array<GPIO_t> = [
      { id: 0, state: GPIO_State.Input, name: "GPIO 1", value: 1 },
      { id: 1, state: GPIO_State.Output, name: "GPIO 2", value: 1 },
      { id: 2, state: GPIO_State.Input, name: "GPIO 3", value: 1 },
      { id: 3, state: GPIO_State.Output, name: "GPIO 4", value: 0 },
      { id: 4, state: GPIO_State.Input, name: "GPIO 10", value: 1 }
  ];
  
    var conf: Card_config = {Gpio_conf: GPIO, AnalogIn_conf: [], AnalogOut_conf: []};
    var request: SocketInterface = { message_header: "card_config", card_id: 1, data: conf };

    ws.send(JSON.stringify(request));

  };      
});


