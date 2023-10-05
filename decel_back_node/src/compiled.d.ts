import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace DECEL. */
export namespace DECEL {

    /** MESSAGE_ANSW_ERROR enum. */
    enum MESSAGE_ANSW_ERROR {
        OK = 0,
        KO = 1
    }

    /** GPIO_MESSAGE_ASK_TYPE enum. */
    enum GPIO_MESSAGE_ASK_TYPE {
        GET_STATE = 0,
        SET_STATE_Z = 1,
        SET_STATE_O = 2,
        SET_STATE_I = 3,
        GET_READ_VALUE = 4,
        SET_OUTPUT = 5,
        CLEAR_OUTPUT = 6
    }

    /** GPIO_MESSAGE_ANSW_TYPE enum. */
    enum GPIO_MESSAGE_ANSW_TYPE {
        VALUE = 0,
        DIRECTION = 1
    }

    /** Properties of a GPIO_ASK. */
    interface IGPIO_ASK {

        /** GPIO_ASK gpioId */
        gpioId?: (number|null);

        /** GPIO_ASK typeMessage */
        typeMessage?: (DECEL.GPIO_MESSAGE_ASK_TYPE|null);
    }

    /** Represents a GPIO_ASK. */
    class GPIO_ASK implements IGPIO_ASK {

        /**
         * Constructs a new GPIO_ASK.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IGPIO_ASK);

        /** GPIO_ASK gpioId. */
        public gpioId: number;

        /** GPIO_ASK typeMessage. */
        public typeMessage: DECEL.GPIO_MESSAGE_ASK_TYPE;

        /**
         * Creates a new GPIO_ASK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GPIO_ASK instance
         */
        public static create(properties?: DECEL.IGPIO_ASK): DECEL.GPIO_ASK;

        /**
         * Encodes the specified GPIO_ASK message. Does not implicitly {@link DECEL.GPIO_ASK.verify|verify} messages.
         * @param message GPIO_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IGPIO_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GPIO_ASK message, length delimited. Does not implicitly {@link DECEL.GPIO_ASK.verify|verify} messages.
         * @param message GPIO_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IGPIO_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GPIO_ASK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GPIO_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.GPIO_ASK;

        /**
         * Decodes a GPIO_ASK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GPIO_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.GPIO_ASK;

        /**
         * Verifies a GPIO_ASK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GPIO_ASK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GPIO_ASK
         */
        public static fromObject(object: { [k: string]: any }): DECEL.GPIO_ASK;

        /**
         * Creates a plain object from a GPIO_ASK message. Also converts values to other types if specified.
         * @param message GPIO_ASK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.GPIO_ASK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GPIO_ASK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GPIO_ASK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GPIO_ANSW. */
    interface IGPIO_ANSW {

        /** GPIO_ANSW gpioId */
        gpioId?: (number|null);

        /** GPIO_ANSW typeMessage */
        typeMessage?: (DECEL.GPIO_MESSAGE_ANSW_TYPE|null);

        /** GPIO_ANSW value */
        value?: (number|null);
    }

    /** Represents a GPIO_ANSW. */
    class GPIO_ANSW implements IGPIO_ANSW {

        /**
         * Constructs a new GPIO_ANSW.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IGPIO_ANSW);

        /** GPIO_ANSW gpioId. */
        public gpioId: number;

        /** GPIO_ANSW typeMessage. */
        public typeMessage: DECEL.GPIO_MESSAGE_ANSW_TYPE;

        /** GPIO_ANSW value. */
        public value?: (number|null);

        /** GPIO_ANSW _value. */
        public _value?: "value";

        /**
         * Creates a new GPIO_ANSW instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GPIO_ANSW instance
         */
        public static create(properties?: DECEL.IGPIO_ANSW): DECEL.GPIO_ANSW;

        /**
         * Encodes the specified GPIO_ANSW message. Does not implicitly {@link DECEL.GPIO_ANSW.verify|verify} messages.
         * @param message GPIO_ANSW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IGPIO_ANSW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GPIO_ANSW message, length delimited. Does not implicitly {@link DECEL.GPIO_ANSW.verify|verify} messages.
         * @param message GPIO_ANSW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IGPIO_ANSW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GPIO_ANSW message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GPIO_ANSW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.GPIO_ANSW;

        /**
         * Decodes a GPIO_ANSW message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GPIO_ANSW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.GPIO_ANSW;

        /**
         * Verifies a GPIO_ANSW message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GPIO_ANSW message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GPIO_ANSW
         */
        public static fromObject(object: { [k: string]: any }): DECEL.GPIO_ANSW;

