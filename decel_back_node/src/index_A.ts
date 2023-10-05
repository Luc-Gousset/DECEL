import * as socketio from "socket.io";
import http from 'http'
import * as CARD from '~/Card'
import * as GPIO from '~/GPIO'
import { SerialPort } from 'serialport'
import { ByteLengthParser } from '@serialport/parser-byte-length'
import { DECEL } from "./compiled"




const serialport = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 57600 })
const parser = serialport.pipe(new ByteLengthParser({ length: 21 }))

serialport.on('open', ()=>serialport.flush())

//Déclaration WebSocket
const io = new socketio.Server(8080, {
    cors: {
        origin: "http://localhost",
        methods: ["GET", "POST"]
    }

});

io.on("connection", (socket) => {
    socket.join("test");
    socket.emit("Card", CARD.getCard())
    socket.emit("Gpio", GPIO.getGPIO())


    socket.on("getCard", () => {
        socket.emit("Card", CARD.getCard())
    });

    socket.on("getGpio", () => {
        socket.emit("Gpio", GPIO.getGPIO())
    });

    socket.on("setGpio", (value: GPIO.GPIO_t) => {
        GPIO.setGPIO(value)
        socket.to("test").emit("Gpio", GPIO.getGPIO())
        const message = generate_gpio_value_message(value);

        serialport.write(DECEL.DECEL_ASK.encode(message).finish())
    });
});

parser.on('data', (stream) => {
        //console.log(stream)
        const answ = DECEL.DECEL_ANSW.decode(stream, 20);

        switch (answ.msg) {
            case ("gpioAnsw"):
                switch (answ.gpioAnsw?.typeMessage) {
                    case (DECEL.GPIO_MESSAGE_ANSW_TYPE.VALUE):
                        //console.log(answ.gpioAnsw)

                        if (answ.gpioAnsw.gpioId != undefined && answ.gpioAnsw.value != undefined) {
                            GPIO.setGPIO_Value(answ.gpioAnsw.gpioId, answ.gpioAnsw.value)
                            io.to("test").emit("Gpio", GPIO.getGPIO())
                        }


                        break;
                    case (DECEL.GPIO_MESSAGE_ANSW_TYPE.DIRECTION):
                        break;
                }
                io.to("test").emit("Gpio", GPIO.getGPIO())

                break;
        }
    


});



function generate_gpio_value_message(gpio: GPIO.GPIO_t): DECEL.DECEL_ASK {
    const gpio_message = DECEL.GPIO_ASK.create();
    gpio_message.gpioId = gpio.id;
    gpio_message.typeMessage = gpio.value == 1 ? DECEL.GPIO_MESSAGE_ASK_TYPE.SET_OUTPUT : DECEL.GPIO_MESSAGE_ASK_TYPE.CLEAR_OUTPUT;

    const main_message = DECEL.DECEL_ASK.create();
    main_message.msg = "gpioAsk";
    main_message.gpioAsk = gpio_message;

    return main_message;
}


const gpio_message = DECEL.GPIO_ASK.create();
gpio_message.gpioId = 9;
gpio_message.typeMessage = DECEL.GPIO_MESSAGE_ASK_TYPE.GET_READ_VALUE;



const main_message = DECEL.DECEL_ASK.create();
main_message.msg = "gpioAsk";
main_message.gpioAsk = gpio_message;


serialport.write(DECEL.DECEL_ASK.encode(main_message).finish())
