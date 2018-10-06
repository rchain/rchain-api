/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.coop = (function() {

    /**
     * Namespace coop.
     * @exports coop
     * @namespace
     */
    var coop = {};

    coop.rchain = (function() {

        /**
         * Namespace rchain.
         * @memberof coop
         * @namespace
         */
        var rchain = {};

        rchain.node = (function() {

            /**
             * Namespace node.
             * @memberof coop.rchain
             * @namespace
             */
            var node = {};

            node.model = (function() {

                /**
                 * Namespace model.
                 * @memberof coop.rchain.node
                 * @namespace
                 */
                var model = {};

                model.Repl = (function() {

                    /**
                     * Constructs a new Repl service.
                     * @memberof coop.rchain.node.model
                     * @classdesc Represents a Repl
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function Repl(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (Repl.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Repl;

                    /**
                     * Creates new Repl service using the specified rpc implementation.
                     * @function create
                     * @memberof coop.rchain.node.model.Repl
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {Repl} RPC service. Useful where requests and/or responses are streamed.
                     */
                    Repl.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };

                    /**
                     * Callback as used by {@link coop.rchain.node.model.Repl#run}.
                     * @memberof coop.rchain.node.model.Repl
                     * @typedef RunCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {coop.rchain.node.model.ReplResponse} [response] ReplResponse
                     */

                    /**
                     * Calls Run.
                     * @function run
                     * @memberof coop.rchain.node.model.Repl
                     * @instance
                     * @param {coop.rchain.node.model.ICmdRequest} request CmdRequest message or plain object
                     * @param {coop.rchain.node.model.Repl.RunCallback} callback Node-style callback called with the error, if any, and ReplResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(Repl.prototype.run = function run(request, callback) {
                        return this.rpcCall(run, $root.coop.rchain.node.model.CmdRequest, $root.coop.rchain.node.model.ReplResponse, request, callback);
                    }, "name", { value: "Run" });

                    /**
                     * Calls Run.
                     * @function run
                     * @memberof coop.rchain.node.model.Repl
                     * @instance
                     * @param {coop.rchain.node.model.ICmdRequest} request CmdRequest message or plain object
                     * @returns {Promise<coop.rchain.node.model.ReplResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link coop.rchain.node.model.Repl#eval_}.
                     * @memberof coop.rchain.node.model.Repl
                     * @typedef EvalCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {coop.rchain.node.model.ReplResponse} [response] ReplResponse
                     */

                    /**
                     * Calls Eval.
                     * @function eval
                     * @memberof coop.rchain.node.model.Repl
                     * @instance
                     * @param {coop.rchain.node.model.IEvalRequest} request EvalRequest message or plain object
                     * @param {coop.rchain.node.model.Repl.EvalCallback} callback Node-style callback called with the error, if any, and ReplResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(Repl.prototype["eval"] = function eval_(request, callback) {
                        return this.rpcCall(eval_, $root.coop.rchain.node.model.EvalRequest, $root.coop.rchain.node.model.ReplResponse, request, callback);
                    }, "name", { value: "Eval" });

                    /**
                     * Calls Eval.
                     * @function eval
                     * @memberof coop.rchain.node.model.Repl
                     * @instance
                     * @param {coop.rchain.node.model.IEvalRequest} request EvalRequest message or plain object
                     * @returns {Promise<coop.rchain.node.model.ReplResponse>} Promise
                     * @variation 2
                     */

                    return Repl;
                })();

                model.CmdRequest = (function() {

                    /**
                     * Properties of a CmdRequest.
                     * @memberof coop.rchain.node.model
                     * @interface ICmdRequest
                     * @property {string|null} [line] CmdRequest line
                     */

                    /**
                     * Constructs a new CmdRequest.
                     * @memberof coop.rchain.node.model
                     * @classdesc Represents a CmdRequest.
                     * @implements ICmdRequest
                     * @constructor
                     * @param {coop.rchain.node.model.ICmdRequest=} [properties] Properties to set
                     */
                    function CmdRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CmdRequest line.
                     * @member {string} line
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @instance
                     */
                    CmdRequest.prototype.line = "";

                    /**
                     * Creates a new CmdRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {coop.rchain.node.model.ICmdRequest=} [properties] Properties to set
                     * @returns {coop.rchain.node.model.CmdRequest} CmdRequest instance
                     */
                    CmdRequest.create = function create(properties) {
                        return new CmdRequest(properties);
                    };

                    /**
                     * Encodes the specified CmdRequest message. Does not implicitly {@link coop.rchain.node.model.CmdRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {coop.rchain.node.model.ICmdRequest} message CmdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CmdRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.line != null && message.hasOwnProperty("line"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.line);
                        return writer;
                    };

                    /**
                     * Encodes the specified CmdRequest message, length delimited. Does not implicitly {@link coop.rchain.node.model.CmdRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {coop.rchain.node.model.ICmdRequest} message CmdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CmdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CmdRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.node.model.CmdRequest} CmdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CmdRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.node.model.CmdRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.line = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CmdRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.node.model.CmdRequest} CmdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CmdRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CmdRequest message.
                     * @function verify
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CmdRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.line != null && message.hasOwnProperty("line"))
                            if (!$util.isString(message.line))
                                return "line: string expected";
                        return null;
                    };

                    /**
                     * Creates a CmdRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.node.model.CmdRequest} CmdRequest
                     */
                    CmdRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.node.model.CmdRequest)
                            return object;
                        var message = new $root.coop.rchain.node.model.CmdRequest();
                        if (object.line != null)
                            message.line = String(object.line);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CmdRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @static
                     * @param {coop.rchain.node.model.CmdRequest} message CmdRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CmdRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.line = "";
                        if (message.line != null && message.hasOwnProperty("line"))
                            object.line = message.line;
                        return object;
                    };

                    /**
                     * Converts this CmdRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.node.model.CmdRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CmdRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CmdRequest;
                })();

                model.EvalRequest = (function() {

                    /**
                     * Properties of an EvalRequest.
                     * @memberof coop.rchain.node.model
                     * @interface IEvalRequest
                     * @property {string|null} [program] EvalRequest program
                     */

                    /**
                     * Constructs a new EvalRequest.
                     * @memberof coop.rchain.node.model
                     * @classdesc Represents an EvalRequest.
                     * @implements IEvalRequest
                     * @constructor
                     * @param {coop.rchain.node.model.IEvalRequest=} [properties] Properties to set
                     */
                    function EvalRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EvalRequest program.
                     * @member {string} program
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @instance
                     */
                    EvalRequest.prototype.program = "";

                    /**
                     * Creates a new EvalRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {coop.rchain.node.model.IEvalRequest=} [properties] Properties to set
                     * @returns {coop.rchain.node.model.EvalRequest} EvalRequest instance
                     */
                    EvalRequest.create = function create(properties) {
                        return new EvalRequest(properties);
                    };

                    /**
                     * Encodes the specified EvalRequest message. Does not implicitly {@link coop.rchain.node.model.EvalRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {coop.rchain.node.model.IEvalRequest} message EvalRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EvalRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.program != null && message.hasOwnProperty("program"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.program);
                        return writer;
                    };

                    /**
                     * Encodes the specified EvalRequest message, length delimited. Does not implicitly {@link coop.rchain.node.model.EvalRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {coop.rchain.node.model.IEvalRequest} message EvalRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EvalRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EvalRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.node.model.EvalRequest} EvalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EvalRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.node.model.EvalRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.program = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EvalRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.node.model.EvalRequest} EvalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EvalRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EvalRequest message.
                     * @function verify
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EvalRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.program != null && message.hasOwnProperty("program"))
                            if (!$util.isString(message.program))
                                return "program: string expected";
                        return null;
                    };

                    /**
                     * Creates an EvalRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.node.model.EvalRequest} EvalRequest
                     */
                    EvalRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.node.model.EvalRequest)
                            return object;
                        var message = new $root.coop.rchain.node.model.EvalRequest();
                        if (object.program != null)
                            message.program = String(object.program);
                        return message;
                    };

                    /**
                     * Creates a plain object from an EvalRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @static
                     * @param {coop.rchain.node.model.EvalRequest} message EvalRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EvalRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.program = "";
                        if (message.program != null && message.hasOwnProperty("program"))
                            object.program = message.program;
                        return object;
                    };

                    /**
                     * Converts this EvalRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.node.model.EvalRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EvalRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EvalRequest;
                })();

                model.ReplResponse = (function() {

                    /**
                     * Properties of a ReplResponse.
                     * @memberof coop.rchain.node.model
                     * @interface IReplResponse
                     * @property {string|null} [output] ReplResponse output
                     */

                    /**
                     * Constructs a new ReplResponse.
                     * @memberof coop.rchain.node.model
                     * @classdesc Represents a ReplResponse.
                     * @implements IReplResponse
                     * @constructor
                     * @param {coop.rchain.node.model.IReplResponse=} [properties] Properties to set
                     */
                    function ReplResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ReplResponse output.
                     * @member {string} output
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @instance
                     */
                    ReplResponse.prototype.output = "";

                    /**
                     * Creates a new ReplResponse instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {coop.rchain.node.model.IReplResponse=} [properties] Properties to set
                     * @returns {coop.rchain.node.model.ReplResponse} ReplResponse instance
                     */
                    ReplResponse.create = function create(properties) {
                        return new ReplResponse(properties);
                    };

                    /**
                     * Encodes the specified ReplResponse message. Does not implicitly {@link coop.rchain.node.model.ReplResponse.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {coop.rchain.node.model.IReplResponse} message ReplResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReplResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.output != null && message.hasOwnProperty("output"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.output);
                        return writer;
                    };

                    /**
                     * Encodes the specified ReplResponse message, length delimited. Does not implicitly {@link coop.rchain.node.model.ReplResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {coop.rchain.node.model.IReplResponse} message ReplResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReplResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ReplResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.node.model.ReplResponse} ReplResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReplResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.node.model.ReplResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.output = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ReplResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.node.model.ReplResponse} ReplResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReplResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ReplResponse message.
                     * @function verify
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReplResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.output != null && message.hasOwnProperty("output"))
                            if (!$util.isString(message.output))
                                return "output: string expected";
                        return null;
                    };

                    /**
                     * Creates a ReplResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.node.model.ReplResponse} ReplResponse
                     */
                    ReplResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.node.model.ReplResponse)
                            return object;
                        var message = new $root.coop.rchain.node.model.ReplResponse();
                        if (object.output != null)
                            message.output = String(object.output);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ReplResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @static
                     * @param {coop.rchain.node.model.ReplResponse} message ReplResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReplResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.output = "";
                        if (message.output != null && message.hasOwnProperty("output"))
                            object.output = message.output;
                        return object;
                    };

                    /**
                     * Converts this ReplResponse to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.node.model.ReplResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReplResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ReplResponse;
                })();

                return model;
            })();

            return node;
        })();

        return rchain;
    })();

    return coop;
})();

module.exports = $root;