        /**
         * Creates a plain object from a GPIO_ANSW message. Also converts values to other types if specified.
         * @param message GPIO_ANSW
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.GPIO_ANSW, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GPIO_ANSW to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GPIO_ANSW
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** MCP4922_message_type enum. */
    enum MCP4922_message_type {
        SET_VALUE = 0,
        SHUTDOWN = 1
    }

    /** Properties of a MCP4922_ASK. */
    interface IMCP4922_ASK {

        /** MCP4922_ASK MCP4922Id */
        MCP4922Id?: (number|null);

        /** MCP4922_ASK DAC_Chanel */
        DAC_Chanel?: (number|null);

        /** MCP4922_ASK type */
        type?: (DECEL.MCP4922_message_type|null);

        /** MCP4922_ASK value */
        value?: (number|null);
    }

    /** Represents a MCP4922_ASK. */
    class MCP4922_ASK implements IMCP4922_ASK {

        /**
         * Constructs a new MCP4922_ASK.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IMCP4922_ASK);

        /** MCP4922_ASK MCP4922Id. */
        public MCP4922Id: number;

        /** MCP4922_ASK DAC_Chanel. */
        public DAC_Chanel: number;

        /** MCP4922_ASK type. */
        public type: DECEL.MCP4922_message_type;

        /** MCP4922_ASK value. */
        public value?: (number|null);

        /** MCP4922_ASK _value. */
        public _value?: "value";

        /**
         * Creates a new MCP4922_ASK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MCP4922_ASK instance
         */
        public static create(properties?: DECEL.IMCP4922_ASK): DECEL.MCP4922_ASK;

        /**
         * Encodes the specified MCP4922_ASK message. Does not implicitly {@link DECEL.MCP4922_ASK.verify|verify} messages.
         * @param message MCP4922_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IMCP4922_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MCP4922_ASK message, length delimited. Does not implicitly {@link DECEL.MCP4922_ASK.verify|verify} messages.
         * @param message MCP4922_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IMCP4922_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MCP4922_ASK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MCP4922_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.MCP4922_ASK;

        /**
         * Decodes a MCP4922_ASK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MCP4922_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.MCP4922_ASK;

        /**
         * Verifies a MCP4922_ASK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MCP4922_ASK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MCP4922_ASK
         */
        public static fromObject(object: { [k: string]: any }): DECEL.MCP4922_ASK;

        /**
         * Creates a plain object from a MCP4922_ASK message. Also converts values to other types if specified.
         * @param message MCP4922_ASK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.MCP4922_ASK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MCP4922_ASK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MCP4922_ASK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ANALOG_IN. */
    interface IANALOG_IN {

        /** ANALOG_IN ANALOG_INId */
        ANALOG_INId?: (number|null);

        /** ANALOG_IN value */
        value?: (number|null);
    }

    /** Represents a ANALOG_IN. */
    class ANALOG_IN implements IANALOG_IN {

        /**
         * Constructs a new ANALOG_IN.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IANALOG_IN);

        /** ANALOG_IN ANALOG_INId. */
        public ANALOG_INId: number;

        /** ANALOG_IN value. */
        public value: number;

        /**
         * Creates a new ANALOG_IN instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ANALOG_IN instance
         */
        public static create(properties?: DECEL.IANALOG_IN): DECEL.ANALOG_IN;

        /**
         * Encodes the specified ANALOG_IN message. Does not implicitly {@link DECEL.ANALOG_IN.verify|verify} messages.
         * @param message ANALOG_IN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IANALOG_IN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ANALOG_IN message, length delimited. Does not implicitly {@link DECEL.ANALOG_IN.verify|verify} messages.
         * @param message ANALOG_IN message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IANALOG_IN, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ANALOG_IN message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ANALOG_IN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.ANALOG_IN;

        /**
         * Decodes a ANALOG_IN message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ANALOG_IN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.ANALOG_IN;

        /**
         * Verifies a ANALOG_IN message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ANALOG_IN message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ANALOG_IN
         */
        public static fromObject(object: { [k: string]: any }): DECEL.ANALOG_IN;

