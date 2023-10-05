import { GPIO_t, SocketInterface, Card_config , GPIO_State, AnalogOUT_t, AnalogIN_t} from "./interface";
import { PacketLengthParser, SerialPort } from 'serialport'
import { ByteLengthParser } from '@serialport/parser-byte-length'
import * as DECEL_const from './const'



export class Card {
  
    public cardId: number;
    public cardName: string;
    public uartTtyPath: string;
    public serialportInstance: SerialPort;
    private parser: PacketLengthParser;
  
    public GPIO: Array<GPIO_t>;
    public Analog_out: Array<AnalogOUT_t>;
    public Analog_in: Array<AnalogIN_t>;
  
  
    constructor(cardId: number, cardName: string, uartTtyPath: string) {
      this.cardId = cardId;
      this.cardName = cardName;
      this.uartTtyPath = uartTtyPath;
  
      this.serialportInstance.on('open', () => this.serialportInstance.flush());
  
      this.serialportInstance = new SerialPort({ path: this.uartTtyPath, baudRate: DECEL_const.UART_BAUD });
  
      this.parser = this.serialportInstance.pipe(new PacketLengthParser({
        delimiter: 0xab,
        packetOverhead: 2,
        lengthBytes: 1,
        lengthOffset: 1,
      }));
  
      this.parser.on('data', (stream) => {
        console.log(stream, stream.subarray(2, stream.length));
  
      });
    }
  
  
  }
  