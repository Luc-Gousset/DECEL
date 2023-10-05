/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.DECEL = (function() {
    
        /**
         * Namespace DECEL.
         * @exports DECEL
         * @namespace
         */
        var DECEL = {};
    
        /**
         * MESSAGE_ANSW_ERROR enum.
         * @name DECEL.MESSAGE_ANSW_ERROR
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} KO=1 KO value
         */
        DECEL.MESSAGE_ANSW_ERROR = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "KO"] = 1;
            return values;
        })();
    
        /**
         * GPIO_MESSAGE_ASK_TYPE enum.
         * @name DECEL.GPIO_MESSAGE_ASK_TYPE
         * @enum {number}
         * @property {number} GET_STATE=0 GET_STATE value
         * @property {number} SET_STATE_Z=1 SET_STATE_Z value
         * @property {number} SET_STATE_O=2 SET_STATE_O value
         * @property {number} SET_STATE_I=3 SET_STATE_I value
         * @property {number} GET_READ_VALUE=4 GET_READ_VALUE value
         * @property {number} SET_OUTPUT=5 SET_OUTPUT value
         * @property {number} CLEAR_OUTPUT=6 CLEAR_OUTPUT value
         */
        DECEL.GPIO_MESSAGE_ASK_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GET_STATE"] = 0;
            values[valuesById[1] = "SET_STATE_Z"] = 1;
            values[valuesById[2] = "SET_STATE_O"] = 2;
            values[valuesById[3] = "SET_STATE_I"] = 3;
            values[valuesById[4] = "GET_READ_VALUE"] = 4;
            values[valuesById[5] = "SET_OUTPUT"] = 5;
            values[valuesById[6] = "CLEAR_OUTPUT"] = 6;
            return values;
        })();
    
        /**
         * GPIO_MESSAGE_ANSW_TYPE enum.
         * @name DECEL.GPIO_MESSAGE_ANSW_TYPE
         * @enum {number}
         * @property {number} VALUE=0 VALUE value
         * @property {number} DIRECTION=1 DIRECTION value
         */
        DECEL.GPIO_MESSAGE_ANSW_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "VALUE"] = 0;
            values[valuesById[1] = "DIRECTION"] = 1;
            return values;
        })();
    
        DECEL.GPIO_ASK = (function() {
    
            /**
             * Properties of a GPIO_ASK.
             * @memberof DECEL
             * @interface IGPIO_ASK
             * @property {number|null} [gpioId] GPIO_ASK gpioId
             * @property {DECEL.GPIO_MESSAGE_ASK_TYPE|null} [typeMessage] GPIO_ASK typeMessage
             */
    
            /**
             * Constructs a new GPIO_ASK.
             * @memberof DECEL
             * @classdesc Represents a GPIO_ASK.
             * @implements IGPIO_ASK
             * @constructor
             * @param {DECEL.IGPIO_ASK=} [properties] Properties to set
             */
            function GPIO_ASK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GPIO_ASK gpioId.
             * @member {number} gpioId
             * @memberof DECEL.GPIO_ASK
             * @instance
             */
            GPIO_ASK.prototype.gpioId = 0;
    
            /**
             * GPIO_ASK typeMessage.
             * @member {DECEL.GPIO_MESSAGE_ASK_TYPE} typeMessage
             * @memberof DECEL.GPIO_ASK
             * @instance
             */
            GPIO_ASK.prototype.typeMessage = 0;
    
            /**
             * Creates a new GPIO_ASK instance using the specified properties.
             * @function create
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {DECEL.IGPIO_ASK=} [properties] Properties to set
             * @returns {DECEL.GPIO_ASK} GPIO_ASK instance
             */
            GPIO_ASK.create = function create(properties) {
                return new GPIO_ASK(properties);
            };
    
            /**
             * Encodes the specified GPIO_ASK message. Does not implicitly {@link DECEL.GPIO_ASK.verify|verify} messages.
             * @function encode
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {DECEL.IGPIO_ASK} message GPIO_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GPIO_ASK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gpioId != null && Object.hasOwnProperty.call(message, "gpioId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gpioId);
                if (message.typeMessage != null && Object.hasOwnProperty.call(message, "typeMessage"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.typeMessage);
                return writer;
            };
    
            /**
             * Encodes the specified GPIO_ASK message, length delimited. Does not implicitly {@link DECEL.GPIO_ASK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {DECEL.IGPIO_ASK} message GPIO_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GPIO_ASK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GPIO_ASK message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.GPIO_ASK} GPIO_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GPIO_ASK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.GPIO_ASK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.gpioId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.typeMessage = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GPIO_ASK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.GPIO_ASK} GPIO_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GPIO_ASK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GPIO_ASK message.
             * @function verify
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GPIO_ASK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gpioId != null && message.hasOwnProperty("gpioId"))
                    if (!$util.isInteger(message.gpioId))
                        return "gpioId: integer expected";
                if (message.typeMessage != null && message.hasOwnProperty("typeMessage"))
                    switch (message.typeMessage) {
                    default:
                        return "typeMessage: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a GPIO_ASK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.GPIO_ASK} GPIO_ASK
             */
            GPIO_ASK.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.GPIO_ASK)
                    return object;
                var message = new $root.DECEL.GPIO_ASK();
                if (object.gpioId != null)
                    message.gpioId = object.gpioId | 0;
                switch (object.typeMessage) {
                default:
                    if (typeof object.typeMessage === "number") {
                        message.typeMessage = object.typeMessage;
                        break;
                    }
                    break;
                case "GET_STATE":
                case 0:
                    message.typeMessage = 0;
                    break;
                case "SET_STATE_Z":
                case 1:
                    message.typeMessage = 1;
                    break;
                case "SET_STATE_O":
                case 2:
                    message.typeMessage = 2;
                    break;
                case "SET_STATE_I":
                case 3:
                    message.typeMessage = 3;
                    break;
                case "GET_READ_VALUE":
                case 4:
                    message.typeMessage = 4;
                    break;
                case "SET_OUTPUT":
                case 5:
                    message.typeMessage = 5;
                    break;
                case "CLEAR_OUTPUT":
                case 6:
                    message.typeMessage = 6;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GPIO_ASK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {DECEL.GPIO_ASK} message GPIO_ASK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GPIO_ASK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.gpioId = 0;
                    object.typeMessage = options.enums === String ? "GET_STATE" : 0;
                }
                if (message.gpioId != null && message.hasOwnProperty("gpioId"))
                    object.gpioId = message.gpioId;
                if (message.typeMessage != null && message.hasOwnProperty("typeMessage"))
                    object.typeMessage = options.enums === String ? $root.DECEL.GPIO_MESSAGE_ASK_TYPE[message.typeMessage] === undefined ? message.typeMessage : $root.DECEL.GPIO_MESSAGE_ASK_TYPE[message.typeMessage] : message.typeMessage;
                return object;
            };
    
            /**
             * Converts this GPIO_ASK to JSON.
             * @function toJSON
             * @memberof DECEL.GPIO_ASK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GPIO_ASK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for GPIO_ASK
             * @function getTypeUrl
             * @memberof DECEL.GPIO_ASK
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GPIO_ASK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.GPIO_ASK";
            };
    
            return GPIO_ASK;
        })();
    
        DECEL.GPIO_ANSW = (function() {
    
            /**
             * Properties of a GPIO_ANSW.
             * @memberof DECEL
             * @interface IGPIO_ANSW
             * @property {number|null} [gpioId] GPIO_ANSW gpioId
             * @property {DECEL.GPIO_MESSAGE_ANSW_TYPE|null} [typeMessage] GPIO_ANSW typeMessage
             * @property {number|null} [value] GPIO_ANSW value
             */
    
            /**
             * Constructs a new GPIO_ANSW.
             * @memberof DECEL
             * @classdesc Represents a GPIO_ANSW.
             * @implements IGPIO_ANSW
             * @constructor
             * @param {DECEL.IGPIO_ANSW=} [properties] Properties to set
             */
            function GPIO_ANSW(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GPIO_ANSW gpioId.
             * @member {number} gpioId
             * @memberof DECEL.GPIO_ANSW
             * @instance
             */
            GPIO_ANSW.prototype.gpioId = 0;
    
            /**
             * GPIO_ANSW typeMessage.
             * @member {DECEL.GPIO_MESSAGE_ANSW_TYPE} typeMessage
             * @memberof DECEL.GPIO_ANSW
             * @instance
             */
            GPIO_ANSW.prototype.typeMessage = 0;
    
            /**
             * GPIO_ANSW value.
             * @member {number|null|undefined} value
             * @memberof DECEL.GPIO_ANSW
             * @instance
             */
            GPIO_ANSW.prototype.value = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * GPIO_ANSW _value.
             * @member {"value"|undefined} _value
             * @memberof DECEL.GPIO_ANSW
             * @instance
             */
            Object.defineProperty(GPIO_ANSW.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new GPIO_ANSW instance using the specified properties.
             * @function create
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {DECEL.IGPIO_ANSW=} [properties] Properties to set
             * @returns {DECEL.GPIO_ANSW} GPIO_ANSW instance
             */
            GPIO_ANSW.create = function create(properties) {
                return new GPIO_ANSW(properties);
            };
    
            /**
             * Encodes the specified GPIO_ANSW message. Does not implicitly {@link DECEL.GPIO_ANSW.verify|verify} messages.
             * @function encode
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {DECEL.IGPIO_ANSW} message GPIO_ANSW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GPIO_ANSW.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gpioId != null && Object.hasOwnProperty.call(message, "gpioId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gpioId);
                if (message.typeMessage != null && Object.hasOwnProperty.call(message, "typeMessage"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.typeMessage);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified GPIO_ANSW message, length delimited. Does not implicitly {@link DECEL.GPIO_ANSW.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {DECEL.IGPIO_ANSW} message GPIO_ANSW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GPIO_ANSW.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GPIO_ANSW message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.GPIO_ANSW} GPIO_ANSW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GPIO_ANSW.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.GPIO_ANSW();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.gpioId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.typeMessage = reader.int32();
                            break;
                        }
                    case 3: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GPIO_ANSW message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.GPIO_ANSW} GPIO_ANSW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GPIO_ANSW.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GPIO_ANSW message.
             * @function verify
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GPIO_ANSW.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.gpioId != null && message.hasOwnProperty("gpioId"))
                    if (!$util.isInteger(message.gpioId))
                        return "gpioId: integer expected";
                if (message.typeMessage != null && message.hasOwnProperty("typeMessage"))
                    switch (message.typeMessage) {
                    default:
                        return "typeMessage: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.value != null && message.hasOwnProperty("value")) {
                    properties._value = 1;
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                }
                return null;
            };
    
            /**
             * Creates a GPIO_ANSW message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.GPIO_ANSW} GPIO_ANSW
             */
            GPIO_ANSW.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.GPIO_ANSW)
                    return object;
                var message = new $root.DECEL.GPIO_ANSW();
                if (object.gpioId != null)
                    message.gpioId = object.gpioId | 0;
                switch (object.typeMessage) {
                default:
                    if (typeof object.typeMessage === "number") {
                        message.typeMessage = object.typeMessage;
                        break;
                    }
                    break;
                case "VALUE":
                case 0:
                    message.typeMessage = 0;
                    break;
                case "DIRECTION":
                case 1:
                    message.typeMessage = 1;
                    break;
                }
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a GPIO_ANSW message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {DECEL.GPIO_ANSW} message GPIO_ANSW
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GPIO_ANSW.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.gpioId = 0;
                    object.typeMessage = options.enums === String ? "VALUE" : 0;
                }
                if (message.gpioId != null && message.hasOwnProperty("gpioId"))
                    object.gpioId = message.gpioId;
                if (message.typeMessage != null && message.hasOwnProperty("typeMessage"))
                    object.typeMessage = options.enums === String ? $root.DECEL.GPIO_MESSAGE_ANSW_TYPE[message.typeMessage] === undefined ? message.typeMessage : $root.DECEL.GPIO_MESSAGE_ANSW_TYPE[message.typeMessage] : message.typeMessage;
                if (message.value != null && message.hasOwnProperty("value")) {
                    object.value = message.value;
                    if (options.oneofs)
                        object._value = "value";
                }
                return object;
            };
    
            /**
             * Converts this GPIO_ANSW to JSON.
             * @function toJSON
             * @memberof DECEL.GPIO_ANSW
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GPIO_ANSW.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for GPIO_ANSW
             * @function getTypeUrl
             * @memberof DECEL.GPIO_ANSW
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GPIO_ANSW.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.GPIO_ANSW";
            };
    
            return GPIO_ANSW;
        })();
    
        /**
         * MCP4922_message_type enum.
         * @name DECEL.MCP4922_message_type
         * @enum {number}
         * @property {number} SET_VALUE=0 SET_VALUE value
         * @property {number} SHUTDOWN=1 SHUTDOWN value
         */
        DECEL.MCP4922_message_type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET_VALUE"] = 0;
            values[valuesById[1] = "SHUTDOWN"] = 1;
            return values;
        })();
    
        DECEL.MCP4922_ASK = (function() {
    
            /**
             * Properties of a MCP4922_ASK.
             * @memberof DECEL
             * @interface IMCP4922_ASK
             * @property {number|null} [MCP4922Id] MCP4922_ASK MCP4922Id
             * @property {number|null} [DAC_Chanel] MCP4922_ASK DAC_Chanel
             * @property {DECEL.MCP4922_message_type|null} [type] MCP4922_ASK type
             * @property {number|null} [value] MCP4922_ASK value
             */
    
            /**
             * Constructs a new MCP4922_ASK.
             * @memberof DECEL
             * @classdesc Represents a MCP4922_ASK.
             * @implements IMCP4922_ASK
             * @constructor
             * @param {DECEL.IMCP4922_ASK=} [properties] Properties to set
             */
            function MCP4922_ASK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MCP4922_ASK MCP4922Id.
             * @member {number} MCP4922Id
             * @memberof DECEL.MCP4922_ASK
             * @instance
             */
            MCP4922_ASK.prototype.MCP4922Id = 0;
    
            /**
             * MCP4922_ASK DAC_Chanel.
             * @member {number} DAC_Chanel
             * @memberof DECEL.MCP4922_ASK
             * @instance
             */
            MCP4922_ASK.prototype.DAC_Chanel = 0;
    
            /**
             * MCP4922_ASK type.
             * @member {DECEL.MCP4922_message_type} type
             * @memberof DECEL.MCP4922_ASK
             * @instance
             */
            MCP4922_ASK.prototype.type = 0;
    
            /**
             * MCP4922_ASK value.
             * @member {number|null|undefined} value
             * @memberof DECEL.MCP4922_ASK
             * @instance
             */
            MCP4922_ASK.prototype.value = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * MCP4922_ASK _value.
             * @member {"value"|undefined} _value
             * @memberof DECEL.MCP4922_ASK
             * @instance
             */
            Object.defineProperty(MCP4922_ASK.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new MCP4922_ASK instance using the specified properties.
             * @function create
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {DECEL.IMCP4922_ASK=} [properties] Properties to set
             * @returns {DECEL.MCP4922_ASK} MCP4922_ASK instance
             */
            MCP4922_ASK.create = function create(properties) {
                return new MCP4922_ASK(properties);
            };
    
            /**
             * Encodes the specified MCP4922_ASK message. Does not implicitly {@link DECEL.MCP4922_ASK.verify|verify} messages.
             * @function encode
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {DECEL.IMCP4922_ASK} message MCP4922_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MCP4922_ASK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.MCP4922Id != null && Object.hasOwnProperty.call(message, "MCP4922Id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.MCP4922Id);
                if (message.DAC_Chanel != null && Object.hasOwnProperty.call(message, "DAC_Chanel"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.DAC_Chanel);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified MCP4922_ASK message, length delimited. Does not implicitly {@link DECEL.MCP4922_ASK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {DECEL.IMCP4922_ASK} message MCP4922_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MCP4922_ASK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MCP4922_ASK message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.MCP4922_ASK} MCP4922_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MCP4922_ASK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.MCP4922_ASK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.MCP4922Id = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.DAC_Chanel = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.type = reader.int32();
                            break;
                        }
                    case 4: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MCP4922_ASK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.MCP4922_ASK} MCP4922_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MCP4922_ASK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MCP4922_ASK message.
             * @function verify
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MCP4922_ASK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.MCP4922Id != null && message.hasOwnProperty("MCP4922Id"))
                    if (!$util.isInteger(message.MCP4922Id))
                        return "MCP4922Id: integer expected";
                if (message.DAC_Chanel != null && message.hasOwnProperty("DAC_Chanel"))
                    if (!$util.isInteger(message.DAC_Chanel))
                        return "DAC_Chanel: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.value != null && message.hasOwnProperty("value")) {
                    properties._value = 1;
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                }
                return null;
            };
    
            /**
             * Creates a MCP4922_ASK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.MCP4922_ASK} MCP4922_ASK
             */
            MCP4922_ASK.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.MCP4922_ASK)
                    return object;
                var message = new $root.DECEL.MCP4922_ASK();
                if (object.MCP4922Id != null)
                    message.MCP4922Id = object.MCP4922Id >>> 0;
                if (object.DAC_Chanel != null)
                    message.DAC_Chanel = object.DAC_Chanel >>> 0;
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "SET_VALUE":
                case 0:
                    message.type = 0;
                    break;
                case "SHUTDOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a MCP4922_ASK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {DECEL.MCP4922_ASK} message MCP4922_ASK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MCP4922_ASK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.MCP4922Id = 0;
                    object.DAC_Chanel = 0;
                    object.type = options.enums === String ? "SET_VALUE" : 0;
                }
                if (message.MCP4922Id != null && message.hasOwnProperty("MCP4922Id"))
                    object.MCP4922Id = message.MCP4922Id;
                if (message.DAC_Chanel != null && message.hasOwnProperty("DAC_Chanel"))
                    object.DAC_Chanel = message.DAC_Chanel;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.DECEL.MCP4922_message_type[message.type] === undefined ? message.type : $root.DECEL.MCP4922_message_type[message.type] : message.type;
                if (message.value != null && message.hasOwnProperty("value")) {
                    object.value = message.value;
                    if (options.oneofs)
                        object._value = "value";
                }
                return object;
            };
    
            /**
             * Converts this MCP4922_ASK to JSON.
             * @function toJSON
             * @memberof DECEL.MCP4922_ASK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MCP4922_ASK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for MCP4922_ASK
             * @function getTypeUrl
             * @memberof DECEL.MCP4922_ASK
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MCP4922_ASK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.MCP4922_ASK";
            };
    
            return MCP4922_ASK;
        })();
    
        DECEL.ANALOG_IN = (function() {
    
            /**
             * Properties of a ANALOG_IN.
             * @memberof DECEL
             * @interface IANALOG_IN
             * @property {number|null} [ANALOG_INId] ANALOG_IN ANALOG_INId
             * @property {number|null} [value] ANALOG_IN value
             */
    
            /**
             * Constructs a new ANALOG_IN.
             * @memberof DECEL
             * @classdesc Represents a ANALOG_IN.
             * @implements IANALOG_IN
             * @constructor
             * @param {DECEL.IANALOG_IN=} [properties] Properties to set
             */
            function ANALOG_IN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ANALOG_IN ANALOG_INId.
             * @member {number} ANALOG_INId
             * @memberof DECEL.ANALOG_IN
             * @instance
             */
            ANALOG_IN.prototype.ANALOG_INId = 0;
    
            /**
             * ANALOG_IN value.
             * @member {number} value
             * @memberof DECEL.ANALOG_IN
             * @instance
             */
            ANALOG_IN.prototype.value = 0;
    
            /**
             * Creates a new ANALOG_IN instance using the specified properties.
             * @function create
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {DECEL.IANALOG_IN=} [properties] Properties to set
             * @returns {DECEL.ANALOG_IN} ANALOG_IN instance
             */
            ANALOG_IN.create = function create(properties) {
                return new ANALOG_IN(properties);
            };
    
            /**
             * Encodes the specified ANALOG_IN message. Does not implicitly {@link DECEL.ANALOG_IN.verify|verify} messages.
             * @function encode
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {DECEL.IANALOG_IN} message ANALOG_IN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ANALOG_IN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ANALOG_INId != null && Object.hasOwnProperty.call(message, "ANALOG_INId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ANALOG_INId);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified ANALOG_IN message, length delimited. Does not implicitly {@link DECEL.ANALOG_IN.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {DECEL.IANALOG_IN} message ANALOG_IN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ANALOG_IN.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ANALOG_IN message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.ANALOG_IN} ANALOG_IN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ANALOG_IN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.ANALOG_IN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ANALOG_INId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ANALOG_IN message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.ANALOG_IN} ANALOG_IN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ANALOG_IN.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ANALOG_IN message.
             * @function verify
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ANALOG_IN.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ANALOG_INId != null && message.hasOwnProperty("ANALOG_INId"))
                    if (!$util.isInteger(message.ANALOG_INId))
                        return "ANALOG_INId: integer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };
    
            /**
             * Creates a ANALOG_IN message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.ANALOG_IN} ANALOG_IN
             */
            ANALOG_IN.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.ANALOG_IN)
                    return object;
                var message = new $root.DECEL.ANALOG_IN();
                if (object.ANALOG_INId != null)
                    message.ANALOG_INId = object.ANALOG_INId >>> 0;
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ANALOG_IN message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {DECEL.ANALOG_IN} message ANALOG_IN
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ANALOG_IN.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ANALOG_INId = 0;
                    object.value = 0;
                }
                if (message.ANALOG_INId != null && message.hasOwnProperty("ANALOG_INId"))
                    object.ANALOG_INId = message.ANALOG_INId;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this ANALOG_IN to JSON.
             * @function toJSON
             * @memberof DECEL.ANALOG_IN
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ANALOG_IN.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ANALOG_IN
             * @function getTypeUrl
             * @memberof DECEL.ANALOG_IN
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ANALOG_IN.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.ANALOG_IN";
            };
    
            return ANALOG_IN;
        })();
    
        DECEL.DECEL_ASK = (function() {
    
            /**
             * Properties of a DECEL_ASK.
             * @memberof DECEL
             * @interface IDECEL_ASK
             * @property {DECEL.IGPIO_ASK|null} [gpioAsk] DECEL_ASK gpioAsk
             * @property {DECEL.IMCP4922_ASK|null} [mcp4922Ask] DECEL_ASK mcp4922Ask
             */
    
            /**
             * Constructs a new DECEL_ASK.
             * @memberof DECEL
             * @classdesc Represents a DECEL_ASK.
             * @implements IDECEL_ASK
             * @constructor
             * @param {DECEL.IDECEL_ASK=} [properties] Properties to set
             */
            function DECEL_ASK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DECEL_ASK gpioAsk.
             * @member {DECEL.IGPIO_ASK|null|undefined} gpioAsk
             * @memberof DECEL.DECEL_ASK
             * @instance
             */
            DECEL_ASK.prototype.gpioAsk = null;
    
            /**
             * DECEL_ASK mcp4922Ask.
             * @member {DECEL.IMCP4922_ASK|null|undefined} mcp4922Ask
             * @memberof DECEL.DECEL_ASK
             * @instance
             */
            DECEL_ASK.prototype.mcp4922Ask = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * DECEL_ASK msg.
             * @member {"gpioAsk"|"mcp4922Ask"|undefined} msg
             * @memberof DECEL.DECEL_ASK
             * @instance
             */
            Object.defineProperty(DECEL_ASK.prototype, "msg", {
                get: $util.oneOfGetter($oneOfFields = ["gpioAsk", "mcp4922Ask"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new DECEL_ASK instance using the specified properties.
             * @function create
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {DECEL.IDECEL_ASK=} [properties] Properties to set
             * @returns {DECEL.DECEL_ASK} DECEL_ASK instance
             */
            DECEL_ASK.create = function create(properties) {
                return new DECEL_ASK(properties);
            };
    
            /**
             * Encodes the specified DECEL_ASK message. Does not implicitly {@link DECEL.DECEL_ASK.verify|verify} messages.
             * @function encode
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {DECEL.IDECEL_ASK} message DECEL_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DECEL_ASK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gpioAsk != null && Object.hasOwnProperty.call(message, "gpioAsk"))
                    $root.DECEL.GPIO_ASK.encode(message.gpioAsk, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.mcp4922Ask != null && Object.hasOwnProperty.call(message, "mcp4922Ask"))
                    $root.DECEL.MCP4922_ASK.encode(message.mcp4922Ask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DECEL_ASK message, length delimited. Does not implicitly {@link DECEL.DECEL_ASK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {DECEL.IDECEL_ASK} message DECEL_ASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DECEL_ASK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DECEL_ASK message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.DECEL_ASK} DECEL_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DECEL_ASK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.DECEL_ASK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.gpioAsk = $root.DECEL.GPIO_ASK.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.mcp4922Ask = $root.DECEL.MCP4922_ASK.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DECEL_ASK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.DECEL_ASK} DECEL_ASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DECEL_ASK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DECEL_ASK message.
             * @function verify
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DECEL_ASK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.gpioAsk != null && message.hasOwnProperty("gpioAsk")) {
                    properties.msg = 1;
                    {
                        var error = $root.DECEL.GPIO_ASK.verify(message.gpioAsk);
                        if (error)
                            return "gpioAsk." + error;
                    }
                }
                if (message.mcp4922Ask != null && message.hasOwnProperty("mcp4922Ask")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    {
                        var error = $root.DECEL.MCP4922_ASK.verify(message.mcp4922Ask);
                        if (error)
                            return "mcp4922Ask." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a DECEL_ASK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.DECEL_ASK} DECEL_ASK
             */
            DECEL_ASK.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.DECEL_ASK)
                    return object;
                var message = new $root.DECEL.DECEL_ASK();
                if (object.gpioAsk != null) {
                    if (typeof object.gpioAsk !== "object")
                        throw TypeError(".DECEL.DECEL_ASK.gpioAsk: object expected");
                    message.gpioAsk = $root.DECEL.GPIO_ASK.fromObject(object.gpioAsk);
                }
                if (object.mcp4922Ask != null) {
                    if (typeof object.mcp4922Ask !== "object")
                        throw TypeError(".DECEL.DECEL_ASK.mcp4922Ask: object expected");
                    message.mcp4922Ask = $root.DECEL.MCP4922_ASK.fromObject(object.mcp4922Ask);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DECEL_ASK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {DECEL.DECEL_ASK} message DECEL_ASK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DECEL_ASK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.gpioAsk != null && message.hasOwnProperty("gpioAsk")) {
                    object.gpioAsk = $root.DECEL.GPIO_ASK.toObject(message.gpioAsk, options);
                    if (options.oneofs)
                        object.msg = "gpioAsk";
                }
                if (message.mcp4922Ask != null && message.hasOwnProperty("mcp4922Ask")) {
                    object.mcp4922Ask = $root.DECEL.MCP4922_ASK.toObject(message.mcp4922Ask, options);
                    if (options.oneofs)
                        object.msg = "mcp4922Ask";
                }
                return object;
            };
    
            /**
             * Converts this DECEL_ASK to JSON.
             * @function toJSON
             * @memberof DECEL.DECEL_ASK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DECEL_ASK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for DECEL_ASK
             * @function getTypeUrl
             * @memberof DECEL.DECEL_ASK
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DECEL_ASK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.DECEL_ASK";
            };
    
            return DECEL_ASK;
        })();
    
        DECEL.DECEL_ANSW = (function() {
    
            /**
             * Properties of a DECEL_ANSW.
             * @memberof DECEL
             * @interface IDECEL_ANSW
             * @property {DECEL.IGPIO_ANSW|null} [gpioAnsw] DECEL_ANSW gpioAnsw
             * @property {DECEL.IANALOG_IN|null} [analogInAnsw] DECEL_ANSW analogInAnsw
             */
    
            /**
             * Constructs a new DECEL_ANSW.
             * @memberof DECEL
             * @classdesc Represents a DECEL_ANSW.
             * @implements IDECEL_ANSW
             * @constructor
             * @param {DECEL.IDECEL_ANSW=} [properties] Properties to set
             */
            function DECEL_ANSW(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DECEL_ANSW gpioAnsw.
             * @member {DECEL.IGPIO_ANSW|null|undefined} gpioAnsw
             * @memberof DECEL.DECEL_ANSW
             * @instance
             */
            DECEL_ANSW.prototype.gpioAnsw = null;
    
            /**
             * DECEL_ANSW analogInAnsw.
             * @member {DECEL.IANALOG_IN|null|undefined} analogInAnsw
             * @memberof DECEL.DECEL_ANSW
             * @instance
             */
            DECEL_ANSW.prototype.analogInAnsw = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * DECEL_ANSW msg.
             * @member {"gpioAnsw"|"analogInAnsw"|undefined} msg
             * @memberof DECEL.DECEL_ANSW
             * @instance
             */
            Object.defineProperty(DECEL_ANSW.prototype, "msg", {
                get: $util.oneOfGetter($oneOfFields = ["gpioAnsw", "analogInAnsw"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new DECEL_ANSW instance using the specified properties.
             * @function create
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {DECEL.IDECEL_ANSW=} [properties] Properties to set
             * @returns {DECEL.DECEL_ANSW} DECEL_ANSW instance
             */
            DECEL_ANSW.create = function create(properties) {
                return new DECEL_ANSW(properties);
            };
    
            /**
             * Encodes the specified DECEL_ANSW message. Does not implicitly {@link DECEL.DECEL_ANSW.verify|verify} messages.
             * @function encode
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {DECEL.IDECEL_ANSW} message DECEL_ANSW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DECEL_ANSW.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gpioAnsw != null && Object.hasOwnProperty.call(message, "gpioAnsw"))
                    $root.DECEL.GPIO_ANSW.encode(message.gpioAnsw, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.analogInAnsw != null && Object.hasOwnProperty.call(message, "analogInAnsw"))
                    $root.DECEL.ANALOG_IN.encode(message.analogInAnsw, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DECEL_ANSW message, length delimited. Does not implicitly {@link DECEL.DECEL_ANSW.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {DECEL.IDECEL_ANSW} message DECEL_ANSW message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DECEL_ANSW.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DECEL_ANSW message from the specified reader or buffer.
             * @function decode
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DECEL.DECEL_ANSW} DECEL_ANSW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DECEL_ANSW.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DECEL.DECEL_ANSW();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.gpioAnsw = $root.DECEL.GPIO_ANSW.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.analogInAnsw = $root.DECEL.ANALOG_IN.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DECEL_ANSW message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DECEL.DECEL_ANSW} DECEL_ANSW
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DECEL_ANSW.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DECEL_ANSW message.
             * @function verify
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DECEL_ANSW.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.gpioAnsw != null && message.hasOwnProperty("gpioAnsw")) {
                    properties.msg = 1;
                    {
                        var error = $root.DECEL.GPIO_ANSW.verify(message.gpioAnsw);
                        if (error)
                            return "gpioAnsw." + error;
                    }
                }
                if (message.analogInAnsw != null && message.hasOwnProperty("analogInAnsw")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    {
                        var error = $root.DECEL.ANALOG_IN.verify(message.analogInAnsw);
                        if (error)
                            return "analogInAnsw." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a DECEL_ANSW message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DECEL.DECEL_ANSW} DECEL_ANSW
             */
            DECEL_ANSW.fromObject = function fromObject(object) {
                if (object instanceof $root.DECEL.DECEL_ANSW)
                    return object;
                var message = new $root.DECEL.DECEL_ANSW();
                if (object.gpioAnsw != null) {
                    if (typeof object.gpioAnsw !== "object")
                        throw TypeError(".DECEL.DECEL_ANSW.gpioAnsw: object expected");
                    message.gpioAnsw = $root.DECEL.GPIO_ANSW.fromObject(object.gpioAnsw);
                }
                if (object.analogInAnsw != null) {
                    if (typeof object.analogInAnsw !== "object")
                        throw TypeError(".DECEL.DECEL_ANSW.analogInAnsw: object expected");
                    message.analogInAnsw = $root.DECEL.ANALOG_IN.fromObject(object.analogInAnsw);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DECEL_ANSW message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {DECEL.DECEL_ANSW} message DECEL_ANSW
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DECEL_ANSW.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.gpioAnsw != null && message.hasOwnProperty("gpioAnsw")) {
                    object.gpioAnsw = $root.DECEL.GPIO_ANSW.toObject(message.gpioAnsw, options);
                    if (options.oneofs)
                        object.msg = "gpioAnsw";
                }
                if (message.analogInAnsw != null && message.hasOwnProperty("analogInAnsw")) {
                    object.analogInAnsw = $root.DECEL.ANALOG_IN.toObject(message.analogInAnsw, options);
                    if (options.oneofs)
                        object.msg = "analogInAnsw";
                }
                return object;
            };
    
            /**
             * Converts this DECEL_ANSW to JSON.
             * @function toJSON
             * @memberof DECEL.DECEL_ANSW
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DECEL_ANSW.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for DECEL_ANSW
             * @function getTypeUrl
             * @memberof DECEL.DECEL_ANSW
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DECEL_ANSW.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DECEL.DECEL_ANSW";
            };
    
            return DECEL_ANSW;
        })();
    
        return DECEL;
    })();

    return $root;
});
