import { useParams, } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { GPIO_t, AnalogIN_t, AnalogOUT_t, GPIO_State, } from "@/components/interface";
import DECEL_logo from '../assets/DECEL_logo.png';
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { socket } from "@/App"

import GPIOout from '@/components/GPIOout/GPIOout';
import GPIOin from '@/components/GPIOin/GPIOin';
import AnalogIN from '@/components/AnalogIn/AnalogIn';
import AnalogOUT from '@/components/AnalogOut/AnalogOut'

import { SocketInterface, Card_config } from "@/components/interface";



export default function Card_view() {

    const [GPIOArray, setGPIOArray] = useState<GPIO_t[]>([]);
    const [AnalogINArray, setAnalogINArray] = useState<AnalogIN_t[]>([]);
    const [AnalogOUTArray, setAnalogOUTArray] = useState<AnalogOUT_t[]>([]);

    const param = useParams();
    const card_id = param.cardId;

    const data_load: Card_config = useLoaderData() as Card_config;

    useEffect(() => {
        setGPIOArray(data_load.Gpio_conf);
        setAnalogINArray(data_load.AnalogIn_conf);
        setAnalogOUTArray(data_load.AnalogOut_conf);

        socket.onmessage = (event) => {

            var msg: SocketInterface = JSON.parse(event.data);
            
            if(msg.card_id.toString() === card_id)
            {
                switch(msg.message_header)
                {
                    case "card_config":
                        var card_config: Card_config = (msg.data);
                        //setGPIOArray(card_config.Gpio_conf);
                        break;


                    case "gpio_config":
                        var gpio_config: Array<GPIO_t> = msg.data;
                        //setGPIOArray(gpio_config);
                        break;

        
                }
            }

        };


    }, []);



    return (
        <>
            <div className="bg-gray-200  h-screen p-4 flex-row">
                <div className="flex justify-between place-items-center">

                    <div className="flex align-middle place-items-center">
                        <img className="h-12 m-2" src={DECEL_logo} />

                        <h1 className="text-3xl m-2">Carte {card_id}</h1>
                    </div>

                    <Link to="/">
                        <button className="bg-gray-500 p-2 rounded-xl hover:scale-125  duration-300 delay-75 ease-in-out shadow m-4 text-white">
                            Retour
                        </button>
                    </Link>

                </div>


                <div className="flex flex-col sm:flex-row">

                    <div className="flex flex-col w-full sm:w-1/2 " >
                        <GPIOout gpio_array={GPIOArray} set_gpîo_array={setGPIOArray} />

                        <div className="">
                            <AnalogOUT analogOUT_array={AnalogOUTArray} set_analog_out_array={setAnalogOUTArray} />
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2" >
                        <GPIOin gpio_array={GPIOArray} />

                    </div>
                </div>

            </div>

        </>
    );

}