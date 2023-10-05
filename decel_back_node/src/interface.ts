export enum GPIO_State {
    Output,
    Input,
    Disabled,
};

export interface GPIO_t {
    id: number,
    state: GPIO_State,
    value: number,
    name: string,
}

export interface Card_t {
    name: string,
    serial_port: string,
}

export interface AnalogIN_t {
    id: number,
    name: string,
    value: number,
    is_enable: boolean,
}

export interface AnalogOUT_t {
    id: number,
    name: string,
    value: number,
    is_enable: boolean,
    min_value: number,
    max_value: number,
}


export interface Card_config {
    Gpio_conf: Array<GPIO_t>,
    AnalogIn_conf: Array<AnalogIN_t>,
    AnalogOut_conf: Array<AnalogOUT_t>,
} 


export interface SocketInterface {
    message_header: string,
    card_id: number,
    data: any,
}