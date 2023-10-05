import * as socketio from "socket.io";
import http from 'http'
import * as CARD from '~/Card'
import * as GPIO from '~/GPIO'
import { SerialPort } from 'serialport'
import { ByteLengthParser } from '@serialport/parser-byte-length'
import { DECEL } from "./compiled"
import { DelimiterParser } from '@serialport/parser-delimiter';
import { PacketLengthParser } from '@serialport/parser-packet-length'

import yargs from 'yargs';
import { buffer } from "stream/consumers";

const SOCKET_PORT = 8080;
const SOCKET_ORIGIN = "*"; // Updated to allow CORS from any origin
const SOCKET_METHODS = ["GET", "POST"];
const ROOM_NAME = "global"; // Updated to "global" room
const EVENT_CARD = "Card";
const EVENT_GPIO = "Gpio";
const EVENT_GET_CARD = "getCard";
const EVENT_GET_GPIO = "getGpio";
const EVENT_SET_GPIO = "setGpio";



const argv = yargs.options({
    'p': { alias: 'serialport', type: 'string', demandOption: true, describe: 'Serial port path', default: '/dev/ttyUSB0' },
    'b': { alias: 'baudRate', type: 'number', demandOption: true, describe: 'Baud rate', default: 115200 }
}).parseSync();

function main() {
    const { p: serialport, b: baudRate } = argv;
    const serialportInstance = new SerialPort({ path: serialport, baudRate });

    serialportInstance.on('open', () => serialportInstance.flush());

    //const parser = serialportInstance.pipe(new DelimiterParser({ delimiter: Buffer.from([0xbc]) , includeDelimiter: false}));
    const parser = serialportInstance.pipe(new PacketLengthParser({
        delimiter: 0xab, 
        packetOverhead: 2,
        lengthBytes: 1,
        lengthOffset: 1,
    }));

    serialportInstance.on('open', () => serialportInstance.flush())

    const io = new socketio.Server(SOCKET_PORT, {
        cors: {
            origin: SOCKET_ORIGIN,
            methods: SOCKET_METHODS
        }
    });

    // Déclaration WebSocket
    io.on("connection", (socket) => {
        const emitCard = () => {
            socket.emit(EVENT_CARD, CARD.getCard());
        };

        const emitGpio = () => {
            socket.emit(EVENT_GPIO, GPIO.getGPIO());
        };

        const emitGpioToGlobalRoom = () => {
            socket.to(ROOM_NAME).emit(EVENT_GPIO, GPIO.getGPIO());
        };

        const sendToSerialPort = (value: GPIO.GPIO_t) => {
            GPIO.setGPIO(value);
            emitGpioToGlobalRoom();
            const message = generate_gpio_value_message(value);
            serialportInstance.write(DECEL.DECEL_ASK.encode(message).finish());
        };

        socket.join(ROOM_NAME);
        emitCard();
        emitGpio();

        socket.on(EVENT_GET_CARD, emitCard);

        socket.on(EVENT_GET_GPIO, emitGpio);

        socket.on(EVENT_SET_GPIO, (value) => {
            sendToSerialPort(value);
        });
    });

    parser.on('data', (stream) => {
        console.log(stream, stream.subarray(2, stream.length));

        const lenght = stream[1];

        const message = stream.subarray(2, stream.length);

        if (stream.length > 1) {
            const answ = DECEL.DECEL_ANSW.decode(message, lenght);

            if (answ.msg === 'gpioAnsw' && answ.gpioAnsw !== null && answ.gpioAnsw !== undefined) {
                const gpioAnswType = answ.gpioAnsw.typeMessage;
                const gpioId = answ.gpioAnsw.gpioId || 0;
                const gpioValue = answ.gpioAnsw.value || 0;

                if (gpioAnswType === DECEL.GPIO_MESSAGE_ANSW_TYPE.VALUE) {
                    GPIO.setGPIO_Value(gpioId, gpioValue);
                    io.to(ROOM_NAME).emit(EVENT_GPIO, GPIO.getGPIO());
                }
            }
        }
    });


    function generate_gpio_value_message(gpio: GPIO.GPIO_t): DECEL.DECEL_ASK {
        const gpio_message = DECEL.GPIO_ASK.create();
        gpio_message.gpioId = gpio.id;
        gpio_message.typeMessage = gpio.value === 1 ? DECEL.GPIO_MESSAGE_ASK_TYPE.SET_OUTPUT : DECEL.GPIO_MESSAGE_ASK_TYPE.CLEAR_OUTPUT;

        const main_message = DECEL.DECEL_ASK.create();
        main_message.msg = 'gpioAsk';
        main_message.gpioAsk = gpio_message;

        return main_message;
    }




    const gpio_message2 = DECEL.GPIO_ASK.create();

    gpio_message2.gpioId = 0;
    gpio_message2.typeMessage = DECEL.GPIO_MESSAGE_ASK_TYPE.SET_OUTPUT;
    const main_message2 = DECEL.DECEL_ASK.create();

    main_message2.msg = "gpioAsk";
    main_message2.gpioAsk = gpio_message2;
    serialportInstance.write(DECEL.DECEL_ASK.encode(main_message2).finish())


    const mcp_message = DECEL.MCP4922_ASK.create();
    mcp_message.DAC_Chanel=0;
    mcp_message.MCP4922Id=1;
    mcp_message.type=DECEL.MCP4922_message_type.SET_VALUE;
    mcp_message.value=19859;

    const main_message3 = DECEL.DECEL_ASK.create();
    main_message3.msg="mcp4922Ask";
    main_message3.mcp4922Ask=mcp_message;
    serialportInstance.write(DECEL.DECEL_ASK.encode(main_message3).finish())

}

// Call the main function
main();