        /**
         * Creates a plain object from a ANALOG_IN message. Also converts values to other types if specified.
         * @param message ANALOG_IN
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.ANALOG_IN, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ANALOG_IN to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ANALOG_IN
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DECEL_ASK. */
    interface IDECEL_ASK {

        /** DECEL_ASK gpioAsk */
        gpioAsk?: (DECEL.IGPIO_ASK|null);

        /** DECEL_ASK mcp4922Ask */
        mcp4922Ask?: (DECEL.IMCP4922_ASK|null);
    }

    /** Represents a DECEL_ASK. */
    class DECEL_ASK implements IDECEL_ASK {

        /**
         * Constructs a new DECEL_ASK.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IDECEL_ASK);

        /** DECEL_ASK gpioAsk. */
        public gpioAsk?: (DECEL.IGPIO_ASK|null);

        /** DECEL_ASK mcp4922Ask. */
        public mcp4922Ask?: (DECEL.IMCP4922_ASK|null);

        /** DECEL_ASK msg. */
        public msg?: ("gpioAsk"|"mcp4922Ask");

        /**
         * Creates a new DECEL_ASK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DECEL_ASK instance
         */
        public static create(properties?: DECEL.IDECEL_ASK): DECEL.DECEL_ASK;

        /**
         * Encodes the specified DECEL_ASK message. Does not implicitly {@link DECEL.DECEL_ASK.verify|verify} messages.
         * @param message DECEL_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IDECEL_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DECEL_ASK message, length delimited. Does not implicitly {@link DECEL.DECEL_ASK.verify|verify} messages.
         * @param message DECEL_ASK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IDECEL_ASK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DECEL_ASK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DECEL_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.DECEL_ASK;

        /**
         * Decodes a DECEL_ASK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DECEL_ASK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.DECEL_ASK;

        /**
         * Verifies a DECEL_ASK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DECEL_ASK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DECEL_ASK
         */
        public static fromObject(object: { [k: string]: any }): DECEL.DECEL_ASK;

        /**
         * Creates a plain object from a DECEL_ASK message. Also converts values to other types if specified.
         * @param message DECEL_ASK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.DECEL_ASK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DECEL_ASK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DECEL_ASK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DECEL_ANSW. */
    interface IDECEL_ANSW {

        /** DECEL_ANSW gpioAnsw */
        gpioAnsw?: (DECEL.IGPIO_ANSW|null);

        /** DECEL_ANSW analogInAnsw */
        analogInAnsw?: (DECEL.IANALOG_IN|null);
    }

    /** Represents a DECEL_ANSW. */
    class DECEL_ANSW implements IDECEL_ANSW {

        /**
         * Constructs a new DECEL_ANSW.
         * @param [properties] Properties to set
         */
        constructor(properties?: DECEL.IDECEL_ANSW);

        /** DECEL_ANSW gpioAnsw. */
        public gpioAnsw?: (DECEL.IGPIO_ANSW|null);

        /** DECEL_ANSW analogInAnsw. */
        public analogInAnsw?: (DECEL.IANALOG_IN|null);

        /** DECEL_ANSW msg. */
        public msg?: ("gpioAnsw"|"analogInAnsw");

        /**
         * Creates a new DECEL_ANSW instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DECEL_ANSW instance
         */
        public static create(properties?: DECEL.IDECEL_ANSW): DECEL.DECEL_ANSW;

        /**
         * Encodes the specified DECEL_ANSW message. Does not implicitly {@link DECEL.DECEL_ANSW.verify|verify} messages.
         * @param message DECEL_ANSW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DECEL.IDECEL_ANSW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DECEL_ANSW message, length delimited. Does not implicitly {@link DECEL.DECEL_ANSW.verify|verify} messages.
         * @param message DECEL_ANSW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DECEL.IDECEL_ANSW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DECEL_ANSW message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DECEL_ANSW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DECEL.DECEL_ANSW;

        /**
         * Decodes a DECEL_ANSW message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DECEL_ANSW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DECEL.DECEL_ANSW;

        /**
         * Verifies a DECEL_ANSW message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DECEL_ANSW message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DECEL_ANSW
         */
        public static fromObject(object: { [k: string]: any }): DECEL.DECEL_ANSW;

        /**
         * Creates a plain object from a DECEL_ANSW message. Also converts values to other types if specified.
         * @param message DECEL_ANSW
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DECEL.DECEL_ANSW, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DECEL_ANSW to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DECEL_ANSW
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
