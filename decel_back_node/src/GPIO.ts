export enum GPIO_State {
    Output,
    Input,
    Disabled,
  }
  
  export interface GPIO_t {
    id: number;
    state: GPIO_State;
    value: number;
    name: string;
  }
  
  const GPIO_list: GPIO_t[] = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    state: i < 8 ? GPIO_State.Input : GPIO_State.Output,
    value: i < 8 ? 0 : 1,
    name: `GPIO ${i}`,
  }));
  
  export function getGPIO() {
    return GPIO_list;
  }
  
  export function setGPIO(value: GPIO_t) {
    GPIO_list[value.id] = value;
  }
  
  export function setGPIO_Value(id: number, value: number) {
    GPIO_list[id].value = value;
  }
  
  export function setGPIO_Direction(id: number, dir: GPIO_State) {
    GPIO_list[id].state = dir;
  }
  