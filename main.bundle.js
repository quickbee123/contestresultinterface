/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ContestContract.js":
/*!****************************!*\
  !*** ./ContestContract.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestContract": () => (/* binding */ ContestContract)
/* harmony export */ });
const ContestContract ={
	"ABI version": 2,
	"header": ["pubkey", "time"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"title","type":"bytes"},
				{"name":"link","type":"bytes"},
				{"name":"hash","type":"uint256"},
				{"name":"juryAddr","type":"address"},
				{"name":"juryKeys","type":"uint256[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "setupContest",
			"inputs": [
				{"name":"startsIn","type":"uint16"},
				{"name":"lastsFor","type":"uint16"}
			],
			"outputs": [
			]
		},
		{
			"name": "setupJurors",
			"inputs": [
				{"name":"jurors","type":"address[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "rejectApplicant",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "submitWithContact",
			"inputs": [
				{"name":"participant","type":"address"},
				{"name":"forumLink","type":"bytes"},
				{"name":"fileLink","type":"bytes"},
				{"name":"hash","type":"uint256"},
				{"name":"contact","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "submit",
			"inputs": [
				{"name":"participant","type":"address"},
				{"name":"forumLink","type":"bytes"},
				{"name":"fileLink","type":"bytes"},
				{"name":"hash","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "openContest",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "closeContest",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "openVoting",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "closeVoting",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "rejectVote",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "voteFor",
			"inputs": [
				{"name":"id","type":"uint16"},
				{"name":"mark","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "voteForCommented",
			"inputs": [
				{"name":"id","type":"uint16"},
				{"name":"mark","type":"uint32"},
				{"name":"comment","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "abstain",
			"inputs": [
				{"name":"id","type":"uint16"},
				{"name":"comment","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "voteAgainst",
			"inputs": [
				{"name":"id","type":"uint16"},
				{"name":"comment","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "finalizeResults",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "votingEndsIn",
			"inputs": [
			],
			"outputs": [
				{"name":"daysLeft","type":"uint64"}
			]
		},
		{
			"name": "contestStartCountdown",
			"inputs": [
			],
			"outputs": [
				{"name":"secondsLeft","type":"int64"}
			]
		},
		{
			"name": "contestCountdown",
			"inputs": [
			],
			"outputs": [
				{"name":"secondsLeft","type":"int64"}
			]
		},
		{
			"name": "votingCountdown",
			"inputs": [
			],
			"outputs": [
				{"name":"secondsLeft","type":"int64"}
			]
		},
		{
			"name": "getId",
			"inputs": [
				{"name":"addr","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"uint16"}
			]
		},
		{
			"name": "listContenders",
			"inputs": [
			],
			"outputs": [
				{"name":"ids","type":"uint16[]"},
				{"name":"addresses","type":"address[]"}
			]
		},
		{
			"name": "getStatsFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"totalPoints","type":"uint64"},
				{"name":"avgHi","type":"uint32"},
				{"name":"avgLo","type":"uint32"},
				{"name":"jurorsVoted","type":"uint16"},
				{"name":"accepted","type":"uint16"},
				{"name":"abstained","type":"uint16"},
				{"name":"rejected","type":"uint16"}
			]
		},
		{
			"name": "getVotesPerJuror",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"jurorsFor","type":"address[]"},
				{"name":"marks","type":"uint32[]"},
				{"name":"commentsFor","type":"bytes[]"},
				{"name":"jurorsAbstained","type":"address[]"},
				{"name":"commentsAbstained","type":"bytes[]"},
				{"name":"jurorsAgainst","type":"address[]"},
				{"name":"commentsAgainst","type":"bytes[]"}
			]
		},
		{
			"name": "getJuryStats",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"id","type":"uint16"},{"name":"addr","type":"address"}],"name":"jury","type":"map(uint256,tuple)"}
			]
		},
		{
			"name": "getContestStats",
			"inputs": [
			],
			"outputs": [
				{"name":"totalScore","type":"uint64"},
				{"name":"avgHi","type":"uint32"},
				{"name":"avgLo","type":"uint32"},
				{"name":"jurorsVoted","type":"uint16"},
				{"name":"entries","type":"uint16"}
			]
		},
		{
			"name": "getContestInfo",
			"inputs": [
			],
			"outputs": [
				{"name":"title","type":"bytes"},
				{"name":"link","type":"bytes"},
				{"name":"hash","type":"uint256"},
				{"name":"juryAddr","type":"address"},
				{"name":"juryKeys","type":"uint256[]"},
				{"name":"juryAddresses","type":"address[]"},
				{"name":"maxVotingAttempts","type":"uint8"}
			]
		},
		{
			"name": "getContestProgress",
			"inputs": [
			],
			"outputs": [
				{"name":"votesCount","type":"uint64"},
				{"name":"contendersCount","type":"uint16"},
				{"name":"contestOpen","type":"bool"},
				{"name":"votingOpen","type":"bool"},
				{"name":"contestDeadline","type":"uint64"},
				{"name":"votingDeadline","type":"uint64"},
				{"name":"resultsFinalized","type":"bool"}
			]
		},
		{
			"name": "getInfoFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"addr","type":"address"},
				{"name":"forumLink","type":"bytes"},
				{"name":"fileLink","type":"bytes"},
				{"name":"hash","type":"uint256"},
				{"name":"appliedAt","type":"uint64"},
				{"name":"contact","type":"address"}
			]
		},
		{
			"name": "getContendersInfo",
			"inputs": [
			],
			"outputs": [
				{"name":"ids","type":"uint16[]"},
				{"name":"addrs","type":"address[]"},
				{"name":"forumLinks","type":"bytes[]"},
				{"name":"fileLinks","type":"bytes[]"},
				{"name":"hashes","type":"uint256[]"},
				{"name":"appliedAts","type":"uint64[]"},
				{"name":"contacts","type":"address[]"}
			]
		},
		{
			"name": "getVotes",
			"inputs": [
			],
			"outputs": [
				{"name":"votes","type":"uint64"}
			]
		},
		{
			"name": "getVotesFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"votes","type":"uint16"}
			]
		},
		{
			"name": "getTotalRatingFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"rating","type":"uint64"}
			]
		},
		{
			"name": "resultsFinalized",
			"inputs": [
			],
			"outputs": [
				{"name":"flag","type":"bool"}
			]
		},
		{
			"name": "getFinalStatusFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"status","type":"bool"}
			]
		},
		{
			"name": "getFinalStatus",
			"inputs": [
			],
			"outputs": [
				{"name":"status","type":"bool[]"}
			]
		},
		{
			"name": "getFinalContestStats",
			"inputs": [
			],
			"outputs": [
				{"name":"totalScore","type":"uint64"},
				{"name":"avgHi","type":"uint32"},
				{"name":"avgLo","type":"uint32"},
				{"name":"jurorsVoted","type":"uint16"},
				{"name":"entries","type":"uint16"},
				{"name":"passed","type":"uint16"},
				{"name":"rejected","type":"uint16"}
			]
		},
		{
			"name": "getFinalStatsFor",
			"inputs": [
				{"name":"id","type":"uint16"}
			],
			"outputs": [
				{"name":"status","type":"bool"},
				{"name":"totalPoints","type":"uint64"},
				{"name":"avgHi","type":"uint32"},
				{"name":"avgLo","type":"uint32"},
				{"name":"jurorsVoted","type":"uint16"},
				{"name":"accepted","type":"uint16"},
				{"name":"abstained","type":"uint16"},
				{"name":"rejected","type":"uint16"}
			]
		},
		{
			"name": "getFinalVotingData",
			"inputs": [
			],
			"outputs": [
				{"name":"ids","type":"uint16[]"},
				{"name":"juryAddresses","type":"address[]"},
				{"name":"statuses","type":"bool[]"},
				{"name":"totalRatings","type":"uint64[]"},
				{"name":"jurorsVoted","type":"uint16[]"},
				{"name":"votesFor","type":"uint16[]"},
				{"name":"votesAbstained","type":"uint16[]"},
				{"name":"votesAgainst","type":"uint16[]"}
			]
		},
		{
			"name": "transfer",
			"inputs": [
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint64"},
				{"name":"bounce","type":"bool"},
				{"name":"flags","type":"uint16"}
			],
			"outputs": [
			]
		},
		{
			"name": "forceContest",
			"inputs": [
				{"name":"flag","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "forceVoting",
			"inputs": [
				{"name":"flag","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "forceFinalize",
			"inputs": [
				{"name":"flag","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "setContestDeadline",
			"inputs": [
				{"name":"time","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "setVotingDeadline",
			"inputs": [
				{"name":"time","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "upgrade",
			"inputs": [
				{"name":"c","type":"cell"}
			],
			"outputs": [
			]
		}
	],
	"data": [
		{"key":1,"name":"debugNonce","type":"uint256"}
	],
	"events": [
	]
}

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/account.js":
/*!******************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/account.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = exports.AccountError = void 0;
const modules_1 = __webpack_require__(/*! ./modules */ "./node_modules/@tonclient/core/dist/modules.js");
const client_1 = __webpack_require__(/*! ./client */ "./node_modules/@tonclient/core/dist/client.js");
class AccountError extends Error {
    static missingTVC() {
        return new AccountError("Can't calculate deploy params: missing required TVC.");
    }
}
exports.AccountError = AccountError;
class Account {
    constructor(contract, options) {
        var _a, _b, _c, _d;
        this.contract = contract;
        this.syncLastTransLt = null;
        this.client = (_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_1.TonClient.default;
        this.abi = modules_1.abiContract(contract.abi);
        this.signer = (_b = options === null || options === void 0 ? void 0 : options.signer) !== null && _b !== void 0 ? _b : modules_1.signerNone();
        this.address = (_c = options === null || options === void 0 ? void 0 : options.address) !== null && _c !== void 0 ? _c : null;
        this.initData = (_d = options === null || options === void 0 ? void 0 : options.initData) !== null && _d !== void 0 ? _d : null;
        this.cachedBoc = null;
    }
    static set giver(giver) {
        this._giver = giver;
    }
    static createGiver() {
        const giver = new Account(GiverContract, {
            client: client_1.TonClient.default,
            address: GiverContract.defaultAddress,
            signer: modules_1.signerKeys(GiverContract.defaultKeys),
        });
        return (address, value) => __awaiter(this, void 0, void 0, function* () {
            yield giver.run("sendTransaction", {
                dest: address,
                value,
                bounce: false,
            });
        });
    }
    static get giver() {
        if (this._giver === null) {
            this._giver = this.createGiver();
        }
        return this._giver;
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            let address = this.address;
            if (address === null) {
                const deployParams = this.getParamsOfDeployMessage({
                    initFunctionName: null,
                });
                address = (yield this.client.abi.encode_message(deployParams)).address;
                this.address = address;
            }
            return address;
        });
    }
    getParamsOfDeployMessage(options) {
        var _a;
        if (!this.contract.tvc) {
            throw AccountError.missingTVC();
        }
        const params = {
            abi: this.abi,
            signer: this.signer,
            deploy_set: {
                tvc: this.contract.tvc,
            },
        };
        if (this.initData) {
            params.deploy_set.initial_data = this.initData;
        }
        if ((options === null || options === void 0 ? void 0 : options.initFunctionName) !== null) {
            params.call_set = {
                function_name: (_a = options === null || options === void 0 ? void 0 : options.initFunctionName) !== null && _a !== void 0 ? _a : "constructor",
            };
            if ((options === null || options === void 0 ? void 0 : options.initInput) !== undefined) {
                params.call_set.input = options.initInput;
            }
        }
        return params;
    }
    /**
     * Deploys account into network
     * @param options
     */
    deploy(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const deployParams = this.getParamsOfDeployMessage(options);
            const useGiver = options === null || options === void 0 ? void 0 : options.useGiver;
            const giver = useGiver === true ? Account.giver : useGiver;
            this.address = (yield this.client.abi.encode_message(deployParams)).address;
            if (giver) {
                yield giver(this.address, 10000000000);
            }
            const result = yield this.client.processing.process_message({
                message_encode_params: deployParams,
                send_events: false,
            });
            this.needSyncWithTransaction(result.transaction);
            return result;
        });
    }
    /**
     * Process message on network and returns detailed information
     * about results including produced transaction and messages.
     * @param functionName
     * @param input
     * @param options
     */
    run(functionName, input, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.client.processing.process_message({
                message_encode_params: {
                    address: yield this.getAddress(),
                    abi: this.abi,
                    signer: (_a = options === null || options === void 0 ? void 0 : options.signer) !== null && _a !== void 0 ? _a : this.signer,
                    call_set: {
                        function_name: functionName,
                        input,
                    },
                },
                send_events: false,
            }));
            this.needSyncWithTransaction(result.transaction);
            return result;
        });
    }
    /**
     * Evaluates message on local TVM and returns decoded output
     * @param functionName
     * @param input
     * @param options
     */
    runLocal(functionName, input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.client.abi.encode_message({
                address: yield this.getAddress(),
                abi: this.abi,
                signer: this.signer,
                call_set: {
                    function_name: functionName,
                    input,
                },
            });
            let result;
            if (options === null || options === void 0 ? void 0 : options.performAllChecks) {
                result = yield this.client.tvm.run_executor({
                    account: modules_1.accountForExecutorAccount(yield this.boc()),
                    abi: this.abi,
                    message: message.message,
                    return_updated_account: true,
                });
            }
            else {
                result = (yield this.client.tvm.run_tvm({
                    account: yield this.boc(),
                    abi: this.abi,
                    message: message.message,
                    return_updated_account: true,
                }));
            }
            if (result.account) {
                this.cachedBoc = result.account;
            }
            return result;
        });
    }
    needSyncWithTransaction(transaction) {
        if (!transaction.aborted && transaction.lt) {
            this.syncLastTransLt = transaction.lt;
            this.cachedBoc = null;
        }
    }
    /**
     * Returns raw data of the account in form of BOC.
     */
    boc() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cachedBoc) {
                return this.cachedBoc;
            }
            const address = yield this.getAddress();
            const net = this.client.net;
            if (this.syncLastTransLt) {
                const accounts = yield net.query_collection({
                    collection: "accounts",
                    filter: {
                        id: { eq: address },
                        last_trans_lt: { ge: this.syncLastTransLt },
                    },
                    result: "boc",
                });
                if (accounts.result.length > 0) {
                    const boc = accounts.result[0].boc;
                    this.syncLastTransLt = null;
                    this.cachedBoc = boc;
                    return boc;
                }
            }
            const boc = (yield net.wait_for_collection({
                collection: "accounts",
                filter: { id: { eq: this.address } },
                result: "boc",
                timeout: 1000,
            })).result.boc;
            this.cachedBoc = boc;
            return boc;
        });
    }
    /**
     * Drops all cached and local data.
     */
    refresh() {
        this.cachedBoc = null;
    }
    /**
     * Returns parsed data of the account.
     */
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.boc.parse_account({
                boc: yield this.boc(),
            })).parsed;
        });
    }
    /**
     * Free all internal resources related to this instance
     * and allocated inside core.
     *
     * It is a good practice to call this method when you have finished
     * with this Account object.
     *
     * Note that this instance still fully operable.
     * So you can continue to work with this instance.
     */
    free() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Account = Account;
Account._giver = null;
const GiverContract = {
    abi: {
        "ABI version": 2,
        header: ["time", "expire"],
        functions: [
            {
                name: "sendTransaction",
                inputs: [
                    {
                        "name": "dest",
                        "type": "address",
                    },
                    {
                        "name": "value",
                        "type": "uint128",
                    },
                    {
                        "name": "bounce",
                        "type": "bool",
                    },
                ],
                outputs: [],
            },
            {
                name: "getMessages",
                inputs: [],
                outputs: [
                    {
                        components: [
                            {
                                name: "hash",
                                type: "uint256",
                            },
                            {
                                name: "expireAt",
                                type: "uint64",
                            },
                        ],
                        name: "messages",
                        type: "tuple[]",
                    },
                ],
            },
            {
                name: "upgrade",
                inputs: [
                    {
                        name: "newcode",
                        type: "cell",
                    },
                ],
                outputs: [],
            },
            {
                name: "constructor",
                inputs: [],
                outputs: [],
            },
        ],
        data: [],
        events: [],
    },
    tvc: "",
    defaultAddress: "0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5",
    defaultKeys: {
        "public": "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",
        "secret": "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
    },
};
//# sourceMappingURL=account.js.map

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/bin.js":
/*!**************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/bin.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = exports.destroyContext = exports.createContext = exports.useLibrary = exports.ResponseType = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@tonclient/core/dist/errors.js");
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Success"] = 0] = "Success";
    ResponseType[ResponseType["Error"] = 1] = "Error";
    ResponseType[ResponseType["Nop"] = 2] = "Nop";
    ResponseType[ResponseType["AppRequest"] = 3] = "AppRequest";
    ResponseType[ResponseType["AppNotify"] = 4] = "AppNotify";
    ResponseType[ResponseType["Custom"] = 100] = "Custom";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
let loading = null;
let loadError = null;
let library = null;
const requests = new Map();
let nextRequestId = 1;
let contextCount = 0;
let responseHandlerAssigned = false;
function checkResponseHandler() {
    const mustBeAssigned = (contextCount > 0) || (requests.size > 0);
    if (responseHandlerAssigned !== mustBeAssigned) {
        if (mustBeAssigned) {
            library === null || library === void 0 ? void 0 : library.setResponseHandler(handleLibraryResponse);
        }
        else {
            library === null || library === void 0 ? void 0 : library.setResponseHandler();
        }
        responseHandlerAssigned = mustBeAssigned;
    }
}
function useLibrary(loader) {
    loading = [];
    loader().then((lib, error) => {
        const saveLoading = loading;
        loading = null;
        if (lib) {
            library = lib;
            saveLoading === null || saveLoading === void 0 ? void 0 : saveLoading.forEach(x => x.resolve(lib));
        }
        else {
            loadError = error || null;
            saveLoading === null || saveLoading === void 0 ? void 0 : saveLoading.forEach(x => x.reject(error));
        }
    });
}
exports.useLibrary = useLibrary;
function createContext(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const lib = library || (yield loadRequired());
        contextCount += 1;
        return parseResult(yield lib.createContext(JSON.stringify(config)));
    });
}
exports.createContext = createContext;
function destroyContext(context) {
    contextCount = Math.max(contextCount - 1, 0);
    checkResponseHandler();
    library === null || library === void 0 ? void 0 : library.destroyContext(context);
}
exports.destroyContext = destroyContext;
function request(context, functionName, functionParams, responseHandler) {
    return __awaiter(this, void 0, void 0, function* () {
        const lib = library || (yield loadRequired());
        return new Promise((resolve, reject) => {
            const request = {
                resolve,
                reject,
                responseHandler,
            };
            const requestId = generateRequestId();
            requests.set(requestId, request);
            checkResponseHandler();
            const paramsJson = (functionParams === undefined) || (functionParams === null)
                ? ""
                : JSON.stringify(functionParams);
            lib.sendRequest(context, requestId, functionName, paramsJson);
        });
    });
}
exports.request = request;
function loadRequired() {
    if (library !== null) {
        return Promise.resolve(library);
    }
    if (loadError !== null) {
        return Promise.reject(loadError);
    }
    if (loading === null) {
        return Promise.reject(new errors_1.TonClientError(1, "TON Client binary library isn't set."));
    }
    return new Promise((resolve, reject) => {
        loading === null || loading === void 0 ? void 0 : loading.push({
            resolve,
            reject,
        });
    });
}
function generateRequestId() {
    const id = nextRequestId;
    do {
        nextRequestId += 1;
        if (nextRequestId >= Number.MAX_SAFE_INTEGER) {
            nextRequestId = 1;
        }
    } while (requests.has(nextRequestId));
    return id;
}
function handleLibraryResponse(requestId, paramsJson, responseType, finished) {
    const request = requests.get(requestId);
    if (!request) {
        return;
    }
    if (finished) {
        requests.delete(requestId);
        checkResponseHandler();
    }
    const params = paramsJson !== "" ? JSON.parse(paramsJson) : undefined;
    switch (responseType) {
        case ResponseType.Success:
            request.resolve(params);
            break;
        case ResponseType.Error:
            request.reject(params);
            break;
        default:
            const isAppObjectOrCustom = responseType === ResponseType.AppNotify
                || responseType === ResponseType.AppRequest
                || responseType >= ResponseType.Custom;
            if (isAppObjectOrCustom && request.responseHandler) {
                request.responseHandler(params, responseType);
            }
    }
}
function parseResult(resultJson) {
    const result = JSON.parse(resultJson);
    if ("error" in result) {
        throw new errors_1.TonClientError(result.error.code, result.error.message, result.error.data);
    }
    return result.result;
}
//# sourceMappingURL=bin.js.map

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/client.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/client.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TonClient = void 0;
const modules_1 = __webpack_require__(/*! ./modules */ "./node_modules/@tonclient/core/dist/modules.js");
const bin_1 = __webpack_require__(/*! ./bin */ "./node_modules/@tonclient/core/dist/bin.js");
class TonClient {
    constructor(config) {
        this.context = null;
        this.config = config !== null && config !== void 0 ? config : {};
        this.client = new modules_1.ClientModule(this);
        this.crypto = new modules_1.CryptoModule(this);
        this.abi = new modules_1.AbiModule(this);
        this.boc = new modules_1.BocModule(this);
        this.processing = new modules_1.ProcessingModule(this);
        this.utils = new modules_1.UtilsModule(this);
        this.net = new modules_1.NetModule(this);
        this.tvm = new modules_1.TvmModule(this);
    }
    static set default(client) {
        this._default = client;
    }
    static get default() {
        if (this._default === null) {
            this._default = new TonClient(this._defaultConfig);
        }
        return this._default;
    }
    static set defaultConfig(config) {
        this._defaultConfig = config;
    }
    static get defaultConfig() {
        return this._defaultConfig;
    }
    static useBinaryLibrary(loader) {
        bin_1.useLibrary(loader);
    }
    static toKey(d) {
        return toHex(d, 256);
    }
    static toHash64(d) {
        return toHex(d, 64);
    }
    static toHash128(d) {
        return toHex(d, 128);
    }
    static toHash256(d) {
        return toHex(d, 256);
    }
    static toHash512(d) {
        return toHex(d, 512);
    }
    static toHex(dec, bits = 0) {
        return toHex(dec, bits);
    }
    close() {
        const context = this.context;
        if (context !== null) {
            this.context = null;
            bin_1.destroyContext(context);
        }
    }
    request(functionName, functionParams, responseHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            let context;
            if (this.context !== null) {
                context = this.context;
            }
            else {
                context = yield bin_1.createContext(this.config);
                this.context = context;
            }
            return bin_1.request(context, functionName, functionParams, responseHandler !== null && responseHandler !== void 0 ? responseHandler : (() => {
            }));
        });
    }
    resolve_app_request(app_request_id, result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (app_request_id) {
                yield this.client.resolve_app_request({ app_request_id, result: { type: "Ok", result } });
            }
        });
    }
    reject_app_request(app_request_id, error) {
        return __awaiter(this, void 0, void 0, function* () {
            if (app_request_id) {
                yield this.client.resolve_app_request({
                    app_request_id,
                    result: { type: "Error", text: error.message }
                });
            }
        });
    }
}
exports.TonClient = TonClient;
TonClient._defaultConfig = {
    network: {
        endpoints: ["main.ton.dev"],
    },
};
TonClient._default = null;
// Converts value to hex
function toHex(value, bits) {
    let hex;
    if (typeof value === 'number' || typeof value === 'bigint') {
        hex = value.toString(16);
    }
    else if (typeof value === 'string') {
        if (value.startsWith('0x')) {
            hex = value.substr(2);
        }
        else {
            hex = decToHex(value);
        }
    }
    else {
        hex = value.toString();
    }
    let len = bits / 4;
    while (hex.length > len && hex.startsWith('0')) {
        hex = hex.substr(1);
    }
    return hex.padStart(len, '0');
}
function decToHex(dec) {
    var _a;
    let bigNum = [];
    for (let i = 0; i < dec.length; i += 1) {
        const d = ((_a = dec.codePointAt(i)) !== null && _a !== void 0 ? _a : 0) - 48;
        const mul8 = shl(bigNum, 3);
        const mul2 = shl(bigNum, 1);
        const mul10 = add(mul8, mul2);
        bigNum = add(mul10, [d]);
    }
    let hex = '';
    for (let i = bigNum.length - 1; i >= 0; i -= 1) {
        hex += bigNum[i].toString(16).padStart(4, '0');
    }
    return hex;
}
function shl(bigNum, bits) {
    let rest = 0;
    const result = [];
    for (let i = 0; i < bigNum.length; i += 1) {
        let v = (bigNum[i] << bits) + rest;
        result.push(v & 0xFFFF);
        rest = (v >> 16) & 0xFFFF;
    }
    if (rest > 0) {
        result.push(rest);
    }
    return result;
}
function add(a, b) {
    let rest = 0;
    const result = [];
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i += 1) {
        let v = (i < a.length ? a[i] : 0) + (i < b.length ? b[i] : 0) + rest;
        result.push(v & 0xFFFF);
        rest = (v >> 16) & 0xFFFF;
    }
    if (rest > 0) {
        result.push(rest);
    }
    return result;
}
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/errors.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/errors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TonClientError = void 0;
class TonClientError extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.data = data;
    }
}
exports.TonClientError = TonClientError;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./modules */ "./node_modules/@tonclient/core/dist/modules.js"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./node_modules/@tonclient/core/dist/client.js"), exports);
__exportStar(__webpack_require__(/*! ./account */ "./node_modules/@tonclient/core/dist/account.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@tonclient/core/dist/modules.js":
/*!******************************************************!*\
  !*** ./node_modules/@tonclient/core/dist/modules.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountForExecutorNone = exports.TvmErrorCode = exports.UtilsModule = exports.addressStringFormatBase64 = exports.addressStringFormatHex = exports.addressStringFormatAccountId = exports.ProcessingModule = exports.processingEventMessageExpired = exports.processingEventFetchNextBlockFailed = exports.processingEventWillFetchNextBlock = exports.processingEventSendFailed = exports.processingEventDidSend = exports.processingEventWillSend = exports.processingEventFetchFirstBlockFailed = exports.processingEventWillFetchFirstBlock = exports.ProcessingErrorCode = exports.BocModule = exports.builderOpCellBoc = exports.builderOpCell = exports.builderOpBitString = exports.builderOpInteger = exports.BocErrorCode = exports.bocCacheTypeUnpinned = exports.bocCacheTypePinned = exports.AbiModule = exports.messageSourceEncodingParams = exports.messageSourceEncoded = exports.stateInitSourceTvc = exports.stateInitSourceStateInit = exports.stateInitSourceMessage = exports.MessageBodyType = exports.signerSigningBox = exports.signerKeys = exports.signerExternal = exports.signerNone = exports.abiSerialized = exports.abiHandle = exports.abiJson = exports.abiContract = exports.AbiErrorCode = exports.CryptoModule = exports.resultOfAppSigningBoxSign = exports.resultOfAppSigningBoxGetPublicKey = exports.paramsOfAppSigningBoxSign = exports.paramsOfAppSigningBoxGetPublicKey = exports.CryptoErrorCode = exports.ClientModule = exports.appRequestResultOk = exports.appRequestResultError = exports.ClientErrorCode = void 0;
exports.DebotModule = exports.resultOfAppDebotBrowserInvokeDebot = exports.resultOfAppDebotBrowserGetSigningBox = exports.resultOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserSend = exports.paramsOfAppDebotBrowserInvokeDebot = exports.paramsOfAppDebotBrowserGetSigningBox = exports.paramsOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserShowAction = exports.paramsOfAppDebotBrowserSwitchCompleted = exports.paramsOfAppDebotBrowserSwitch = exports.paramsOfAppDebotBrowserLog = exports.DebotErrorCode = exports.NetModule = exports.AggregationFn = exports.paramsOfQueryOperationAggregateCollection = exports.paramsOfQueryOperationWaitForCollection = exports.paramsOfQueryOperationQueryCollection = exports.SortDirection = exports.NetErrorCode = exports.TvmModule = exports.accountForExecutorAccount = exports.accountForExecutorUninit = void 0;
// client module
var ClientErrorCode;
(function (ClientErrorCode) {
    ClientErrorCode[ClientErrorCode["NotImplemented"] = 1] = "NotImplemented";
    ClientErrorCode[ClientErrorCode["InvalidHex"] = 2] = "InvalidHex";
    ClientErrorCode[ClientErrorCode["InvalidBase64"] = 3] = "InvalidBase64";
    ClientErrorCode[ClientErrorCode["InvalidAddress"] = 4] = "InvalidAddress";
    ClientErrorCode[ClientErrorCode["CallbackParamsCantBeConvertedToJson"] = 5] = "CallbackParamsCantBeConvertedToJson";
    ClientErrorCode[ClientErrorCode["WebsocketConnectError"] = 6] = "WebsocketConnectError";
    ClientErrorCode[ClientErrorCode["WebsocketReceiveError"] = 7] = "WebsocketReceiveError";
    ClientErrorCode[ClientErrorCode["WebsocketSendError"] = 8] = "WebsocketSendError";
    ClientErrorCode[ClientErrorCode["HttpClientCreateError"] = 9] = "HttpClientCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestCreateError"] = 10] = "HttpRequestCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestSendError"] = 11] = "HttpRequestSendError";
    ClientErrorCode[ClientErrorCode["HttpRequestParseError"] = 12] = "HttpRequestParseError";
    ClientErrorCode[ClientErrorCode["CallbackNotRegistered"] = 13] = "CallbackNotRegistered";
    ClientErrorCode[ClientErrorCode["NetModuleNotInit"] = 14] = "NetModuleNotInit";
    ClientErrorCode[ClientErrorCode["InvalidConfig"] = 15] = "InvalidConfig";
    ClientErrorCode[ClientErrorCode["CannotCreateRuntime"] = 16] = "CannotCreateRuntime";
    ClientErrorCode[ClientErrorCode["InvalidContextHandle"] = 17] = "InvalidContextHandle";
    ClientErrorCode[ClientErrorCode["CannotSerializeResult"] = 18] = "CannotSerializeResult";
    ClientErrorCode[ClientErrorCode["CannotSerializeError"] = 19] = "CannotSerializeError";
    ClientErrorCode[ClientErrorCode["CannotConvertJsValueToJson"] = 20] = "CannotConvertJsValueToJson";
    ClientErrorCode[ClientErrorCode["CannotReceiveSpawnedResult"] = 21] = "CannotReceiveSpawnedResult";
    ClientErrorCode[ClientErrorCode["SetTimerError"] = 22] = "SetTimerError";
    ClientErrorCode[ClientErrorCode["InvalidParams"] = 23] = "InvalidParams";
    ClientErrorCode[ClientErrorCode["ContractsAddressConversionFailed"] = 24] = "ContractsAddressConversionFailed";
    ClientErrorCode[ClientErrorCode["UnknownFunction"] = 25] = "UnknownFunction";
    ClientErrorCode[ClientErrorCode["AppRequestError"] = 26] = "AppRequestError";
    ClientErrorCode[ClientErrorCode["NoSuchRequest"] = 27] = "NoSuchRequest";
    ClientErrorCode[ClientErrorCode["CanNotSendRequestResult"] = 28] = "CanNotSendRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotReceiveRequestResult"] = 29] = "CanNotReceiveRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotParseRequestResult"] = 30] = "CanNotParseRequestResult";
    ClientErrorCode[ClientErrorCode["UnexpectedCallbackResponse"] = 31] = "UnexpectedCallbackResponse";
    ClientErrorCode[ClientErrorCode["CanNotParseNumber"] = 32] = "CanNotParseNumber";
    ClientErrorCode[ClientErrorCode["InternalError"] = 33] = "InternalError";
})(ClientErrorCode = exports.ClientErrorCode || (exports.ClientErrorCode = {}));
function appRequestResultError(text) {
    return {
        type: 'Error',
        text,
    };
}
exports.appRequestResultError = appRequestResultError;
function appRequestResultOk(result) {
    return {
        type: 'Ok',
        result,
    };
}
exports.appRequestResultOk = appRequestResultOk;
/**
 * Provides information about library.
 */
class ClientModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns Core Library API reference
     * @returns ResultOfGetApiReference
     */
    get_api_reference() {
        return this.client.request('client.get_api_reference');
    }
    /**
     * Returns Core Library version
     * @returns ResultOfVersion
     */
    version() {
        return this.client.request('client.version');
    }
    /**
     * Returns detailed information about this build.
     * @returns ResultOfBuildInfo
     */
    build_info() {
        return this.client.request('client.build_info');
    }
    /**
     * Resolves application request processing result
     *
     * @param {ParamsOfResolveAppRequest} params
     * @returns
     */
    resolve_app_request(params) {
        return this.client.request('client.resolve_app_request', params);
    }
}
exports.ClientModule = ClientModule;
// crypto module
var CryptoErrorCode;
(function (CryptoErrorCode) {
    CryptoErrorCode[CryptoErrorCode["InvalidPublicKey"] = 100] = "InvalidPublicKey";
    CryptoErrorCode[CryptoErrorCode["InvalidSecretKey"] = 101] = "InvalidSecretKey";
    CryptoErrorCode[CryptoErrorCode["InvalidKey"] = 102] = "InvalidKey";
    CryptoErrorCode[CryptoErrorCode["InvalidFactorizeChallenge"] = 106] = "InvalidFactorizeChallenge";
    CryptoErrorCode[CryptoErrorCode["InvalidBigInt"] = 107] = "InvalidBigInt";
    CryptoErrorCode[CryptoErrorCode["ScryptFailed"] = 108] = "ScryptFailed";
    CryptoErrorCode[CryptoErrorCode["InvalidKeySize"] = 109] = "InvalidKeySize";
    CryptoErrorCode[CryptoErrorCode["NaclSecretBoxFailed"] = 110] = "NaclSecretBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclBoxFailed"] = 111] = "NaclBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclSignFailed"] = 112] = "NaclSignFailed";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidEntropy"] = 113] = "Bip39InvalidEntropy";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidPhrase"] = 114] = "Bip39InvalidPhrase";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidKey"] = 115] = "Bip32InvalidKey";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidDerivePath"] = 116] = "Bip32InvalidDerivePath";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidDictionary"] = 117] = "Bip39InvalidDictionary";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidWordCount"] = 118] = "Bip39InvalidWordCount";
    CryptoErrorCode[CryptoErrorCode["MnemonicGenerationFailed"] = 119] = "MnemonicGenerationFailed";
    CryptoErrorCode[CryptoErrorCode["MnemonicFromEntropyFailed"] = 120] = "MnemonicFromEntropyFailed";
    CryptoErrorCode[CryptoErrorCode["SigningBoxNotRegistered"] = 121] = "SigningBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidSignature"] = 122] = "InvalidSignature";
})(CryptoErrorCode = exports.CryptoErrorCode || (exports.CryptoErrorCode = {}));
function paramsOfAppSigningBoxGetPublicKey() {
    return {
        type: 'GetPublicKey',
    };
}
exports.paramsOfAppSigningBoxGetPublicKey = paramsOfAppSigningBoxGetPublicKey;
function paramsOfAppSigningBoxSign(unsigned) {
    return {
        type: 'Sign',
        unsigned,
    };
}
exports.paramsOfAppSigningBoxSign = paramsOfAppSigningBoxSign;
function resultOfAppSigningBoxGetPublicKey(public_key) {
    return {
        type: 'GetPublicKey',
        public_key,
    };
}
exports.resultOfAppSigningBoxGetPublicKey = resultOfAppSigningBoxGetPublicKey;
function resultOfAppSigningBoxSign(signature) {
    return {
        type: 'Sign',
        signature,
    };
}
exports.resultOfAppSigningBoxSign = resultOfAppSigningBoxSign;
function dispatchAppSigningBox(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = {};
            switch (params.type) {
                case 'GetPublicKey':
                    result = yield obj.get_public_key();
                    break;
                case 'Sign':
                    result = yield obj.sign(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({ type: params.type }, result));
        }
        catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
/**
 * Crypto functions.
 */
class CryptoModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Performs prime factorization – decomposition of a composite number into a product of smaller prime integers (factors). See [https://en.wikipedia.org/wiki/Integer_factorization]
     *
     * @param {ParamsOfFactorize} params
     * @returns ResultOfFactorize
     */
    factorize(params) {
        return this.client.request('crypto.factorize', params);
    }
    /**
     * Performs modular exponentiation for big integers (`base`^`exponent` mod `modulus`). See [https://en.wikipedia.org/wiki/Modular_exponentiation]
     *
     * @param {ParamsOfModularPower} params
     * @returns ResultOfModularPower
     */
    modular_power(params) {
        return this.client.request('crypto.modular_power', params);
    }
    /**
     * Calculates CRC16 using TON algorithm.
     *
     * @param {ParamsOfTonCrc16} params
     * @returns ResultOfTonCrc16
     */
    ton_crc16(params) {
        return this.client.request('crypto.ton_crc16', params);
    }
    /**
     * Generates random byte array of the specified length and returns it in `base64` format
     *
     * @param {ParamsOfGenerateRandomBytes} params
     * @returns ResultOfGenerateRandomBytes
     */
    generate_random_bytes(params) {
        return this.client.request('crypto.generate_random_bytes', params);
    }
    /**
     * Converts public key to ton safe_format
     *
     * @param {ParamsOfConvertPublicKeyToTonSafeFormat} params
     * @returns ResultOfConvertPublicKeyToTonSafeFormat
     */
    convert_public_key_to_ton_safe_format(params) {
        return this.client.request('crypto.convert_public_key_to_ton_safe_format', params);
    }
    /**
     * Generates random ed25519 key pair.
     * @returns KeyPair
     */
    generate_random_sign_keys() {
        return this.client.request('crypto.generate_random_sign_keys');
    }
    /**
     * Signs a data using the provided keys.
     *
     * @param {ParamsOfSign} params
     * @returns ResultOfSign
     */
    sign(params) {
        return this.client.request('crypto.sign', params);
    }
    /**
     * Verifies signed data using the provided public key. Raises error if verification is failed.
     *
     * @param {ParamsOfVerifySignature} params
     * @returns ResultOfVerifySignature
     */
    verify_signature(params) {
        return this.client.request('crypto.verify_signature', params);
    }
    /**
     * Calculates SHA256 hash of the specified data.
     *
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */
    sha256(params) {
        return this.client.request('crypto.sha256', params);
    }
    /**
     * Calculates SHA512 hash of the specified data.
     *
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */
    sha512(params) {
        return this.client.request('crypto.sha512', params);
    }
    /**
     * Derives key from `password` and `key` using `scrypt` algorithm. See [https://en.wikipedia.org/wiki/Scrypt].
     *
     * @remarks
     * # Arguments
     * - `log_n` - The log2 of the Scrypt parameter `N`
     * - `r` - The Scrypt parameter `r`
     * - `p` - The Scrypt parameter `p`
     * # Conditions
     * - `log_n` must be less than `64`
     * - `r` must be greater than `0` and less than or equal to `4294967295`
     * - `p` must be greater than `0` and less than `4294967295`
     * # Recommended values sufficient for most use-cases
     * - `log_n = 15` (`n = 32768`)
     * - `r = 8`
     * - `p = 1`
     *
     * @param {ParamsOfScrypt} params
     * @returns ResultOfScrypt
     */
    scrypt(params) {
        return this.client.request('crypto.scrypt', params);
    }
    /**
     * Generates a key pair for signing from the secret key
     *
     * @param {ParamsOfNaclSignKeyPairFromSecret} params
     * @returns KeyPair
     */
    nacl_sign_keypair_from_secret_key(params) {
        return this.client.request('crypto.nacl_sign_keypair_from_secret_key', params);
    }
    /**
     * Signs data using the signer's secret key.
     *
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSign
     */
    nacl_sign(params) {
        return this.client.request('crypto.nacl_sign', params);
    }
    /**
     * Verifies the signature and returns the unsigned message
     *
     * @remarks
     * Verifies the signature in `signed` using the signer's public key `public`
     * and returns the message `unsigned`.
     *
     * If the signature fails verification, crypto_sign_open raises an exception.
     *
     * @param {ParamsOfNaclSignOpen} params
     * @returns ResultOfNaclSignOpen
     */
    nacl_sign_open(params) {
        return this.client.request('crypto.nacl_sign_open', params);
    }
    /**
     * Signs the message using the secret key and returns a signature.
     *
     * @remarks
     * Signs the message `unsigned` using the secret key `secret`
     * and returns a signature `signature`.
     *
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSignDetached
     */
    nacl_sign_detached(params) {
        return this.client.request('crypto.nacl_sign_detached', params);
    }
    /**
     * Verifies the signature with public key and `unsigned` data.
     *
     * @param {ParamsOfNaclSignDetachedVerify} params
     * @returns ResultOfNaclSignDetachedVerify
     */
    nacl_sign_detached_verify(params) {
        return this.client.request('crypto.nacl_sign_detached_verify', params);
    }
    /**
     * Generates a random NaCl key pair
     * @returns KeyPair
     */
    nacl_box_keypair() {
        return this.client.request('crypto.nacl_box_keypair');
    }
    /**
     * Generates key pair from a secret key
     *
     * @param {ParamsOfNaclBoxKeyPairFromSecret} params
     * @returns KeyPair
     */
    nacl_box_keypair_from_secret_key(params) {
        return this.client.request('crypto.nacl_box_keypair_from_secret_key', params);
    }
    /**
     * Public key authenticated encryption
     *
     * @remarks
     * Encrypt and authenticate a message using the senders secret key, the receivers public
     * key, and a nonce.
     *
     * @param {ParamsOfNaclBox} params
     * @returns ResultOfNaclBox
     */
    nacl_box(params) {
        return this.client.request('crypto.nacl_box', params);
    }
    /**
     * Decrypt and verify the cipher text using the receivers secret key, the senders public key, and the nonce.
     *
     * @param {ParamsOfNaclBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */
    nacl_box_open(params) {
        return this.client.request('crypto.nacl_box_open', params);
    }
    /**
     * Encrypt and authenticate message using nonce and secret key.
     *
     * @param {ParamsOfNaclSecretBox} params
     * @returns ResultOfNaclBox
     */
    nacl_secret_box(params) {
        return this.client.request('crypto.nacl_secret_box', params);
    }
    /**
     * Decrypts and verifies cipher text using `nonce` and secret `key`.
     *
     * @param {ParamsOfNaclSecretBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */
    nacl_secret_box_open(params) {
        return this.client.request('crypto.nacl_secret_box_open', params);
    }
    /**
     * Prints the list of words from the specified dictionary
     *
     * @param {ParamsOfMnemonicWords} params
     * @returns ResultOfMnemonicWords
     */
    mnemonic_words(params) {
        return this.client.request('crypto.mnemonic_words', params);
    }
    /**
     * Generates a random mnemonic from the specified dictionary and word count
     *
     * @param {ParamsOfMnemonicFromRandom} params
     * @returns ResultOfMnemonicFromRandom
     */
    mnemonic_from_random(params) {
        return this.client.request('crypto.mnemonic_from_random', params);
    }
    /**
     * Generates mnemonic from pre-generated entropy
     *
     * @param {ParamsOfMnemonicFromEntropy} params
     * @returns ResultOfMnemonicFromEntropy
     */
    mnemonic_from_entropy(params) {
        return this.client.request('crypto.mnemonic_from_entropy', params);
    }
    /**
     * The phrase supplied will be checked for word length and validated according to the checksum specified in BIP0039.
     *
     * @param {ParamsOfMnemonicVerify} params
     * @returns ResultOfMnemonicVerify
     */
    mnemonic_verify(params) {
        return this.client.request('crypto.mnemonic_verify', params);
    }
    /**
     * Validates the seed phrase, generates master key and then derives the key pair from the master key and the specified path
     *
     * @param {ParamsOfMnemonicDeriveSignKeys} params
     * @returns KeyPair
     */
    mnemonic_derive_sign_keys(params) {
        return this.client.request('crypto.mnemonic_derive_sign_keys', params);
    }
    /**
     * Generates an extended master private key that will be the root for all the derived keys
     *
     * @param {ParamsOfHDKeyXPrvFromMnemonic} params
     * @returns ResultOfHDKeyXPrvFromMnemonic
     */
    hdkey_xprv_from_mnemonic(params) {
        return this.client.request('crypto.hdkey_xprv_from_mnemonic', params);
    }
    /**
     * Returns extended private key derived from the specified extended private key and child index
     *
     * @param {ParamsOfHDKeyDeriveFromXPrv} params
     * @returns ResultOfHDKeyDeriveFromXPrv
     */
    hdkey_derive_from_xprv(params) {
        return this.client.request('crypto.hdkey_derive_from_xprv', params);
    }
    /**
     * Derives the extended private key from the specified key and path
     *
     * @param {ParamsOfHDKeyDeriveFromXPrvPath} params
     * @returns ResultOfHDKeyDeriveFromXPrvPath
     */
    hdkey_derive_from_xprv_path(params) {
        return this.client.request('crypto.hdkey_derive_from_xprv_path', params);
    }
    /**
     * Extracts the private key from the serialized extended private key
     *
     * @param {ParamsOfHDKeySecretFromXPrv} params
     * @returns ResultOfHDKeySecretFromXPrv
     */
    hdkey_secret_from_xprv(params) {
        return this.client.request('crypto.hdkey_secret_from_xprv', params);
    }
    /**
     * Extracts the public key from the serialized extended private key
     *
     * @param {ParamsOfHDKeyPublicFromXPrv} params
     * @returns ResultOfHDKeyPublicFromXPrv
     */
    hdkey_public_from_xprv(params) {
        return this.client.request('crypto.hdkey_public_from_xprv', params);
    }
    /**
     * Performs symmetric `chacha20` encryption.
     *
     * @param {ParamsOfChaCha20} params
     * @returns ResultOfChaCha20
     */
    chacha20(params) {
        return this.client.request('crypto.chacha20', params);
    }
    /**
     * Register an application implemented signing box.
     * @returns RegisteredSigningBox
     */
    register_signing_box(obj) {
        return this.client.request('crypto.register_signing_box', undefined, (params, responseType) => {
            if (responseType === 3) {
                dispatchAppSigningBox(obj, params.request_data, params.app_request_id, this.client);
            }
            else if (responseType === 4) {
                dispatchAppSigningBox(obj, params, null, this.client);
            }
        });
    }
    /**
     * Creates a default signing box implementation.
     *
     * @param {KeyPair} params
     * @returns RegisteredSigningBox
     */
    get_signing_box(params) {
        return this.client.request('crypto.get_signing_box', params);
    }
    /**
     * Returns public key of signing key pair.
     *
     * @param {RegisteredSigningBox} params
     * @returns ResultOfSigningBoxGetPublicKey
     */
    signing_box_get_public_key(params) {
        return this.client.request('crypto.signing_box_get_public_key', params);
    }
    /**
     * Returns signed user data.
     *
     * @param {ParamsOfSigningBoxSign} params
     * @returns ResultOfSigningBoxSign
     */
    signing_box_sign(params) {
        return this.client.request('crypto.signing_box_sign', params);
    }
    /**
     * Removes signing box from SDK.
     *
     * @param {RegisteredSigningBox} params
     * @returns
     */
    remove_signing_box(params) {
        return this.client.request('crypto.remove_signing_box', params);
    }
}
exports.CryptoModule = CryptoModule;
// abi module
var AbiErrorCode;
(function (AbiErrorCode) {
    AbiErrorCode[AbiErrorCode["RequiredAddressMissingForEncodeMessage"] = 301] = "RequiredAddressMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["RequiredCallSetMissingForEncodeMessage"] = 302] = "RequiredCallSetMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["InvalidJson"] = 303] = "InvalidJson";
    AbiErrorCode[AbiErrorCode["InvalidMessage"] = 304] = "InvalidMessage";
    AbiErrorCode[AbiErrorCode["EncodeDeployMessageFailed"] = 305] = "EncodeDeployMessageFailed";
    AbiErrorCode[AbiErrorCode["EncodeRunMessageFailed"] = 306] = "EncodeRunMessageFailed";
    AbiErrorCode[AbiErrorCode["AttachSignatureFailed"] = 307] = "AttachSignatureFailed";
    AbiErrorCode[AbiErrorCode["InvalidTvcImage"] = 308] = "InvalidTvcImage";
    AbiErrorCode[AbiErrorCode["RequiredPublicKeyMissingForFunctionHeader"] = 309] = "RequiredPublicKeyMissingForFunctionHeader";
    AbiErrorCode[AbiErrorCode["InvalidSigner"] = 310] = "InvalidSigner";
    AbiErrorCode[AbiErrorCode["InvalidAbi"] = 311] = "InvalidAbi";
    AbiErrorCode[AbiErrorCode["InvalidFunctionId"] = 312] = "InvalidFunctionId";
})(AbiErrorCode = exports.AbiErrorCode || (exports.AbiErrorCode = {}));
function abiContract(value) {
    return {
        type: 'Contract',
        value,
    };
}
exports.abiContract = abiContract;
function abiJson(value) {
    return {
        type: 'Json',
        value,
    };
}
exports.abiJson = abiJson;
function abiHandle(value) {
    return {
        type: 'Handle',
        value,
    };
}
exports.abiHandle = abiHandle;
function abiSerialized(value) {
    return {
        type: 'Serialized',
        value,
    };
}
exports.abiSerialized = abiSerialized;
function signerNone() {
    return {
        type: 'None',
    };
}
exports.signerNone = signerNone;
function signerExternal(public_key) {
    return {
        type: 'External',
        public_key,
    };
}
exports.signerExternal = signerExternal;
function signerKeys(keys) {
    return {
        type: 'Keys',
        keys,
    };
}
exports.signerKeys = signerKeys;
function signerSigningBox(handle) {
    return {
        type: 'SigningBox',
        handle,
    };
}
exports.signerSigningBox = signerSigningBox;
var MessageBodyType;
(function (MessageBodyType) {
    MessageBodyType["Input"] = "Input";
    MessageBodyType["Output"] = "Output";
    MessageBodyType["InternalOutput"] = "InternalOutput";
    MessageBodyType["Event"] = "Event";
})(MessageBodyType = exports.MessageBodyType || (exports.MessageBodyType = {}));
function stateInitSourceMessage(source) {
    return {
        type: 'Message',
        source,
    };
}
exports.stateInitSourceMessage = stateInitSourceMessage;
function stateInitSourceStateInit(code, data, library) {
    return {
        type: 'StateInit',
        code,
        data,
        library,
    };
}
exports.stateInitSourceStateInit = stateInitSourceStateInit;
function stateInitSourceTvc(tvc, public_key, init_params) {
    return {
        type: 'Tvc',
        tvc,
        public_key,
        init_params,
    };
}
exports.stateInitSourceTvc = stateInitSourceTvc;
function messageSourceEncoded(message, abi) {
    return {
        type: 'Encoded',
        message,
        abi,
    };
}
exports.messageSourceEncoded = messageSourceEncoded;
function messageSourceEncodingParams(params) {
    return Object.assign({ type: 'EncodingParams' }, params);
}
exports.messageSourceEncodingParams = messageSourceEncodingParams;
/**
 * Provides message encoding and decoding according to the ABI specification.
 */
class AbiModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Encodes message body according to ABI function call.
     *
     * @param {ParamsOfEncodeMessageBody} params
     * @returns ResultOfEncodeMessageBody
     */
    encode_message_body(params) {
        return this.client.request('abi.encode_message_body', params);
    }
    /**
     *
     * @param {ParamsOfAttachSignatureToMessageBody} params
     * @returns ResultOfAttachSignatureToMessageBody
     */
    attach_signature_to_message_body(params) {
        return this.client.request('abi.attach_signature_to_message_body', params);
    }
    /**
     * Encodes an ABI-compatible message
     *
     * @remarks
     * Allows to encode deploy and function call messages,
     * both signed and unsigned.
     *
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - signed/unsigned + data for signing.
     *
     * `Signer` defines how the message should or shouldn't be signed:
     *
     * `Signer::None` creates an unsigned message. This may be needed in case of some public methods,
     * that do not require authorization by pubkey.
     *
     * `Signer::External` takes public key and returns `data_to_sign` for later signing.
     * Use `attach_signature` method with the result signature to get the signed message.
     *
     * `Signer::Keys` creates a signed message with provided key pair.
     *
     * [SOON] `Signer::SigningBox` Allows using a special interface to implement signing
     * without private key disclosure to SDK. For instance, in case of using a cold wallet or HSM,
     * when application calls some API to sign data.
     *
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     *
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     * 3. Public key, provided by signer.
     *
     * @param {ParamsOfEncodeMessage} params
     * @returns ResultOfEncodeMessage
     */
    encode_message(params) {
        return this.client.request('abi.encode_message', params);
    }
    /**
     * Encodes an internal ABI-compatible message
     *
     * @remarks
     * Allows to encode deploy and function call messages.
     *
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - simple function call
     *
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     *
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     *
     * @param {ParamsOfEncodeInternalMessage} params
     * @returns ResultOfEncodeInternalMessage
     */
    encode_internal_message(params) {
        return this.client.request('abi.encode_internal_message', params);
    }
    /**
     * Combines `hex`-encoded `signature` with `base64`-encoded `unsigned_message`. Returns signed message encoded in `base64`.
     *
     * @param {ParamsOfAttachSignature} params
     * @returns ResultOfAttachSignature
     */
    attach_signature(params) {
        return this.client.request('abi.attach_signature', params);
    }
    /**
     * Decodes message body using provided message BOC and ABI.
     *
     * @param {ParamsOfDecodeMessage} params
     * @returns DecodedMessageBody
     */
    decode_message(params) {
        return this.client.request('abi.decode_message', params);
    }
    /**
     * Decodes message body using provided body BOC and ABI.
     *
     * @param {ParamsOfDecodeMessageBody} params
     * @returns DecodedMessageBody
     */
    decode_message_body(params) {
        return this.client.request('abi.decode_message_body', params);
    }
    /**
     * Creates account state BOC
     *
     * @remarks
     * Creates account state provided with one of these sets of data :
     * 1. BOC of code, BOC of data, BOC of library
     * 2. TVC (string in `base64`), keys, init params
     *
     * @param {ParamsOfEncodeAccount} params
     * @returns ResultOfEncodeAccount
     */
    encode_account(params) {
        return this.client.request('abi.encode_account', params);
    }
}
exports.AbiModule = AbiModule;
function bocCacheTypePinned(pin) {
    return {
        type: 'Pinned',
        pin,
    };
}
exports.bocCacheTypePinned = bocCacheTypePinned;
function bocCacheTypeUnpinned() {
    return {
        type: 'Unpinned',
    };
}
exports.bocCacheTypeUnpinned = bocCacheTypeUnpinned;
var BocErrorCode;
(function (BocErrorCode) {
    BocErrorCode[BocErrorCode["InvalidBoc"] = 201] = "InvalidBoc";
    BocErrorCode[BocErrorCode["SerializationError"] = 202] = "SerializationError";
    BocErrorCode[BocErrorCode["InappropriateBlock"] = 203] = "InappropriateBlock";
    BocErrorCode[BocErrorCode["MissingSourceBoc"] = 204] = "MissingSourceBoc";
    BocErrorCode[BocErrorCode["InsufficientCacheSize"] = 205] = "InsufficientCacheSize";
    BocErrorCode[BocErrorCode["BocRefNotFound"] = 206] = "BocRefNotFound";
    BocErrorCode[BocErrorCode["InvalidBocRef"] = 207] = "InvalidBocRef";
})(BocErrorCode = exports.BocErrorCode || (exports.BocErrorCode = {}));
function builderOpInteger(size, value) {
    return {
        type: 'Integer',
        size,
        value,
    };
}
exports.builderOpInteger = builderOpInteger;
function builderOpBitString(value) {
    return {
        type: 'BitString',
        value,
    };
}
exports.builderOpBitString = builderOpBitString;
function builderOpCell(builder) {
    return {
        type: 'Cell',
        builder,
    };
}
exports.builderOpCell = builderOpCell;
function builderOpCellBoc(boc) {
    return {
        type: 'CellBoc',
        boc,
    };
}
exports.builderOpCellBoc = builderOpCellBoc;
/**
 * BOC manipulation module.
 */
class BocModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Parses message boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API message object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_message(params) {
        return this.client.request('boc.parse_message', params);
    }
    /**
     * Parses transaction boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API transaction object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_transaction(params) {
        return this.client.request('boc.parse_transaction', params);
    }
    /**
     * Parses account boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API account object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_account(params) {
        return this.client.request('boc.parse_account', params);
    }
    /**
     * Parses block boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API block object
     *
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_block(params) {
        return this.client.request('boc.parse_block', params);
    }
    /**
     * Parses shardstate boc into a JSON
     *
     * @remarks
     * JSON structure is compatible with GraphQL API shardstate object
     *
     * @param {ParamsOfParseShardstate} params
     * @returns ResultOfParse
     */
    parse_shardstate(params) {
        return this.client.request('boc.parse_shardstate', params);
    }
    /**
     * Extract blockchain configuration from key block and also from zerostate.
     *
     * @param {ParamsOfGetBlockchainConfig} params
     * @returns ResultOfGetBlockchainConfig
     */
    get_blockchain_config(params) {
        return this.client.request('boc.get_blockchain_config', params);
    }
    /**
     * Calculates BOC root hash
     *
     * @param {ParamsOfGetBocHash} params
     * @returns ResultOfGetBocHash
     */
    get_boc_hash(params) {
        return this.client.request('boc.get_boc_hash', params);
    }
    /**
     * Extracts code from TVC contract image
     *
     * @param {ParamsOfGetCodeFromTvc} params
     * @returns ResultOfGetCodeFromTvc
     */
    get_code_from_tvc(params) {
        return this.client.request('boc.get_code_from_tvc', params);
    }
    /**
     * Get BOC from cache
     *
     * @param {ParamsOfBocCacheGet} params
     * @returns ResultOfBocCacheGet
     */
    cache_get(params) {
        return this.client.request('boc.cache_get', params);
    }
    /**
     * Save BOC into cache
     *
     * @param {ParamsOfBocCacheSet} params
     * @returns ResultOfBocCacheSet
     */
    cache_set(params) {
        return this.client.request('boc.cache_set', params);
    }
    /**
     * Unpin BOCs with specified pin.
     *
     * @remarks
     * BOCs which don't have another pins will be removed from cache
     *
     * @param {ParamsOfBocCacheUnpin} params
     * @returns
     */
    cache_unpin(params) {
        return this.client.request('boc.cache_unpin', params);
    }
    /**
     * Encodes BOC from builder operations.
     *
     * @param {ParamsOfEncodeBoc} params
     * @returns ResultOfEncodeBoc
     */
    encode_boc(params) {
        return this.client.request('boc.encode_boc', params);
    }
}
exports.BocModule = BocModule;
// processing module
var ProcessingErrorCode;
(function (ProcessingErrorCode) {
    ProcessingErrorCode[ProcessingErrorCode["MessageAlreadyExpired"] = 501] = "MessageAlreadyExpired";
    ProcessingErrorCode[ProcessingErrorCode["MessageHasNotDestinationAddress"] = 502] = "MessageHasNotDestinationAddress";
    ProcessingErrorCode[ProcessingErrorCode["CanNotBuildMessageCell"] = 503] = "CanNotBuildMessageCell";
    ProcessingErrorCode[ProcessingErrorCode["FetchBlockFailed"] = 504] = "FetchBlockFailed";
    ProcessingErrorCode[ProcessingErrorCode["SendMessageFailed"] = 505] = "SendMessageFailed";
    ProcessingErrorCode[ProcessingErrorCode["InvalidMessageBoc"] = 506] = "InvalidMessageBoc";
    ProcessingErrorCode[ProcessingErrorCode["MessageExpired"] = 507] = "MessageExpired";
    ProcessingErrorCode[ProcessingErrorCode["TransactionWaitTimeout"] = 508] = "TransactionWaitTimeout";
    ProcessingErrorCode[ProcessingErrorCode["InvalidBlockReceived"] = 509] = "InvalidBlockReceived";
    ProcessingErrorCode[ProcessingErrorCode["CanNotCheckBlockShard"] = 510] = "CanNotCheckBlockShard";
    ProcessingErrorCode[ProcessingErrorCode["BlockNotFound"] = 511] = "BlockNotFound";
    ProcessingErrorCode[ProcessingErrorCode["InvalidData"] = 512] = "InvalidData";
    ProcessingErrorCode[ProcessingErrorCode["ExternalSignerMustNotBeUsed"] = 513] = "ExternalSignerMustNotBeUsed";
})(ProcessingErrorCode = exports.ProcessingErrorCode || (exports.ProcessingErrorCode = {}));
function processingEventWillFetchFirstBlock() {
    return {
        type: 'WillFetchFirstBlock',
    };
}
exports.processingEventWillFetchFirstBlock = processingEventWillFetchFirstBlock;
function processingEventFetchFirstBlockFailed(error) {
    return {
        type: 'FetchFirstBlockFailed',
        error,
    };
}
exports.processingEventFetchFirstBlockFailed = processingEventFetchFirstBlockFailed;
function processingEventWillSend(shard_block_id, message_id, message) {
    return {
        type: 'WillSend',
        shard_block_id,
        message_id,
        message,
    };
}
exports.processingEventWillSend = processingEventWillSend;
function processingEventDidSend(shard_block_id, message_id, message) {
    return {
        type: 'DidSend',
        shard_block_id,
        message_id,
        message,
    };
}
exports.processingEventDidSend = processingEventDidSend;
function processingEventSendFailed(shard_block_id, message_id, message, error) {
    return {
        type: 'SendFailed',
        shard_block_id,
        message_id,
        message,
        error,
    };
}
exports.processingEventSendFailed = processingEventSendFailed;
function processingEventWillFetchNextBlock(shard_block_id, message_id, message) {
    return {
        type: 'WillFetchNextBlock',
        shard_block_id,
        message_id,
        message,
    };
}
exports.processingEventWillFetchNextBlock = processingEventWillFetchNextBlock;
function processingEventFetchNextBlockFailed(shard_block_id, message_id, message, error) {
    return {
        type: 'FetchNextBlockFailed',
        shard_block_id,
        message_id,
        message,
        error,
    };
}
exports.processingEventFetchNextBlockFailed = processingEventFetchNextBlockFailed;
function processingEventMessageExpired(message_id, message, error) {
    return {
        type: 'MessageExpired',
        message_id,
        message,
        error,
    };
}
exports.processingEventMessageExpired = processingEventMessageExpired;
/**
 * Message processing module.
 *
 * @remarks
 * This module incorporates functions related to complex message
 * processing scenarios.
 */
class ProcessingModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Sends message to the network
     *
     * @remarks
     * Sends message to the network and returns the last generated shard block of the destination account
     * before the message was sent. It will be required later for message processing.
     *
     * @param {ParamsOfSendMessage} params
     * @returns ResultOfSendMessage
     */
    send_message(params, responseHandler) {
        return this.client.request('processing.send_message', params, responseHandler);
    }
    /**
     * Performs monitoring of the network for the result transaction of the external inbound message processing.
     *
     * @remarks
     * `send_events` enables intermediate events, such as `WillFetchNextBlock`,
     * `FetchNextBlockFailed` that may be useful for logging of new shard blocks creation
     * during message processing.
     *
     * Note, that presence of the `abi` parameter is critical for ABI
     * compliant contracts. Message processing uses drastically
     * different strategy for processing message for contracts which
     * ABI includes "expire" header.
     *
     * When the ABI header `expire` is present, the processing uses
     * `message expiration` strategy:
     * - The maximum block gen time is set to
     *   `message_expiration_timeout + transaction_wait_timeout`.
     * - When maximum block gen time is reached, the processing will
     *   be finished with `MessageExpired` error.
     *
     * When the ABI header `expire` isn't present or `abi` parameter
     * isn't specified, the processing uses `transaction waiting`
     * strategy:
     * - The maximum block gen time is set to
     *   `now() + transaction_wait_timeout`.
     *
     * - If maximum block gen time is reached and no result transaction is found,
     * the processing will exit with an error.
     *
     * @param {ParamsOfWaitForTransaction} params
     * @returns ResultOfProcessMessage
     */
    wait_for_transaction(params, responseHandler) {
        return this.client.request('processing.wait_for_transaction', params, responseHandler);
    }
    /**
     * Creates message, sends it to the network and monitors its processing.
     *
     * @remarks
     * Creates ABI-compatible message,
     * sends it to the network and monitors for the result transaction.
     * Decodes the output messages' bodies.
     *
     * If contract's ABI includes "expire" header, then
     * SDK implements retries in case of unsuccessful message delivery within the expiration
     * timeout: SDK recreates the message, sends it and processes it again.
     *
     * The intermediate events, such as `WillFetchFirstBlock`, `WillSend`, `DidSend`,
     * `WillFetchNextBlock`, etc - are switched on/off by `send_events` flag
     * and logged into the supplied callback function.
     *
     * The retry configuration parameters are defined in the client's `NetworkConfig` and `AbiConfig`.
     *
     * If contract's ABI does not include "expire" header
     * then, if no transaction is found within the network timeout (see config parameter ), exits with error.
     *
     * @param {ParamsOfProcessMessage} params
     * @returns ResultOfProcessMessage
     */
    process_message(params, responseHandler) {
        return this.client.request('processing.process_message', params, responseHandler);
    }
}
exports.ProcessingModule = ProcessingModule;
function addressStringFormatAccountId() {
    return {
        type: 'AccountId',
    };
}
exports.addressStringFormatAccountId = addressStringFormatAccountId;
function addressStringFormatHex() {
    return {
        type: 'Hex',
    };
}
exports.addressStringFormatHex = addressStringFormatHex;
function addressStringFormatBase64(url, test, bounce) {
    return {
        type: 'Base64',
        url,
        test,
        bounce,
    };
}
exports.addressStringFormatBase64 = addressStringFormatBase64;
/**
 * Misc utility Functions.
 */
class UtilsModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Converts address from any TON format to any TON format
     *
     * @param {ParamsOfConvertAddress} params
     * @returns ResultOfConvertAddress
     */
    convert_address(params) {
        return this.client.request('utils.convert_address', params);
    }
}
exports.UtilsModule = UtilsModule;
// tvm module
var TvmErrorCode;
(function (TvmErrorCode) {
    TvmErrorCode[TvmErrorCode["CanNotReadTransaction"] = 401] = "CanNotReadTransaction";
    TvmErrorCode[TvmErrorCode["CanNotReadBlockchainConfig"] = 402] = "CanNotReadBlockchainConfig";
    TvmErrorCode[TvmErrorCode["TransactionAborted"] = 403] = "TransactionAborted";
    TvmErrorCode[TvmErrorCode["InternalError"] = 404] = "InternalError";
    TvmErrorCode[TvmErrorCode["ActionPhaseFailed"] = 405] = "ActionPhaseFailed";
    TvmErrorCode[TvmErrorCode["AccountCodeMissing"] = 406] = "AccountCodeMissing";
    TvmErrorCode[TvmErrorCode["LowBalance"] = 407] = "LowBalance";
    TvmErrorCode[TvmErrorCode["AccountFrozenOrDeleted"] = 408] = "AccountFrozenOrDeleted";
    TvmErrorCode[TvmErrorCode["AccountMissing"] = 409] = "AccountMissing";
    TvmErrorCode[TvmErrorCode["UnknownExecutionError"] = 410] = "UnknownExecutionError";
    TvmErrorCode[TvmErrorCode["InvalidInputStack"] = 411] = "InvalidInputStack";
    TvmErrorCode[TvmErrorCode["InvalidAccountBoc"] = 412] = "InvalidAccountBoc";
    TvmErrorCode[TvmErrorCode["InvalidMessageType"] = 413] = "InvalidMessageType";
    TvmErrorCode[TvmErrorCode["ContractExecutionError"] = 414] = "ContractExecutionError";
})(TvmErrorCode = exports.TvmErrorCode || (exports.TvmErrorCode = {}));
function accountForExecutorNone() {
    return {
        type: 'None',
    };
}
exports.accountForExecutorNone = accountForExecutorNone;
function accountForExecutorUninit() {
    return {
        type: 'Uninit',
    };
}
exports.accountForExecutorUninit = accountForExecutorUninit;
function accountForExecutorAccount(boc, unlimited_balance) {
    return {
        type: 'Account',
        boc,
        unlimited_balance,
    };
}
exports.accountForExecutorAccount = accountForExecutorAccount;
/**
 */
class TvmModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Emulates all the phases of contract execution locally
     *
     * @remarks
     * Performs all the phases of contract execution on Transaction Executor -
     * the same component that is used on Validator Nodes.
     *
     * Can be used for contract debugginh, to find out the reason why message was not delivered successfully
     *  - because Validators just throw away the failed external inbound messages, here you can catch them.
     *
     * Another use case is to estimate fees for message execution. Set  `AccountForExecutor::Account.unlimited_balance`
     * to `true` so that emulation will not depend on the actual balance.
     *
     * One more use case - you can produce the sequence of operations,
     * thus emulating the multiple contract calls locally.
     * And so on.
     *
     * To get the account BOC (bag of cells) - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account` method.
     * To get the message BOC - use `abi.encode_message` or prepare it any other way, for instance, with FIFT script.
     *
     * If you need this emulation to be as precise as possible then specify `ParamsOfRunExecutor` parameter.
     * If you need to see the aborted transaction as a result, not as an error, set `skip_transaction_check` to `true`.
     *
     * @param {ParamsOfRunExecutor} params
     * @returns ResultOfRunExecutor
     */
    run_executor(params) {
        return this.client.request('tvm.run_executor', params);
    }
    /**
     * Executes get-methods of ABI-compatible contracts
     *
     * @remarks
     * Performs only a part of compute phase of transaction execution
     * that is used to run get-methods of ABI-compatible contracts.
     *
     * If you try to run get-methods with `run_executor` you will get an error, because it checks ACCEPT and exits
     * if there is none, which is actually true for get-methods.
     *
     *  To get the account BOC (bag of cells) - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account method`.
     * To get the message BOC - use `abi.encode_message` or prepare it any other way, for instance, with FIFT script.
     *
     * Attention! Updated account state is produces as well, but only
     * `account_state.storage.state.data`  part of the BOC is updated.
     *
     * @param {ParamsOfRunTvm} params
     * @returns ResultOfRunTvm
     */
    run_tvm(params) {
        return this.client.request('tvm.run_tvm', params);
    }
    /**
     * Executes a get-method of FIFT contract
     *
     * @remarks
     * Executes a get-method of FIFT contract that fulfills the smc-guidelines https://test.ton.org/smc-guidelines.txt
     * and returns the result data from TVM's stack
     *
     * @param {ParamsOfRunGet} params
     * @returns ResultOfRunGet
     */
    run_get(params) {
        return this.client.request('tvm.run_get', params);
    }
}
exports.TvmModule = TvmModule;
// net module
var NetErrorCode;
(function (NetErrorCode) {
    NetErrorCode[NetErrorCode["QueryFailed"] = 601] = "QueryFailed";
    NetErrorCode[NetErrorCode["SubscribeFailed"] = 602] = "SubscribeFailed";
    NetErrorCode[NetErrorCode["WaitForFailed"] = 603] = "WaitForFailed";
    NetErrorCode[NetErrorCode["GetSubscriptionResultFailed"] = 604] = "GetSubscriptionResultFailed";
    NetErrorCode[NetErrorCode["InvalidServerResponse"] = 605] = "InvalidServerResponse";
    NetErrorCode[NetErrorCode["ClockOutOfSync"] = 606] = "ClockOutOfSync";
    NetErrorCode[NetErrorCode["WaitForTimeout"] = 607] = "WaitForTimeout";
    NetErrorCode[NetErrorCode["GraphqlError"] = 608] = "GraphqlError";
    NetErrorCode[NetErrorCode["NetworkModuleSuspended"] = 609] = "NetworkModuleSuspended";
    NetErrorCode[NetErrorCode["WebsocketDisconnected"] = 610] = "WebsocketDisconnected";
    NetErrorCode[NetErrorCode["NotSupported"] = 611] = "NotSupported";
    NetErrorCode[NetErrorCode["NoEndpointsProvided"] = 612] = "NoEndpointsProvided";
    NetErrorCode[NetErrorCode["GraphqlWebsocketInitError"] = 613] = "GraphqlWebsocketInitError";
    NetErrorCode[NetErrorCode["NetworkModuleResumed"] = 614] = "NetworkModuleResumed";
})(NetErrorCode = exports.NetErrorCode || (exports.NetErrorCode = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
function paramsOfQueryOperationQueryCollection(params) {
    return Object.assign({ type: 'QueryCollection' }, params);
}
exports.paramsOfQueryOperationQueryCollection = paramsOfQueryOperationQueryCollection;
function paramsOfQueryOperationWaitForCollection(params) {
    return Object.assign({ type: 'WaitForCollection' }, params);
}
exports.paramsOfQueryOperationWaitForCollection = paramsOfQueryOperationWaitForCollection;
function paramsOfQueryOperationAggregateCollection(params) {
    return Object.assign({ type: 'AggregateCollection' }, params);
}
exports.paramsOfQueryOperationAggregateCollection = paramsOfQueryOperationAggregateCollection;
var AggregationFn;
(function (AggregationFn) {
    AggregationFn["COUNT"] = "COUNT";
    AggregationFn["MIN"] = "MIN";
    AggregationFn["MAX"] = "MAX";
    AggregationFn["SUM"] = "SUM";
    AggregationFn["AVERAGE"] = "AVERAGE";
})(AggregationFn = exports.AggregationFn || (exports.AggregationFn = {}));
/**
 * Network access.
 */
class NetModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * Performs DAppServer GraphQL query.
     *
     * @param {ParamsOfQuery} params
     * @returns ResultOfQuery
     */
    query(params) {
        return this.client.request('net.query', params);
    }
    /**
     * Performs multiple queries per single fetch.
     *
     * @param {ParamsOfBatchQuery} params
     * @returns ResultOfBatchQuery
     */
    batch_query(params) {
        return this.client.request('net.batch_query', params);
    }
    /**
     * Queries collection data
     *
     * @remarks
     * Queries data that satisfies the `filter` conditions,
     * limits the number of returned records and orders them.
     * The projection fields are limited to `result` fields
     *
     * @param {ParamsOfQueryCollection} params
     * @returns ResultOfQueryCollection
     */
    query_collection(params) {
        return this.client.request('net.query_collection', params);
    }
    /**
     * Aggregates collection data.
     *
     * @remarks
     * Aggregates values from the specified `fields` for records
     * that satisfies the `filter` conditions,
     *
     * @param {ParamsOfAggregateCollection} params
     * @returns ResultOfAggregateCollection
     */
    aggregate_collection(params) {
        return this.client.request('net.aggregate_collection', params);
    }
    /**
     * Returns an object that fulfills the conditions or waits for its appearance
     *
     * @remarks
     * Triggers only once.
     * If object that satisfies the `filter` conditions
     * already exists - returns it immediately.
     * If not - waits for insert/update of data within the specified `timeout`,
     * and returns it.
     * The projection fields are limited to `result` fields
     *
     * @param {ParamsOfWaitForCollection} params
     * @returns ResultOfWaitForCollection
     */
    wait_for_collection(params) {
        return this.client.request('net.wait_for_collection', params);
    }
    /**
     * Cancels a subscription
     *
     * @remarks
     * Cancels a subscription specified by its handle.
     *
     * @param {ResultOfSubscribeCollection} params
     * @returns
     */
    unsubscribe(params) {
        return this.client.request('net.unsubscribe', params);
    }
    /**
     * Creates a subscription
     *
     * @remarks
     * Triggers for each insert/update of data that satisfies
     * the `filter` conditions.
     * The projection fields are limited to `result` fields.
     *
     * The subscription is a persistent communication channel between
     * client and Free TON Network.
     * All changes in the blockchain will be reflected in realtime.
     * Changes means inserts and updates of the blockchain entities.
     *
     * ### Important Notes on Subscriptions
     *
     * Unfortunately sometimes the connection with the network brakes down.
     * In this situation the library attempts to reconnect to the network.
     * This reconnection sequence can take significant time.
     * All of this time the client is disconnected from the network.
     *
     * Bad news is that all blockchain changes that happened while
     * the client was disconnected are lost.
     *
     * Good news is that the client report errors to the callback when
     * it loses and resumes connection.
     *
     * So, if the lost changes are important to the application then
     * the application must handle these error reports.
     *
     * Library reports errors with `responseType` == 101
     * and the error object passed via `params`.
     *
     * When the library has successfully reconnected
     * the application receives callback with
     * `responseType` == 101 and `params.code` == 614 (NetworkModuleResumed).
     *
     * Application can use several ways to handle this situation:
     * - If application monitors changes for the single blockchain
     * object (for example specific account):  application
     * can perform a query for this object and handle actual data as a
     * regular data from the subscription.
     * - If application monitors sequence of some blockchain objects
     * (for example transactions of the specific account): application must
     * refresh all cached (or visible to user) lists where this sequences presents.
     *
     * @param {ParamsOfSubscribeCollection} params
     * @returns ResultOfSubscribeCollection
     */
    subscribe_collection(params, responseHandler) {
        return this.client.request('net.subscribe_collection', params, responseHandler);
    }
    /**
     * Suspends network module to stop any network activity
     * @returns
     */
    suspend() {
        return this.client.request('net.suspend');
    }
    /**
     * Resumes network module to enable network activity
     * @returns
     */
    resume() {
        return this.client.request('net.resume');
    }
    /**
     * Returns ID of the last block in a specified account shard
     *
     * @param {ParamsOfFindLastShardBlock} params
     * @returns ResultOfFindLastShardBlock
     */
    find_last_shard_block(params) {
        return this.client.request('net.find_last_shard_block', params);
    }
    /**
     * Requests the list of alternative endpoints from server
     * @returns EndpointsSet
     */
    fetch_endpoints() {
        return this.client.request('net.fetch_endpoints');
    }
    /**
     * Sets the list of endpoints to use on reinit
     *
     * @param {EndpointsSet} params
     * @returns
     */
    set_endpoints(params) {
        return this.client.request('net.set_endpoints', params);
    }
}
exports.NetModule = NetModule;
// debot module
var DebotErrorCode;
(function (DebotErrorCode) {
    DebotErrorCode[DebotErrorCode["DebotStartFailed"] = 801] = "DebotStartFailed";
    DebotErrorCode[DebotErrorCode["DebotFetchFailed"] = 802] = "DebotFetchFailed";
    DebotErrorCode[DebotErrorCode["DebotExecutionFailed"] = 803] = "DebotExecutionFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidHandle"] = 804] = "DebotInvalidHandle";
    DebotErrorCode[DebotErrorCode["DebotInvalidJsonParams"] = 805] = "DebotInvalidJsonParams";
    DebotErrorCode[DebotErrorCode["DebotInvalidFunctionId"] = 806] = "DebotInvalidFunctionId";
    DebotErrorCode[DebotErrorCode["DebotInvalidAbi"] = 807] = "DebotInvalidAbi";
    DebotErrorCode[DebotErrorCode["DebotGetMethodFailed"] = 808] = "DebotGetMethodFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidMsg"] = 809] = "DebotInvalidMsg";
    DebotErrorCode[DebotErrorCode["DebotExternalCallFailed"] = 810] = "DebotExternalCallFailed";
})(DebotErrorCode = exports.DebotErrorCode || (exports.DebotErrorCode = {}));
function paramsOfAppDebotBrowserLog(msg) {
    return {
        type: 'Log',
        msg,
    };
}
exports.paramsOfAppDebotBrowserLog = paramsOfAppDebotBrowserLog;
function paramsOfAppDebotBrowserSwitch(context_id) {
    return {
        type: 'Switch',
        context_id,
    };
}
exports.paramsOfAppDebotBrowserSwitch = paramsOfAppDebotBrowserSwitch;
function paramsOfAppDebotBrowserSwitchCompleted() {
    return {
        type: 'SwitchCompleted',
    };
}
exports.paramsOfAppDebotBrowserSwitchCompleted = paramsOfAppDebotBrowserSwitchCompleted;
function paramsOfAppDebotBrowserShowAction(action) {
    return {
        type: 'ShowAction',
        action,
    };
}
exports.paramsOfAppDebotBrowserShowAction = paramsOfAppDebotBrowserShowAction;
function paramsOfAppDebotBrowserInput(prompt) {
    return {
        type: 'Input',
        prompt,
    };
}
exports.paramsOfAppDebotBrowserInput = paramsOfAppDebotBrowserInput;
function paramsOfAppDebotBrowserGetSigningBox() {
    return {
        type: 'GetSigningBox',
    };
}
exports.paramsOfAppDebotBrowserGetSigningBox = paramsOfAppDebotBrowserGetSigningBox;
function paramsOfAppDebotBrowserInvokeDebot(debot_addr, action) {
    return {
        type: 'InvokeDebot',
        debot_addr,
        action,
    };
}
exports.paramsOfAppDebotBrowserInvokeDebot = paramsOfAppDebotBrowserInvokeDebot;
function paramsOfAppDebotBrowserSend(message) {
    return {
        type: 'Send',
        message,
    };
}
exports.paramsOfAppDebotBrowserSend = paramsOfAppDebotBrowserSend;
function resultOfAppDebotBrowserInput(value) {
    return {
        type: 'Input',
        value,
    };
}
exports.resultOfAppDebotBrowserInput = resultOfAppDebotBrowserInput;
function resultOfAppDebotBrowserGetSigningBox(signing_box) {
    return {
        type: 'GetSigningBox',
        signing_box,
    };
}
exports.resultOfAppDebotBrowserGetSigningBox = resultOfAppDebotBrowserGetSigningBox;
function resultOfAppDebotBrowserInvokeDebot() {
    return {
        type: 'InvokeDebot',
    };
}
exports.resultOfAppDebotBrowserInvokeDebot = resultOfAppDebotBrowserInvokeDebot;
function dispatchAppDebotBrowser(obj, params, app_request_id, client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = {};
            switch (params.type) {
                case 'Log':
                    obj.log(params);
                    break;
                case 'Switch':
                    obj.switch(params);
                    break;
                case 'SwitchCompleted':
                    obj.switch_completed();
                    break;
                case 'ShowAction':
                    obj.show_action(params);
                    break;
                case 'Input':
                    result = yield obj.input(params);
                    break;
                case 'GetSigningBox':
                    result = yield obj.get_signing_box();
                    break;
                case 'InvokeDebot':
                    yield obj.invoke_debot(params);
                    break;
                case 'Send':
                    obj.send(params);
                    break;
            }
            client.resolve_app_request(app_request_id, Object.assign({ type: params.type }, result));
        }
        catch (error) {
            client.reject_app_request(app_request_id, error);
        }
    });
}
/**
 * [UNSTABLE](UNSTABLE.md) Module for working with debot.
 */
class DebotModule {
    constructor(client) {
        this.client = client;
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Starts an instance of debot.
     *
     * @remarks
     * Downloads debot smart contract from blockchain and switches it to
     * context zero.
     * Returns a debot handle which can be used later in `execute` function.
     * This function must be used by Debot Browser to start a dialog with debot.
     * While the function is executing, several Browser Callbacks can be called,
     * since the debot tries to display all actions from the context 0 to the user.
     *
     * # Remarks
     * `start` is equivalent to `fetch` + switch to context 0.
     *
     * @param {ParamsOfStart} params
     * @returns RegisteredDebot
     */
    start(params, obj) {
        return this.client.request('debot.start', params, (params, responseType) => {
            if (responseType === 3) {
                dispatchAppDebotBrowser(obj, params.request_data, params.app_request_id, this.client);
            }
            else if (responseType === 4) {
                dispatchAppDebotBrowser(obj, params, null, this.client);
            }
        });
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Fetches debot from blockchain.
     *
     * @remarks
     * Downloads debot smart contract (code and data) from blockchain and creates
     * an instance of Debot Engine for it.
     *
     * # Remarks
     * It does not switch debot to context 0. Browser Callbacks are not called.
     *
     * @param {ParamsOfFetch} params
     * @returns RegisteredDebot
     */
    fetch(params, obj) {
        return this.client.request('debot.fetch', params, (params, responseType) => {
            if (responseType === 3) {
                dispatchAppDebotBrowser(obj, params.request_data, params.app_request_id, this.client);
            }
            else if (responseType === 4) {
                dispatchAppDebotBrowser(obj, params, null, this.client);
            }
        });
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Executes debot action.
     *
     * @remarks
     * Calls debot engine referenced by debot handle to execute input action.
     * Calls Debot Browser Callbacks if needed.
     *
     * # Remarks
     * Chain of actions can be executed if input action generates a list of subactions.
     *
     * @param {ParamsOfExecute} params
     * @returns
     */
    execute(params) {
        return this.client.request('debot.execute', params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Sends message to Debot.
     *
     * @remarks
     * Used by Debot Browser to send response on Dinterface call or from other Debots.
     *
     * @param {ParamsOfSend} params
     * @returns
     */
    send(params) {
        return this.client.request('debot.send', params);
    }
    /**
     * [UNSTABLE](UNSTABLE.md) Destroys debot handle.
     *
     * @remarks
     * Removes handle from Client Context and drops debot engine referenced by that handle.
     *
     * @param {RegisteredDebot} params
     * @returns
     */
    remove(params) {
        return this.client.request('debot.remove', params);
    }
}
exports.DebotModule = DebotModule;
//# sourceMappingURL=modules.js.map

/***/ }),

/***/ "./node_modules/@tonclient/lib-web/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tonclient/lib-web/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "libWebSetup": () => (/* binding */ libWebSetup),
/* harmony export */   "libWeb": () => (/* binding */ libWeb)
/* harmony export */ });
const workerScript = `
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  \`\${val}\`;
    }
    if (type == 'string') {
        return \`"\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\${val.name}: \${val.message}\\n\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) wasm.__wbindgen_export_2.get(dtor)(a, state.b);
            else state.a = a;
        }
    };
    real.original = state;
    return real;
}
function __wbg_adapter_26(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8ded1327d5761c25(arg0, arg1);
}

function __wbg_adapter_29(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__had3843527501358e(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_32(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4599892e3e068689(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_35(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9940a633be39e491(arg0, arg1, addHeapObject(arg2));
}

/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    try {
        var ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {string} params_json
* @param {number} request_id
*/
function core_request(context, function_name, params_json, request_id) {
    var ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(params_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.core_request(context, ptr0, len0, ptr1, len1, request_id);
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_coreresponsehandler_ba48eae32b1e9248 = function(arg0, arg1, arg2, arg3, arg4) {
        try {
            core_response_handler(arg0 >>> 0, getStringFromWasm0(arg1, arg2), arg3 >>> 0, arg4 !== 0);
        } finally {
            wasm.__wbindgen_free(arg1, arg2);
        }
    };
    imports.wbg.__wbg_new0_8d817915cd890bd8 = function() {
        var ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_8e7a0578598e5039 = function(arg0) {
        var ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_static_accessor_MODULE_452b4680e8614c81 = function() {
        var ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_d1b58dbab69d5bb1 = handleError(function() {
        var ret = self.self;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_window_de445cb18819ad4b = handleError(function() {
        var ret = window.window;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_globalThis_68afcb0d98f0112d = handleError(function() {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_global_baed4e4fa850c0d0 = handleError(function() {
        var ret = global.global;
        return addHeapObject(ret);
    });
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_db0587fa712f9acc = function(arg0, arg1) {
        var ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_79ca0d435495a83a = handleError(function(arg0, arg1) {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_set_ede434d91072bd5f = handleError(function(arg0, arg1, arg2) {
        var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    });
    imports.wbg.__wbg_self_86b4b13392c7af56 = handleError(function() {
        var ret = self.self;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_require_f5521a5b85ad2542 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_crypto_b8c92eaac23d0d80 = function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_9ad6677321a08dd8 = function(arg0) {
        var ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_dd27e6b0652b3236 = function(arg0) {
        var ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_30152dcf953c076d = function(arg0) {
        var ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_subarray_37f4436e082c6827 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_e57c9b75ddead065 = function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    };
    imports.wbg.__wbg_length_3acae3a5337e0257 = function(arg0) {
        var ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
        var ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_44855aefa83ea48c = function(arg0) {
        var ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_04793d2c09ba060f = function(arg0) {
        var ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_fdaef5653b2c1408 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_randomFillSync_d2ba53160aec6aba = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_new_17a08b876c4dedc9 = function() {
        var ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithstrandinit_f8135da00ad2e787 = handleError(function(arg0, arg1, arg2) {
        var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_headers_5b3b48dc79e2b8e7 = function(arg0) {
        var ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_f7962fcf206a328b = handleError(function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    });
    imports.wbg.__wbg_fetch_aad6acd90fb3d3ad = function(arg0, arg1) {
        var ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_e24999f3775888fb = function(arg0) {
        var ret = getObject(arg0) instanceof Response;
        return ret;
    };
    imports.wbg.__wbg_text_e86c77a7af6d8739 = handleError(function(arg0) {
        var ret = getObject(arg0).text();
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_status_b96085a918afaca9 = function(arg0) {
        var ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_681b339cb871babf = function(arg0, arg1) {
        var ret = getObject(arg1).url;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_setTimeout_dc3e25995f3f6069 = handleError(function(arg0, arg1, arg2) {
        var ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    });
    imports.wbg.__wbg_send_c8acbe1946b66480 = handleError(function(arg0, arg1, arg2) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2));
    });
    imports.wbg.__wbg_data_082454890c89a421 = function(arg0) {
        var ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        var ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_newwithstr_94340605b051c9ff = handleError(function(arg0, arg1, arg2, arg3) {
        var ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_new_fd8186f756bf4d19 = handleError(function(arg0, arg1) {
        var ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_setonmessage_134852ae4b9e1175 = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbindgen_cb_forget = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_setonopen_831b8ad112c037c0 = function(arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_237cfe33eca4c13a = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_getTimezoneOffset_d4ddcffd42330e94 = function(arg0) {
        var ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        var ret = false;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Error_af2b16f94f029496 = function(arg0) {
        var ret = getObject(arg0) instanceof Error;
        return ret;
    };
    imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = JSON.stringify(obj === undefined ? null : obj);
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_message_540060fe5a519245 = function(arg0) {
        var ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        var ret = debugString(getObject(arg1));
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_then_45c887a50a229274 = function(arg0, arg1) {
        var ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_9d18941da21f7104 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_57cbe6ab0b3b60a7 = function(arg0) {
        var ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_close_312d4654f7c8592f = handleError(function(arg0) {
        getObject(arg0).close();
    });
    imports.wbg.__wbg_instanceof_Window_0e8decd0a6179699 = function(arg0) {
        var ret = true;
        return ret;
    };
    imports.wbg.__wbindgen_closure_wrapper3278 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 269, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3819 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 1064, __wbg_adapter_29);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3818 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 272, __wbg_adapter_32);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3820 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 266, __wbg_adapter_35);
        return addHeapObject(ret);
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}




function core_response_handler(request_id, params_json, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        paramsJson: params_json,
        responseType: response_type,
        finished,
    });
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
    case 'init':
        (async () => {
            await init(message.wasmModule);
            postMessage({ type: 'init' });
        })();
        break;

    case 'createContext':
        postMessage({
            type: 'createContext',
            result: core_create_context(message.configJson),
            requestId: message.requestId,
        });
        break;

    case 'destroyContext':
        core_destroy_context(message.context);
        postMessage({
            type: 'destroyContext'
        });
        break;

    case 'request':
        core_request(
            message.context,
            message.functionName,
            message.functionParamsJson,
            message.requestId,
        );
        break;
    }
};
`;


let options = null;

function libWebSetup(libOptions) {
    options = libOptions;
}

function libWeb() {
    function debugLog(message) {
        if (options && options.debugLog) {
            options.debugLog(message);
        }
    }

    const workerBlob = new Blob(
        [workerScript],
        { type: 'application/javascript' }
    );
    const workerUrl = URL.createObjectURL(workerBlob);
    const worker = new Worker(workerUrl);


    let nextCreateContextRequestId = 1;
    const createContextRequests = new Map();
    let initComplete = false;

    let responseHandler = null;
    const library = {
        setResponseHandler: (handler) => {
            responseHandler = handler;
        },
        createContext: (configJson) => {
            return new Promise((resolve) => {
                const requestId = nextCreateContextRequestId;
                nextCreateContextRequestId += 1;
                createContextRequests.set(requestId, {
                    configJson,
                    resolve,
                })
                if (initComplete) {
                    worker.postMessage({
                        type: 'createContext',
                        requestId,
                        configJson,
                    });
                }
            });
        },
        destroyContext: (context) => {
            worker.postMessage({
                type: 'destroyContext',
                context,
            })
        },
        sendRequest: (context, requestId, functionName, functionParamsJson) => {
            worker.postMessage({
                type: 'request',
                context,
                requestId,
                functionName,
                functionParamsJson
            })
        }
    };

    worker.onmessage = (evt) => {
        const message = evt.data;
        switch (message.type) {
        case 'init':
            initComplete = true;
            for (const [requestId, request] of createContextRequests.entries()) {
                worker.postMessage({
                    type: 'createContext',
                    requestId,
                    configJson: request.configJson,
                });
            }
            break;
        case 'createContext':
            const request = createContextRequests.get(message.requestId);
            if (request) {
                createContextRequests.delete(message.requestId);
                request.resolve(message.result);
            }
            break;
        case 'destroyContext':
            break;
        case 'response':
            if (responseHandler) {
                let paramsJson = message.paramsJson;
                if (paramsJson.charCodeAt(0) === 0xFEFF) {
                    paramsJson = paramsJson.substr(1);
                }
                responseHandler(message.requestId, paramsJson, message.responseType, message.finished);
            }
            break;
        }
    }

    worker.onerror = (evt) => {
        console.log(`Error from Web Worker: ${evt.message}`);
    };

    (async () => {
        const e = Date.now();
        let wasmModule;
        const fetched = fetch((options && options.binaryURL) || 'test/tonclient.wasm');
        if (WebAssembly.compileStreaming) {
            debugLog('compileStreaming binary');
            wasmModule = await WebAssembly.compileStreaming(fetched);
        } else {
            debugLog('compile binary');
            wasmModule = await WebAssembly.compile(await (await fetched).arrayBuffer());
        }
        worker.postMessage({
            type: 'init',
            wasmModule,
        });
        debugLog(`compile time ${Date.now() - e}`);
    })();

    return Promise.resolve(library);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tonclient_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonclient/core */ "./node_modules/@tonclient/core/dist/index.js");
/* harmony import */ var _tonclient_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tonclient_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tonclient_lib_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonclient/lib-web */ "./node_modules/@tonclient/lib-web/index.js");
/* harmony import */ var _ContestContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContestContract */ "./ContestContract.js");




_tonclient_core__WEBPACK_IMPORTED_MODULE_0__.TonClient.useBinaryLibrary(_tonclient_lib_web__WEBPACK_IMPORTED_MODULE_1__.libWeb);

const client = new _tonclient_core__WEBPACK_IMPORTED_MODULE_0__.TonClient({
    network: { 
        endpoints: ['main.ton.dev'] 
    } 
});




window.addEventListener("load", async () => {

    const address="0:505476d958a6699bcd1824de767e11e53a59e427608a1d45b80d7642d9d29375";
    
    console.log(await _tonclient_core__WEBPACK_IMPORTED_MODULE_0__.TonClient.default.client.version());

    const result = await client.contracts.runLocal({
        address: address,
        functionName: 'getContestInfo',
        abi: _ContestContract__WEBPACK_IMPORTED_MODULE_2__.ContestContract,
        input: {},
    });
    console.log(JSON.stringify(result.decoded.output));


});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0My8uL0NvbnRlc3RDb250cmFjdC5qcyIsIndlYnBhY2s6Ly9uZXdwcm9qZWN0My8uL25vZGVfbW9kdWxlcy9AdG9uY2xpZW50L2NvcmUvZGlzdC9hY2NvdW50LmpzIiwid2VicGFjazovL25ld3Byb2plY3QzLy4vbm9kZV9tb2R1bGVzL0B0b25jbGllbnQvY29yZS9kaXN0L2Jpbi5qcyIsIndlYnBhY2s6Ly9uZXdwcm9qZWN0My8uL25vZGVfbW9kdWxlcy9AdG9uY2xpZW50L2NvcmUvZGlzdC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vbmV3cHJvamVjdDMvLi9ub2RlX21vZHVsZXMvQHRvbmNsaWVudC9jb3JlL2Rpc3QvZXJyb3JzLmpzIiwid2VicGFjazovL25ld3Byb2plY3QzLy4vbm9kZV9tb2R1bGVzL0B0b25jbGllbnQvY29yZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL25ld3Byb2plY3QzLy4vbm9kZV9tb2R1bGVzL0B0b25jbGllbnQvY29yZS9kaXN0L21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vbmV3cHJvamVjdDMvLi9ub2RlX21vZHVsZXMvQHRvbmNsaWVudC9saWItd2ViL2luZGV4LmpzIiwid2VicGFjazovL25ld3Byb2plY3QzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Byb2plY3QzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ld3Byb2plY3QzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdwcm9qZWN0My93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Byb2plY3QzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3cHJvamVjdDMvLi9pbmRleC5qcyJdLCJuYW1lcyI6W10s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBbUI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QyxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLGVBQWU7QUFDaEQsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7O1VDeHZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEO0FBQ2I7QUFDTTs7QUFFbEQsdUVBQTBCLENBQUMsc0RBQU07O0FBRWpDLG1CQUFtQixzREFBUztBQUM1QixjO0FBQ0E7QUFDQSxLO0FBQ0EsQ0FBQzs7Ozs7QUFLRDs7QUFFQTs7QUFFQSxzQkFBc0IsNkVBQWdDOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZEQUFlO0FBQzVCLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7OztBQUdBLENBQUMsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDb250ZXN0Q29udHJhY3QgPXtcclxuXHRcIkFCSSB2ZXJzaW9uXCI6IDIsXHJcblx0XCJoZWFkZXJcIjogW1wicHVia2V5XCIsIFwidGltZVwiXSxcclxuXHRcImZ1bmN0aW9uc1wiOiBbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImNvbnN0cnVjdG9yXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ0aXRsZVwiLFwidHlwZVwiOlwiYnl0ZXNcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwibGlua1wiLFwidHlwZVwiOlwiYnl0ZXNcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaGFzaFwiLFwidHlwZVwiOlwidWludDI1NlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJ5QWRkclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJ5S2V5c1wiLFwidHlwZVwiOlwidWludDI1NltdXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInNldHVwQ29udGVzdFwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwic3RhcnRzSW5cIixcInR5cGVcIjpcInVpbnQxNlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJsYXN0c0ZvclwiLFwidHlwZVwiOlwidWludDE2XCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInNldHVwSnVyb3JzXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJvcnNcIixcInR5cGVcIjpcImFkZHJlc3NbXVwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJyZWplY3RBcHBsaWNhbnRcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJzdWJtaXRXaXRoQ29udGFjdFwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwicGFydGljaXBhbnRcIixcInR5cGVcIjpcImFkZHJlc3NcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiZm9ydW1MaW5rXCIsXCJ0eXBlXCI6XCJieXRlc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmaWxlTGlua1wiLFwidHlwZVwiOlwiYnl0ZXNcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaGFzaFwiLFwidHlwZVwiOlwidWludDI1NlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjb250YWN0XCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInN1Ym1pdFwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwicGFydGljaXBhbnRcIixcInR5cGVcIjpcImFkZHJlc3NcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiZm9ydW1MaW5rXCIsXCJ0eXBlXCI6XCJieXRlc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmaWxlTGlua1wiLFwidHlwZVwiOlwiYnl0ZXNcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaGFzaFwiLFwidHlwZVwiOlwidWludDI1NlwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJvcGVuQ29udGVzdFwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImNsb3NlQ29udGVzdFwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIm9wZW5Wb3RpbmdcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJjbG9zZVZvdGluZ1wiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInJlamVjdFZvdGVcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJ2b3RlRm9yXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcIm1hcmtcIixcInR5cGVcIjpcInVpbnQzMlwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJ2b3RlRm9yQ29tbWVudGVkXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcIm1hcmtcIixcInR5cGVcIjpcInVpbnQzMlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjb21tZW50XCIsXCJ0eXBlXCI6XCJieXRlc1wifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJhYnN0YWluXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImNvbW1lbnRcIixcInR5cGVcIjpcImJ5dGVzXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInZvdGVBZ2FpbnN0XCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImNvbW1lbnRcIixcInR5cGVcIjpcImJ5dGVzXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImZpbmFsaXplUmVzdWx0c1wiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInZvdGluZ0VuZHNJblwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiZGF5c0xlZnRcIixcInR5cGVcIjpcInVpbnQ2NFwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJjb250ZXN0U3RhcnRDb3VudGRvd25cIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInNlY29uZHNMZWZ0XCIsXCJ0eXBlXCI6XCJpbnQ2NFwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJjb250ZXN0Q291bnRkb3duXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJzZWNvbmRzTGVmdFwiLFwidHlwZVwiOlwiaW50NjRcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwidm90aW5nQ291bnRkb3duXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJzZWNvbmRzTGVmdFwiLFwidHlwZVwiOlwiaW50NjRcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0SWRcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImFkZHJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ2YWx1ZTBcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJsaXN0Q29udGVuZGVyc1wiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaWRzXCIsXCJ0eXBlXCI6XCJ1aW50MTZbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhZGRyZXNzZXNcIixcInR5cGVcIjpcImFkZHJlc3NbXVwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRTdGF0c0ZvclwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInRvdGFsUG9pbnRzXCIsXCJ0eXBlXCI6XCJ1aW50NjRcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYXZnSGlcIixcInR5cGVcIjpcInVpbnQzMlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhdmdMb1wiLFwidHlwZVwiOlwidWludDMyXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImp1cm9yc1ZvdGVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYWNjZXB0ZWRcIixcInR5cGVcIjpcInVpbnQxNlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhYnN0YWluZWRcIixcInR5cGVcIjpcInVpbnQxNlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJyZWplY3RlZFwiLFwidHlwZVwiOlwidWludDE2XCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImdldFZvdGVzUGVySnVyb3JcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJvcnNGb3JcIixcInR5cGVcIjpcImFkZHJlc3NbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJtYXJrc1wiLFwidHlwZVwiOlwidWludDMyW11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiY29tbWVudHNGb3JcIixcInR5cGVcIjpcImJ5dGVzW11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwianVyb3JzQWJzdGFpbmVkXCIsXCJ0eXBlXCI6XCJhZGRyZXNzW11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiY29tbWVudHNBYnN0YWluZWRcIixcInR5cGVcIjpcImJ5dGVzW11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwianVyb3JzQWdhaW5zdFwiLFwidHlwZVwiOlwiYWRkcmVzc1tdXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImNvbW1lbnRzQWdhaW5zdFwiLFwidHlwZVwiOlwiYnl0ZXNbXVwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRKdXJ5U3RhdHNcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcImNvbXBvbmVudHNcIjpbe1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInVpbnQxNlwifSx7XCJuYW1lXCI6XCJhZGRyXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcImp1cnlcIixcInR5cGVcIjpcIm1hcCh1aW50MjU2LHR1cGxlKVwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRDb250ZXN0U3RhdHNcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInRvdGFsU2NvcmVcIixcInR5cGVcIjpcInVpbnQ2NFwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhdmdIaVwiLFwidHlwZVwiOlwidWludDMyXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImF2Z0xvXCIsXCJ0eXBlXCI6XCJ1aW50MzJcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwianVyb3JzVm90ZWRcIixcInR5cGVcIjpcInVpbnQxNlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJlbnRyaWVzXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0Q29udGVzdEluZm9cIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInRpdGxlXCIsXCJ0eXBlXCI6XCJieXRlc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJsaW5rXCIsXCJ0eXBlXCI6XCJieXRlc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJoYXNoXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImp1cnlBZGRyXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImp1cnlLZXlzXCIsXCJ0eXBlXCI6XCJ1aW50MjU2W11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwianVyeUFkZHJlc3Nlc1wiLFwidHlwZVwiOlwiYWRkcmVzc1tdXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcIm1heFZvdGluZ0F0dGVtcHRzXCIsXCJ0eXBlXCI6XCJ1aW50OFwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRDb250ZXN0UHJvZ3Jlc3NcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInZvdGVzQ291bnRcIixcInR5cGVcIjpcInVpbnQ2NFwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjb250ZW5kZXJzQ291bnRcIixcInR5cGVcIjpcInVpbnQxNlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjb250ZXN0T3BlblwiLFwidHlwZVwiOlwiYm9vbFwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ2b3RpbmdPcGVuXCIsXCJ0eXBlXCI6XCJib29sXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImNvbnRlc3REZWFkbGluZVwiLFwidHlwZVwiOlwidWludDY0XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInZvdGluZ0RlYWRsaW5lXCIsXCJ0eXBlXCI6XCJ1aW50NjRcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwicmVzdWx0c0ZpbmFsaXplZFwiLFwidHlwZVwiOlwiYm9vbFwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRJbmZvRm9yXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYWRkclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmb3J1bUxpbmtcIixcInR5cGVcIjpcImJ5dGVzXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImZpbGVMaW5rXCIsXCJ0eXBlXCI6XCJieXRlc1wifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJoYXNoXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImFwcGxpZWRBdFwiLFwidHlwZVwiOlwidWludDY0XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImNvbnRhY3RcIixcInR5cGVcIjpcImFkZHJlc3NcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0Q29udGVuZGVyc0luZm9cIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImlkc1wiLFwidHlwZVwiOlwidWludDE2W11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYWRkcnNcIixcInR5cGVcIjpcImFkZHJlc3NbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmb3J1bUxpbmtzXCIsXCJ0eXBlXCI6XCJieXRlc1tdXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImZpbGVMaW5rc1wiLFwidHlwZVwiOlwiYnl0ZXNbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJoYXNoZXNcIixcInR5cGVcIjpcInVpbnQyNTZbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhcHBsaWVkQXRzXCIsXCJ0eXBlXCI6XCJ1aW50NjRbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjb250YWN0c1wiLFwidHlwZVwiOlwiYWRkcmVzc1tdXCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImdldFZvdGVzXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ2b3Rlc1wiLFwidHlwZVwiOlwidWludDY0XCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImdldFZvdGVzRm9yXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwidWludDE2XCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwidm90ZXNcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRUb3RhbFJhdGluZ0ZvclwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInJhdGluZ1wiLFwidHlwZVwiOlwidWludDY0XCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInJlc3VsdHNGaW5hbGl6ZWRcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImZsYWdcIixcInR5cGVcIjpcImJvb2xcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0RmluYWxTdGF0dXNGb3JcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJzdGF0dXNcIixcInR5cGVcIjpcImJvb2xcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0RmluYWxTdGF0dXNcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInN0YXR1c1wiLFwidHlwZVwiOlwiYm9vbFtdXCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImdldEZpbmFsQ29udGVzdFN0YXRzXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ0b3RhbFNjb3JlXCIsXCJ0eXBlXCI6XCJ1aW50NjRcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYXZnSGlcIixcInR5cGVcIjpcInVpbnQzMlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJhdmdMb1wiLFwidHlwZVwiOlwidWludDMyXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImp1cm9yc1ZvdGVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiZW50cmllc1wiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInBhc3NlZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInJlamVjdGVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZ2V0RmluYWxTdGF0c0ZvclwiLFxyXG5cdFx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInN0YXR1c1wiLFwidHlwZVwiOlwiYm9vbFwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ0b3RhbFBvaW50c1wiLFwidHlwZVwiOlwidWludDY0XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImF2Z0hpXCIsXCJ0eXBlXCI6XCJ1aW50MzJcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYXZnTG9cIixcInR5cGVcIjpcInVpbnQzMlwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJvcnNWb3RlZFwiLFwidHlwZVwiOlwidWludDE2XCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImFjY2VwdGVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYWJzdGFpbmVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwicmVqZWN0ZWRcIixcInR5cGVcIjpcInVpbnQxNlwifVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJnZXRGaW5hbFZvdGluZ0RhdGFcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImlkc1wiLFwidHlwZVwiOlwidWludDE2W11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwianVyeUFkZHJlc3Nlc1wiLFwidHlwZVwiOlwiYWRkcmVzc1tdXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInN0YXR1c2VzXCIsXCJ0eXBlXCI6XCJib29sW11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwidG90YWxSYXRpbmdzXCIsXCJ0eXBlXCI6XCJ1aW50NjRbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJqdXJvcnNWb3RlZFwiLFwidHlwZVwiOlwidWludDE2W11cIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwidm90ZXNGb3JcIixcInR5cGVcIjpcInVpbnQxNltdXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInZvdGVzQWJzdGFpbmVkXCIsXCJ0eXBlXCI6XCJ1aW50MTZbXVwifSxcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ2b3Rlc0FnYWluc3RcIixcInR5cGVcIjpcInVpbnQxNltdXCJ9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInRyYW5zZmVyXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJkZXN0XCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInZhbHVlXCIsXCJ0eXBlXCI6XCJ1aW50NjRcIn0sXHJcblx0XHRcdFx0e1wibmFtZVwiOlwiYm91bmNlXCIsXCJ0eXBlXCI6XCJib29sXCJ9LFxyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImZsYWdzXCIsXCJ0eXBlXCI6XCJ1aW50MTZcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiZm9yY2VDb250ZXN0XCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmbGFnXCIsXCJ0eXBlXCI6XCJib29sXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImZvcmNlVm90aW5nXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJmbGFnXCIsXCJ0eXBlXCI6XCJib29sXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImZvcmNlRmluYWxpemVcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcImZsYWdcIixcInR5cGVcIjpcImJvb2xcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwic2V0Q29udGVzdERlYWRsaW5lXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJ0aW1lXCIsXCJ0eXBlXCI6XCJ1aW50NjRcIn1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwic2V0Vm90aW5nRGVhZGxpbmVcIixcclxuXHRcdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHRcdHtcIm5hbWVcIjpcInRpbWVcIixcInR5cGVcIjpcInVpbnQ2NFwifVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJ1cGdyYWRlXCIsXHJcblx0XHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0XHR7XCJuYW1lXCI6XCJjXCIsXCJ0eXBlXCI6XCJjZWxsXCJ9XHJcblx0XHRcdF0sXHJcblx0XHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHRdLFxyXG5cdFwiZGF0YVwiOiBbXHJcblx0XHR7XCJrZXlcIjoxLFwibmFtZVwiOlwiZGVidWdOb25jZVwiLFwidHlwZVwiOlwidWludDI1NlwifVxyXG5cdF0sXHJcblx0XCJldmVudHNcIjogW1xyXG5cdF1cclxufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjY291bnQgPSBleHBvcnRzLkFjY291bnRFcnJvciA9IHZvaWQgMDtcbmNvbnN0IG1vZHVsZXNfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXNcIik7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCIuL2NsaWVudFwiKTtcbmNsYXNzIEFjY291bnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBzdGF0aWMgbWlzc2luZ1RWQygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50RXJyb3IoXCJDYW4ndCBjYWxjdWxhdGUgZGVwbG95IHBhcmFtczogbWlzc2luZyByZXF1aXJlZCBUVkMuXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWNjb3VudEVycm9yID0gQWNjb3VudEVycm9yO1xuY2xhc3MgQWNjb3VudCB7XG4gICAgY29uc3RydWN0b3IoY29udHJhY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgICAgIHRoaXMuc3luY0xhc3RUcmFuc0x0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGllbnQgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjbGllbnRfMS5Ub25DbGllbnQuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5hYmkgPSBtb2R1bGVzXzEuYWJpQ29udHJhY3QoY29udHJhY3QuYWJpKTtcbiAgICAgICAgdGhpcy5zaWduZXIgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2lnbmVyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBtb2R1bGVzXzEuc2lnbmVyTm9uZSgpO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSAoX2MgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkcmVzcykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogbnVsbDtcbiAgICAgICAgdGhpcy5pbml0RGF0YSA9IChfZCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0RGF0YSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRCb2MgPSBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IGdpdmVyKGdpdmVyKSB7XG4gICAgICAgIHRoaXMuX2dpdmVyID0gZ2l2ZXI7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVHaXZlcigpIHtcbiAgICAgICAgY29uc3QgZ2l2ZXIgPSBuZXcgQWNjb3VudChHaXZlckNvbnRyYWN0LCB7XG4gICAgICAgICAgICBjbGllbnQ6IGNsaWVudF8xLlRvbkNsaWVudC5kZWZhdWx0LFxuICAgICAgICAgICAgYWRkcmVzczogR2l2ZXJDb250cmFjdC5kZWZhdWx0QWRkcmVzcyxcbiAgICAgICAgICAgIHNpZ25lcjogbW9kdWxlc18xLnNpZ25lcktleXMoR2l2ZXJDb250cmFjdC5kZWZhdWx0S2V5cyksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGFkZHJlc3MsIHZhbHVlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCBnaXZlci5ydW4oXCJzZW5kVHJhbnNhY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgIGRlc3Q6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnaXZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dpdmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9naXZlciA9IHRoaXMuY3JlYXRlR2l2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2l2ZXI7XG4gICAgfVxuICAgIGdldEFkZHJlc3MoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmIChhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95UGFyYW1zID0gdGhpcy5nZXRQYXJhbXNPZkRlcGxveU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBpbml0RnVuY3Rpb25OYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSAoeWllbGQgdGhpcy5jbGllbnQuYWJpLmVuY29kZV9tZXNzYWdlKGRlcGxveVBhcmFtcykpLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UGFyYW1zT2ZEZXBsb3lNZXNzYWdlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuY29udHJhY3QudHZjKSB7XG4gICAgICAgICAgICB0aHJvdyBBY2NvdW50RXJyb3IubWlzc2luZ1RWQygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFiaTogdGhpcy5hYmksXG4gICAgICAgICAgICBzaWduZXI6IHRoaXMuc2lnbmVyLFxuICAgICAgICAgICAgZGVwbG95X3NldDoge1xuICAgICAgICAgICAgICAgIHR2YzogdGhpcy5jb250cmFjdC50dmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5pbml0RGF0YSkge1xuICAgICAgICAgICAgcGFyYW1zLmRlcGxveV9zZXQuaW5pdGlhbF9kYXRhID0gdGhpcy5pbml0RGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0RnVuY3Rpb25OYW1lKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyYW1zLmNhbGxfc2V0ID0ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0RnVuY3Rpb25OYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcImNvbnN0cnVjdG9yXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdElucHV0KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxfc2V0LmlucHV0ID0gb3B0aW9ucy5pbml0SW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVwbG95cyBhY2NvdW50IGludG8gbmV0d29ya1xuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgZGVwbG95KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveVBhcmFtcyA9IHRoaXMuZ2V0UGFyYW1zT2ZEZXBsb3lNZXNzYWdlKG9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgdXNlR2l2ZXIgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudXNlR2l2ZXI7XG4gICAgICAgICAgICBjb25zdCBnaXZlciA9IHVzZUdpdmVyID09PSB0cnVlID8gQWNjb3VudC5naXZlciA6IHVzZUdpdmVyO1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gKHlpZWxkIHRoaXMuY2xpZW50LmFiaS5lbmNvZGVfbWVzc2FnZShkZXBsb3lQYXJhbXMpKS5hZGRyZXNzO1xuICAgICAgICAgICAgaWYgKGdpdmVyKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZ2l2ZXIodGhpcy5hZGRyZXNzLCAxMDAwMDAwMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLmNsaWVudC5wcm9jZXNzaW5nLnByb2Nlc3NfbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZV9lbmNvZGVfcGFyYW1zOiBkZXBsb3lQYXJhbXMsXG4gICAgICAgICAgICAgICAgc2VuZF9ldmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5lZWRTeW5jV2l0aFRyYW5zYWN0aW9uKHJlc3VsdC50cmFuc2FjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBtZXNzYWdlIG9uIG5ldHdvcmsgYW5kIHJldHVybnMgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICAgKiBhYm91dCByZXN1bHRzIGluY2x1ZGluZyBwcm9kdWNlZCB0cmFuc2FjdGlvbiBhbmQgbWVzc2FnZXMuXG4gICAgICogQHBhcmFtIGZ1bmN0aW9uTmFtZVxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgcnVuKGZ1bmN0aW9uTmFtZSwgaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKHlpZWxkIHRoaXMuY2xpZW50LnByb2Nlc3NpbmcucHJvY2Vzc19tZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlX2VuY29kZV9wYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogeWllbGQgdGhpcy5nZXRBZGRyZXNzKCksXG4gICAgICAgICAgICAgICAgICAgIGFiaTogdGhpcy5hYmksXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcjogKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpZ25lcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5zaWduZXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxfc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbmRfZXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMubmVlZFN5bmNXaXRoVHJhbnNhY3Rpb24ocmVzdWx0LnRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgbWVzc2FnZSBvbiBsb2NhbCBUVk0gYW5kIHJldHVybnMgZGVjb2RlZCBvdXRwdXRcbiAgICAgKiBAcGFyYW0gZnVuY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBydW5Mb2NhbChmdW5jdGlvbk5hbWUsIGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0geWllbGQgdGhpcy5jbGllbnQuYWJpLmVuY29kZV9tZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB5aWVsZCB0aGlzLmdldEFkZHJlc3MoKSxcbiAgICAgICAgICAgICAgICBhYmk6IHRoaXMuYWJpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogdGhpcy5zaWduZXIsXG4gICAgICAgICAgICAgICAgY2FsbF9zZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wZXJmb3JtQWxsQ2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geWllbGQgdGhpcy5jbGllbnQudHZtLnJ1bl9leGVjdXRvcih7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IG1vZHVsZXNfMS5hY2NvdW50Rm9yRXhlY3V0b3JBY2NvdW50KHlpZWxkIHRoaXMuYm9jKCkpLFxuICAgICAgICAgICAgICAgICAgICBhYmk6IHRoaXMuYWJpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybl91cGRhdGVkX2FjY291bnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAoeWllbGQgdGhpcy5jbGllbnQudHZtLnJ1bl90dm0oe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiB5aWVsZCB0aGlzLmJvYygpLFxuICAgICAgICAgICAgICAgICAgICBhYmk6IHRoaXMuYWJpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybl91cGRhdGVkX2FjY291bnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5hY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZWRCb2MgPSByZXN1bHQuYWNjb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWVkU3luY1dpdGhUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uLmFib3J0ZWQgJiYgdHJhbnNhY3Rpb24ubHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3luY0xhc3RUcmFuc0x0ID0gdHJhbnNhY3Rpb24ubHQ7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZEJvYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByYXcgZGF0YSBvZiB0aGUgYWNjb3VudCBpbiBmb3JtIG9mIEJPQy5cbiAgICAgKi9cbiAgICBib2MoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZWRCb2MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRCb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0geWllbGQgdGhpcy5nZXRBZGRyZXNzKCk7XG4gICAgICAgICAgICBjb25zdCBuZXQgPSB0aGlzLmNsaWVudC5uZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zeW5jTGFzdFRyYW5zTHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IHlpZWxkIG5ldC5xdWVyeV9jb2xsZWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogXCJhY2NvdW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3RyYW5zX2x0OiB7IGdlOiB0aGlzLnN5bmNMYXN0VHJhbnNMdCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiYm9jXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLnJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYyA9IGFjY291bnRzLnJlc3VsdFswXS5ib2M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY0xhc3RUcmFuc0x0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZWRCb2MgPSBib2M7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYm9jID0gKHlpZWxkIG5ldC53YWl0X2Zvcl9jb2xsZWN0aW9uKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBcImFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiB0aGlzLmFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogXCJib2NcIixcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSkpLnJlc3VsdC5ib2M7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZEJvYyA9IGJvYztcbiAgICAgICAgICAgIHJldHVybiBib2M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcm9wcyBhbGwgY2FjaGVkIGFuZCBsb2NhbCBkYXRhLlxuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkQm9jID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBwYXJzZWQgZGF0YSBvZiB0aGUgYWNjb3VudC5cbiAgICAgKi9cbiAgICBnZXRBY2NvdW50KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuICh5aWVsZCB0aGlzLmNsaWVudC5ib2MucGFyc2VfYWNjb3VudCh7XG4gICAgICAgICAgICAgICAgYm9jOiB5aWVsZCB0aGlzLmJvYygpLFxuICAgICAgICAgICAgfSkpLnBhcnNlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZyZWUgYWxsIGludGVybmFsIHJlc291cmNlcyByZWxhdGVkIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBhbmQgYWxsb2NhdGVkIGluc2lkZSBjb3JlLlxuICAgICAqXG4gICAgICogSXQgaXMgYSBnb29kIHByYWN0aWNlIHRvIGNhbGwgdGhpcyBtZXRob2Qgd2hlbiB5b3UgaGF2ZSBmaW5pc2hlZFxuICAgICAqIHdpdGggdGhpcyBBY2NvdW50IG9iamVjdC5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGluc3RhbmNlIHN0aWxsIGZ1bGx5IG9wZXJhYmxlLlxuICAgICAqIFNvIHlvdSBjYW4gY29udGludWUgdG8gd29yayB3aXRoIHRoaXMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5BY2NvdW50ID0gQWNjb3VudDtcbkFjY291bnQuX2dpdmVyID0gbnVsbDtcbmNvbnN0IEdpdmVyQ29udHJhY3QgPSB7XG4gICAgYWJpOiB7XG4gICAgICAgIFwiQUJJIHZlcnNpb25cIjogMixcbiAgICAgICAgaGVhZGVyOiBbXCJ0aW1lXCIsIFwiZXhwaXJlXCJdLFxuICAgICAgICBmdW5jdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNlbmRUcmFuc2FjdGlvblwiLFxuICAgICAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MTI4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJvdW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ2V0TWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICAgICAgICAgIG91dHB1dHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV4cGlyZUF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInR1cGxlW11cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInVwZ3JhZGVcIixcbiAgICAgICAgICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXdjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNvbnN0cnVjdG9yXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBldmVudHM6IFtdLFxuICAgIH0sXG4gICAgdHZjOiBcIlwiLFxuICAgIGRlZmF1bHRBZGRyZXNzOiBcIjA6YjVlOTI0MGZjMmQyZjFmZjhjYmIxZDFkZWU3ZmI3Y2FlMTU1ZTVmNjMyMGU1ODVmY2M2ODU2OTg5OTRhMTlhNVwiLFxuICAgIGRlZmF1bHRLZXlzOiB7XG4gICAgICAgIFwicHVibGljXCI6IFwiMmFkYTJlNjVhYjhlZWFiMDk0OTBlMzUyMTQxNWY0NWI2ZTQyZGY5Yzc2MGE2MzliY2Y1Mzk1NzU1MGIyNWExNlwiLFxuICAgICAgICBcInNlY3JldFwiOiBcIjE3MmFmNTQwZTQzYTUyNDc2M2RkNTNiMjZhMDY2ZDQ3MmE5N2M0ZGUzN2Q1NDk4MTcwNTY0NTEwNjA4MjUwYzNcIixcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY291bnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVxdWVzdCA9IGV4cG9ydHMuZGVzdHJveUNvbnRleHQgPSBleHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBleHBvcnRzLnVzZUxpYnJhcnkgPSBleHBvcnRzLlJlc3BvbnNlVHlwZSA9IHZvaWQgMDtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xudmFyIFJlc3BvbnNlVHlwZTtcbihmdW5jdGlvbiAoUmVzcG9uc2VUeXBlKSB7XG4gICAgUmVzcG9uc2VUeXBlW1Jlc3BvbnNlVHlwZVtcIlN1Y2Nlc3NcIl0gPSAwXSA9IFwiU3VjY2Vzc1wiO1xuICAgIFJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGVbXCJFcnJvclwiXSA9IDFdID0gXCJFcnJvclwiO1xuICAgIFJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGVbXCJOb3BcIl0gPSAyXSA9IFwiTm9wXCI7XG4gICAgUmVzcG9uc2VUeXBlW1Jlc3BvbnNlVHlwZVtcIkFwcFJlcXVlc3RcIl0gPSAzXSA9IFwiQXBwUmVxdWVzdFwiO1xuICAgIFJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGVbXCJBcHBOb3RpZnlcIl0gPSA0XSA9IFwiQXBwTm90aWZ5XCI7XG4gICAgUmVzcG9uc2VUeXBlW1Jlc3BvbnNlVHlwZVtcIkN1c3RvbVwiXSA9IDEwMF0gPSBcIkN1c3RvbVwiO1xufSkoUmVzcG9uc2VUeXBlID0gZXhwb3J0cy5SZXNwb25zZVR5cGUgfHwgKGV4cG9ydHMuUmVzcG9uc2VUeXBlID0ge30pKTtcbmxldCBsb2FkaW5nID0gbnVsbDtcbmxldCBsb2FkRXJyb3IgPSBudWxsO1xubGV0IGxpYnJhcnkgPSBudWxsO1xuY29uc3QgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XG5sZXQgbmV4dFJlcXVlc3RJZCA9IDE7XG5sZXQgY29udGV4dENvdW50ID0gMDtcbmxldCByZXNwb25zZUhhbmRsZXJBc3NpZ25lZCA9IGZhbHNlO1xuZnVuY3Rpb24gY2hlY2tSZXNwb25zZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbXVzdEJlQXNzaWduZWQgPSAoY29udGV4dENvdW50ID4gMCkgfHwgKHJlcXVlc3RzLnNpemUgPiAwKTtcbiAgICBpZiAocmVzcG9uc2VIYW5kbGVyQXNzaWduZWQgIT09IG11c3RCZUFzc2lnbmVkKSB7XG4gICAgICAgIGlmIChtdXN0QmVBc3NpZ25lZCkge1xuICAgICAgICAgICAgbGlicmFyeSA9PT0gbnVsbCB8fCBsaWJyYXJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaWJyYXJ5LnNldFJlc3BvbnNlSGFuZGxlcihoYW5kbGVMaWJyYXJ5UmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGlicmFyeSA9PT0gbnVsbCB8fCBsaWJyYXJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaWJyYXJ5LnNldFJlc3BvbnNlSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3BvbnNlSGFuZGxlckFzc2lnbmVkID0gbXVzdEJlQXNzaWduZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdXNlTGlicmFyeShsb2FkZXIpIHtcbiAgICBsb2FkaW5nID0gW107XG4gICAgbG9hZGVyKCkudGhlbigobGliLCBlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBzYXZlTG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgIGxvYWRpbmcgPSBudWxsO1xuICAgICAgICBpZiAobGliKSB7XG4gICAgICAgICAgICBsaWJyYXJ5ID0gbGliO1xuICAgICAgICAgICAgc2F2ZUxvYWRpbmcgPT09IG51bGwgfHwgc2F2ZUxvYWRpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhdmVMb2FkaW5nLmZvckVhY2goeCA9PiB4LnJlc29sdmUobGliKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2FkRXJyb3IgPSBlcnJvciB8fCBudWxsO1xuICAgICAgICAgICAgc2F2ZUxvYWRpbmcgPT09IG51bGwgfHwgc2F2ZUxvYWRpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhdmVMb2FkaW5nLmZvckVhY2goeCA9PiB4LnJlamVjdChlcnJvcikpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVzZUxpYnJhcnkgPSB1c2VMaWJyYXJ5O1xuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjb25maWcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBsaWIgPSBsaWJyYXJ5IHx8ICh5aWVsZCBsb2FkUmVxdWlyZWQoKSk7XG4gICAgICAgIGNvbnRleHRDb3VudCArPSAxO1xuICAgICAgICByZXR1cm4gcGFyc2VSZXN1bHQoeWllbGQgbGliLmNyZWF0ZUNvbnRleHQoSlNPTi5zdHJpbmdpZnkoY29uZmlnKSkpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmZ1bmN0aW9uIGRlc3Ryb3lDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb250ZXh0Q291bnQgPSBNYXRoLm1heChjb250ZXh0Q291bnQgLSAxLCAwKTtcbiAgICBjaGVja1Jlc3BvbnNlSGFuZGxlcigpO1xuICAgIGxpYnJhcnkgPT09IG51bGwgfHwgbGlicmFyeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGlicmFyeS5kZXN0cm95Q29udGV4dChjb250ZXh0KTtcbn1cbmV4cG9ydHMuZGVzdHJveUNvbnRleHQgPSBkZXN0cm95Q29udGV4dDtcbmZ1bmN0aW9uIHJlcXVlc3QoY29udGV4dCwgZnVuY3Rpb25OYW1lLCBmdW5jdGlvblBhcmFtcywgcmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgbGliID0gbGlicmFyeSB8fCAoeWllbGQgbG9hZFJlcXVpcmVkKCkpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZUhhbmRsZXIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdElkID0gZ2VuZXJhdGVSZXF1ZXN0SWQoKTtcbiAgICAgICAgICAgIHJlcXVlc3RzLnNldChyZXF1ZXN0SWQsIHJlcXVlc3QpO1xuICAgICAgICAgICAgY2hlY2tSZXNwb25zZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtc0pzb24gPSAoZnVuY3Rpb25QYXJhbXMgPT09IHVuZGVmaW5lZCkgfHwgKGZ1bmN0aW9uUGFyYW1zID09PSBudWxsKVxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoZnVuY3Rpb25QYXJhbXMpO1xuICAgICAgICAgICAgbGliLnNlbmRSZXF1ZXN0KGNvbnRleHQsIHJlcXVlc3RJZCwgZnVuY3Rpb25OYW1lLCBwYXJhbXNKc29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlcXVlc3QgPSByZXF1ZXN0O1xuZnVuY3Rpb24gbG9hZFJlcXVpcmVkKCkge1xuICAgIGlmIChsaWJyYXJ5ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGlicmFyeSk7XG4gICAgfVxuICAgIGlmIChsb2FkRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGxvYWRFcnJvcik7XG4gICAgfVxuICAgIGlmIChsb2FkaW5nID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgZXJyb3JzXzEuVG9uQ2xpZW50RXJyb3IoMSwgXCJUT04gQ2xpZW50IGJpbmFyeSBsaWJyYXJ5IGlzbid0IHNldC5cIikpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsb2FkaW5nID09PSBudWxsIHx8IGxvYWRpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvYWRpbmcucHVzaCh7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlUmVxdWVzdElkKCkge1xuICAgIGNvbnN0IGlkID0gbmV4dFJlcXVlc3RJZDtcbiAgICBkbyB7XG4gICAgICAgIG5leHRSZXF1ZXN0SWQgKz0gMTtcbiAgICAgICAgaWYgKG5leHRSZXF1ZXN0SWQgPj0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICAgIG5leHRSZXF1ZXN0SWQgPSAxO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAocmVxdWVzdHMuaGFzKG5leHRSZXF1ZXN0SWQpKTtcbiAgICByZXR1cm4gaWQ7XG59XG5mdW5jdGlvbiBoYW5kbGVMaWJyYXJ5UmVzcG9uc2UocmVxdWVzdElkLCBwYXJhbXNKc29uLCByZXNwb25zZVR5cGUsIGZpbmlzaGVkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IHJlcXVlc3RzLmdldChyZXF1ZXN0SWQpO1xuICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICByZXF1ZXN0cy5kZWxldGUocmVxdWVzdElkKTtcbiAgICAgICAgY2hlY2tSZXNwb25zZUhhbmRsZXIoKTtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gcGFyYW1zSnNvbiAhPT0gXCJcIiA/IEpTT04ucGFyc2UocGFyYW1zSnNvbikgOiB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChyZXNwb25zZVR5cGUpIHtcbiAgICAgICAgY2FzZSBSZXNwb25zZVR5cGUuU3VjY2VzczpcbiAgICAgICAgICAgIHJlcXVlc3QucmVzb2x2ZShwYXJhbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLkVycm9yOlxuICAgICAgICAgICAgcmVxdWVzdC5yZWplY3QocGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc3QgaXNBcHBPYmplY3RPckN1c3RvbSA9IHJlc3BvbnNlVHlwZSA9PT0gUmVzcG9uc2VUeXBlLkFwcE5vdGlmeVxuICAgICAgICAgICAgICAgIHx8IHJlc3BvbnNlVHlwZSA9PT0gUmVzcG9uc2VUeXBlLkFwcFJlcXVlc3RcbiAgICAgICAgICAgICAgICB8fCByZXNwb25zZVR5cGUgPj0gUmVzcG9uc2VUeXBlLkN1c3RvbTtcbiAgICAgICAgICAgIGlmIChpc0FwcE9iamVjdE9yQ3VzdG9tICYmIHJlcXVlc3QucmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZUhhbmRsZXIocGFyYW1zLCByZXNwb25zZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlUmVzdWx0KHJlc3VsdEpzb24pIHtcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdEpzb24pO1xuICAgIGlmIChcImVycm9yXCIgaW4gcmVzdWx0KSB7XG4gICAgICAgIHRocm93IG5ldyBlcnJvcnNfMS5Ub25DbGllbnRFcnJvcihyZXN1bHQuZXJyb3IuY29kZSwgcmVzdWx0LmVycm9yLm1lc3NhZ2UsIHJlc3VsdC5lcnJvci5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVG9uQ2xpZW50ID0gdm9pZCAwO1xuY29uc3QgbW9kdWxlc18xID0gcmVxdWlyZShcIi4vbW9kdWxlc1wiKTtcbmNvbnN0IGJpbl8xID0gcmVxdWlyZShcIi4vYmluXCIpO1xuY2xhc3MgVG9uQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgIT09IG51bGwgJiYgY29uZmlnICE9PSB2b2lkIDAgPyBjb25maWcgOiB7fTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgbW9kdWxlc18xLkNsaWVudE1vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSBuZXcgbW9kdWxlc18xLkNyeXB0b01vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5hYmkgPSBuZXcgbW9kdWxlc18xLkFiaU1vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ib2MgPSBuZXcgbW9kdWxlc18xLkJvY01vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gbmV3IG1vZHVsZXNfMS5Qcm9jZXNzaW5nTW9kdWxlKHRoaXMpO1xuICAgICAgICB0aGlzLnV0aWxzID0gbmV3IG1vZHVsZXNfMS5VdGlsc01vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXQgPSBuZXcgbW9kdWxlc18xLk5ldE1vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy50dm0gPSBuZXcgbW9kdWxlc18xLlR2bU1vZHVsZSh0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIHNldCBkZWZhdWx0KGNsaWVudCkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0ID0gY2xpZW50O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWZhdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0ID0gbmV3IFRvbkNsaWVudCh0aGlzLl9kZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldCBkZWZhdWx0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29uZmlnO1xuICAgIH1cbiAgICBzdGF0aWMgdXNlQmluYXJ5TGlicmFyeShsb2FkZXIpIHtcbiAgICAgICAgYmluXzEudXNlTGlicmFyeShsb2FkZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9LZXkoZCkge1xuICAgICAgICByZXR1cm4gdG9IZXgoZCwgMjU2KTtcbiAgICB9XG4gICAgc3RhdGljIHRvSGFzaDY0KGQpIHtcbiAgICAgICAgcmV0dXJuIHRvSGV4KGQsIDY0KTtcbiAgICB9XG4gICAgc3RhdGljIHRvSGFzaDEyOChkKSB7XG4gICAgICAgIHJldHVybiB0b0hleChkLCAxMjgpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9IYXNoMjU2KGQpIHtcbiAgICAgICAgcmV0dXJuIHRvSGV4KGQsIDI1Nik7XG4gICAgfVxuICAgIHN0YXRpYyB0b0hhc2g1MTIoZCkge1xuICAgICAgICByZXR1cm4gdG9IZXgoZCwgNTEyKTtcbiAgICB9XG4gICAgc3RhdGljIHRvSGV4KGRlYywgYml0cyA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRvSGV4KGRlYywgYml0cyk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIGJpbl8xLmRlc3Ryb3lDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3QoZnVuY3Rpb25OYW1lLCBmdW5jdGlvblBhcmFtcywgcmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IHlpZWxkIGJpbl8xLmNyZWF0ZUNvbnRleHQodGhpcy5jb25maWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmluXzEucmVxdWVzdChjb250ZXh0LCBmdW5jdGlvbk5hbWUsIGZ1bmN0aW9uUGFyYW1zLCByZXNwb25zZUhhbmRsZXIgIT09IG51bGwgJiYgcmVzcG9uc2VIYW5kbGVyICE9PSB2b2lkIDAgPyByZXNwb25zZUhhbmRsZXIgOiAoKCkgPT4ge1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzb2x2ZV9hcHBfcmVxdWVzdChhcHBfcmVxdWVzdF9pZCwgcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoYXBwX3JlcXVlc3RfaWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNsaWVudC5yZXNvbHZlX2FwcF9yZXF1ZXN0KHsgYXBwX3JlcXVlc3RfaWQsIHJlc3VsdDogeyB0eXBlOiBcIk9rXCIsIHJlc3VsdCB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVqZWN0X2FwcF9yZXF1ZXN0KGFwcF9yZXF1ZXN0X2lkLCBlcnJvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGFwcF9yZXF1ZXN0X2lkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jbGllbnQucmVzb2x2ZV9hcHBfcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIGFwcF9yZXF1ZXN0X2lkLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgdHlwZTogXCJFcnJvclwiLCB0ZXh0OiBlcnJvci5tZXNzYWdlIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ub25DbGllbnQgPSBUb25DbGllbnQ7XG5Ub25DbGllbnQuX2RlZmF1bHRDb25maWcgPSB7XG4gICAgbmV0d29yazoge1xuICAgICAgICBlbmRwb2ludHM6IFtcIm1haW4udG9uLmRldlwiXSxcbiAgICB9LFxufTtcblRvbkNsaWVudC5fZGVmYXVsdCA9IG51bGw7XG4vLyBDb252ZXJ0cyB2YWx1ZSB0byBoZXhcbmZ1bmN0aW9uIHRvSGV4KHZhbHVlLCBiaXRzKSB7XG4gICAgbGV0IGhleDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgIGhleCA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgICAgICAgICAgaGV4ID0gdmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGV4ID0gZGVjVG9IZXgodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBoZXggPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgbGVuID0gYml0cyAvIDQ7XG4gICAgd2hpbGUgKGhleC5sZW5ndGggPiBsZW4gJiYgaGV4LnN0YXJ0c1dpdGgoJzAnKSkge1xuICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgIH1cbiAgICByZXR1cm4gaGV4LnBhZFN0YXJ0KGxlbiwgJzAnKTtcbn1cbmZ1bmN0aW9uIGRlY1RvSGV4KGRlYykge1xuICAgIHZhciBfYTtcbiAgICBsZXQgYmlnTnVtID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZCA9ICgoX2EgPSBkZWMuY29kZVBvaW50QXQoaSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDApIC0gNDg7XG4gICAgICAgIGNvbnN0IG11bDggPSBzaGwoYmlnTnVtLCAzKTtcbiAgICAgICAgY29uc3QgbXVsMiA9IHNobChiaWdOdW0sIDEpO1xuICAgICAgICBjb25zdCBtdWwxMCA9IGFkZChtdWw4LCBtdWwyKTtcbiAgICAgICAgYmlnTnVtID0gYWRkKG11bDEwLCBbZF0pO1xuICAgIH1cbiAgICBsZXQgaGV4ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IGJpZ051bS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBoZXggKz0gYmlnTnVtW2ldLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg0LCAnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xufVxuZnVuY3Rpb24gc2hsKGJpZ051bSwgYml0cykge1xuICAgIGxldCByZXN0ID0gMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpZ051bS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsZXQgdiA9IChiaWdOdW1baV0gPDwgYml0cykgKyByZXN0O1xuICAgICAgICByZXN1bHQucHVzaCh2ICYgMHhGRkZGKTtcbiAgICAgICAgcmVzdCA9ICh2ID4+IDE2KSAmIDB4RkZGRjtcbiAgICB9XG4gICAgaWYgKHJlc3QgPiAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgICBsZXQgcmVzdCA9IDA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgbGVuID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2ID0gKGkgPCBhLmxlbmd0aCA/IGFbaV0gOiAwKSArIChpIDwgYi5sZW5ndGggPyBiW2ldIDogMCkgKyByZXN0O1xuICAgICAgICByZXN1bHQucHVzaCh2ICYgMHhGRkZGKTtcbiAgICAgICAgcmVzdCA9ICh2ID4+IDE2KSAmIDB4RkZGRjtcbiAgICB9XG4gICAgaWYgKHJlc3QgPiAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ub25DbGllbnRFcnJvciA9IHZvaWQgMDtcbmNsYXNzIFRvbkNsaWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuZXhwb3J0cy5Ub25DbGllbnRFcnJvciA9IFRvbkNsaWVudEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbW9kdWxlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xpZW50XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY2NvdW50XCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFjY291bnRGb3JFeGVjdXRvck5vbmUgPSBleHBvcnRzLlR2bUVycm9yQ29kZSA9IGV4cG9ydHMuVXRpbHNNb2R1bGUgPSBleHBvcnRzLmFkZHJlc3NTdHJpbmdGb3JtYXRCYXNlNjQgPSBleHBvcnRzLmFkZHJlc3NTdHJpbmdGb3JtYXRIZXggPSBleHBvcnRzLmFkZHJlc3NTdHJpbmdGb3JtYXRBY2NvdW50SWQgPSBleHBvcnRzLlByb2Nlc3NpbmdNb2R1bGUgPSBleHBvcnRzLnByb2Nlc3NpbmdFdmVudE1lc3NhZ2VFeHBpcmVkID0gZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRGZXRjaE5leHRCbG9ja0ZhaWxlZCA9IGV4cG9ydHMucHJvY2Vzc2luZ0V2ZW50V2lsbEZldGNoTmV4dEJsb2NrID0gZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRTZW5kRmFpbGVkID0gZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnREaWRTZW5kID0gZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRXaWxsU2VuZCA9IGV4cG9ydHMucHJvY2Vzc2luZ0V2ZW50RmV0Y2hGaXJzdEJsb2NrRmFpbGVkID0gZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRXaWxsRmV0Y2hGaXJzdEJsb2NrID0gZXhwb3J0cy5Qcm9jZXNzaW5nRXJyb3JDb2RlID0gZXhwb3J0cy5Cb2NNb2R1bGUgPSBleHBvcnRzLmJ1aWxkZXJPcENlbGxCb2MgPSBleHBvcnRzLmJ1aWxkZXJPcENlbGwgPSBleHBvcnRzLmJ1aWxkZXJPcEJpdFN0cmluZyA9IGV4cG9ydHMuYnVpbGRlck9wSW50ZWdlciA9IGV4cG9ydHMuQm9jRXJyb3JDb2RlID0gZXhwb3J0cy5ib2NDYWNoZVR5cGVVbnBpbm5lZCA9IGV4cG9ydHMuYm9jQ2FjaGVUeXBlUGlubmVkID0gZXhwb3J0cy5BYmlNb2R1bGUgPSBleHBvcnRzLm1lc3NhZ2VTb3VyY2VFbmNvZGluZ1BhcmFtcyA9IGV4cG9ydHMubWVzc2FnZVNvdXJjZUVuY29kZWQgPSBleHBvcnRzLnN0YXRlSW5pdFNvdXJjZVR2YyA9IGV4cG9ydHMuc3RhdGVJbml0U291cmNlU3RhdGVJbml0ID0gZXhwb3J0cy5zdGF0ZUluaXRTb3VyY2VNZXNzYWdlID0gZXhwb3J0cy5NZXNzYWdlQm9keVR5cGUgPSBleHBvcnRzLnNpZ25lclNpZ25pbmdCb3ggPSBleHBvcnRzLnNpZ25lcktleXMgPSBleHBvcnRzLnNpZ25lckV4dGVybmFsID0gZXhwb3J0cy5zaWduZXJOb25lID0gZXhwb3J0cy5hYmlTZXJpYWxpemVkID0gZXhwb3J0cy5hYmlIYW5kbGUgPSBleHBvcnRzLmFiaUpzb24gPSBleHBvcnRzLmFiaUNvbnRyYWN0ID0gZXhwb3J0cy5BYmlFcnJvckNvZGUgPSBleHBvcnRzLkNyeXB0b01vZHVsZSA9IGV4cG9ydHMucmVzdWx0T2ZBcHBTaWduaW5nQm94U2lnbiA9IGV4cG9ydHMucmVzdWx0T2ZBcHBTaWduaW5nQm94R2V0UHVibGljS2V5ID0gZXhwb3J0cy5wYXJhbXNPZkFwcFNpZ25pbmdCb3hTaWduID0gZXhwb3J0cy5wYXJhbXNPZkFwcFNpZ25pbmdCb3hHZXRQdWJsaWNLZXkgPSBleHBvcnRzLkNyeXB0b0Vycm9yQ29kZSA9IGV4cG9ydHMuQ2xpZW50TW9kdWxlID0gZXhwb3J0cy5hcHBSZXF1ZXN0UmVzdWx0T2sgPSBleHBvcnRzLmFwcFJlcXVlc3RSZXN1bHRFcnJvciA9IGV4cG9ydHMuQ2xpZW50RXJyb3JDb2RlID0gdm9pZCAwO1xuZXhwb3J0cy5EZWJvdE1vZHVsZSA9IGV4cG9ydHMucmVzdWx0T2ZBcHBEZWJvdEJyb3dzZXJJbnZva2VEZWJvdCA9IGV4cG9ydHMucmVzdWx0T2ZBcHBEZWJvdEJyb3dzZXJHZXRTaWduaW5nQm94ID0gZXhwb3J0cy5yZXN1bHRPZkFwcERlYm90QnJvd3NlcklucHV0ID0gZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlclNlbmQgPSBleHBvcnRzLnBhcmFtc09mQXBwRGVib3RCcm93c2VySW52b2tlRGVib3QgPSBleHBvcnRzLnBhcmFtc09mQXBwRGVib3RCcm93c2VyR2V0U2lnbmluZ0JveCA9IGV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJJbnB1dCA9IGV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJTaG93QWN0aW9uID0gZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlclN3aXRjaENvbXBsZXRlZCA9IGV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJTd2l0Y2ggPSBleHBvcnRzLnBhcmFtc09mQXBwRGVib3RCcm93c2VyTG9nID0gZXhwb3J0cy5EZWJvdEVycm9yQ29kZSA9IGV4cG9ydHMuTmV0TW9kdWxlID0gZXhwb3J0cy5BZ2dyZWdhdGlvbkZuID0gZXhwb3J0cy5wYXJhbXNPZlF1ZXJ5T3BlcmF0aW9uQWdncmVnYXRlQ29sbGVjdGlvbiA9IGV4cG9ydHMucGFyYW1zT2ZRdWVyeU9wZXJhdGlvbldhaXRGb3JDb2xsZWN0aW9uID0gZXhwb3J0cy5wYXJhbXNPZlF1ZXJ5T3BlcmF0aW9uUXVlcnlDb2xsZWN0aW9uID0gZXhwb3J0cy5Tb3J0RGlyZWN0aW9uID0gZXhwb3J0cy5OZXRFcnJvckNvZGUgPSBleHBvcnRzLlR2bU1vZHVsZSA9IGV4cG9ydHMuYWNjb3VudEZvckV4ZWN1dG9yQWNjb3VudCA9IGV4cG9ydHMuYWNjb3VudEZvckV4ZWN1dG9yVW5pbml0ID0gdm9pZCAwO1xuLy8gY2xpZW50IG1vZHVsZVxudmFyIENsaWVudEVycm9yQ29kZTtcbihmdW5jdGlvbiAoQ2xpZW50RXJyb3JDb2RlKSB7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIk5vdEltcGxlbWVudGVkXCJdID0gMV0gPSBcIk5vdEltcGxlbWVudGVkXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkludmFsaWRIZXhcIl0gPSAyXSA9IFwiSW52YWxpZEhleFwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJJbnZhbGlkQmFzZTY0XCJdID0gM10gPSBcIkludmFsaWRCYXNlNjRcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiSW52YWxpZEFkZHJlc3NcIl0gPSA0XSA9IFwiSW52YWxpZEFkZHJlc3NcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiQ2FsbGJhY2tQYXJhbXNDYW50QmVDb252ZXJ0ZWRUb0pzb25cIl0gPSA1XSA9IFwiQ2FsbGJhY2tQYXJhbXNDYW50QmVDb252ZXJ0ZWRUb0pzb25cIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiV2Vic29ja2V0Q29ubmVjdEVycm9yXCJdID0gNl0gPSBcIldlYnNvY2tldENvbm5lY3RFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJXZWJzb2NrZXRSZWNlaXZlRXJyb3JcIl0gPSA3XSA9IFwiV2Vic29ja2V0UmVjZWl2ZUVycm9yXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIldlYnNvY2tldFNlbmRFcnJvclwiXSA9IDhdID0gXCJXZWJzb2NrZXRTZW5kRXJyb3JcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiSHR0cENsaWVudENyZWF0ZUVycm9yXCJdID0gOV0gPSBcIkh0dHBDbGllbnRDcmVhdGVFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJIdHRwUmVxdWVzdENyZWF0ZUVycm9yXCJdID0gMTBdID0gXCJIdHRwUmVxdWVzdENyZWF0ZUVycm9yXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkh0dHBSZXF1ZXN0U2VuZEVycm9yXCJdID0gMTFdID0gXCJIdHRwUmVxdWVzdFNlbmRFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJIdHRwUmVxdWVzdFBhcnNlRXJyb3JcIl0gPSAxMl0gPSBcIkh0dHBSZXF1ZXN0UGFyc2VFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJDYWxsYmFja05vdFJlZ2lzdGVyZWRcIl0gPSAxM10gPSBcIkNhbGxiYWNrTm90UmVnaXN0ZXJlZFwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJOZXRNb2R1bGVOb3RJbml0XCJdID0gMTRdID0gXCJOZXRNb2R1bGVOb3RJbml0XCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkludmFsaWRDb25maWdcIl0gPSAxNV0gPSBcIkludmFsaWRDb25maWdcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiQ2Fubm90Q3JlYXRlUnVudGltZVwiXSA9IDE2XSA9IFwiQ2Fubm90Q3JlYXRlUnVudGltZVwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJJbnZhbGlkQ29udGV4dEhhbmRsZVwiXSA9IDE3XSA9IFwiSW52YWxpZENvbnRleHRIYW5kbGVcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiQ2Fubm90U2VyaWFsaXplUmVzdWx0XCJdID0gMThdID0gXCJDYW5ub3RTZXJpYWxpemVSZXN1bHRcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiQ2Fubm90U2VyaWFsaXplRXJyb3JcIl0gPSAxOV0gPSBcIkNhbm5vdFNlcmlhbGl6ZUVycm9yXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkNhbm5vdENvbnZlcnRKc1ZhbHVlVG9Kc29uXCJdID0gMjBdID0gXCJDYW5ub3RDb252ZXJ0SnNWYWx1ZVRvSnNvblwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJDYW5ub3RSZWNlaXZlU3Bhd25lZFJlc3VsdFwiXSA9IDIxXSA9IFwiQ2Fubm90UmVjZWl2ZVNwYXduZWRSZXN1bHRcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiU2V0VGltZXJFcnJvclwiXSA9IDIyXSA9IFwiU2V0VGltZXJFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJJbnZhbGlkUGFyYW1zXCJdID0gMjNdID0gXCJJbnZhbGlkUGFyYW1zXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkNvbnRyYWN0c0FkZHJlc3NDb252ZXJzaW9uRmFpbGVkXCJdID0gMjRdID0gXCJDb250cmFjdHNBZGRyZXNzQ29udmVyc2lvbkZhaWxlZFwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJVbmtub3duRnVuY3Rpb25cIl0gPSAyNV0gPSBcIlVua25vd25GdW5jdGlvblwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJBcHBSZXF1ZXN0RXJyb3JcIl0gPSAyNl0gPSBcIkFwcFJlcXVlc3RFcnJvclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJOb1N1Y2hSZXF1ZXN0XCJdID0gMjddID0gXCJOb1N1Y2hSZXF1ZXN0XCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkNhbk5vdFNlbmRSZXF1ZXN0UmVzdWx0XCJdID0gMjhdID0gXCJDYW5Ob3RTZW5kUmVxdWVzdFJlc3VsdFwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJDYW5Ob3RSZWNlaXZlUmVxdWVzdFJlc3VsdFwiXSA9IDI5XSA9IFwiQ2FuTm90UmVjZWl2ZVJlcXVlc3RSZXN1bHRcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiQ2FuTm90UGFyc2VSZXF1ZXN0UmVzdWx0XCJdID0gMzBdID0gXCJDYW5Ob3RQYXJzZVJlcXVlc3RSZXN1bHRcIjtcbiAgICBDbGllbnRFcnJvckNvZGVbQ2xpZW50RXJyb3JDb2RlW1wiVW5leHBlY3RlZENhbGxiYWNrUmVzcG9uc2VcIl0gPSAzMV0gPSBcIlVuZXhwZWN0ZWRDYWxsYmFja1Jlc3BvbnNlXCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW0NsaWVudEVycm9yQ29kZVtcIkNhbk5vdFBhcnNlTnVtYmVyXCJdID0gMzJdID0gXCJDYW5Ob3RQYXJzZU51bWJlclwiO1xuICAgIENsaWVudEVycm9yQ29kZVtDbGllbnRFcnJvckNvZGVbXCJJbnRlcm5hbEVycm9yXCJdID0gMzNdID0gXCJJbnRlcm5hbEVycm9yXCI7XG59KShDbGllbnRFcnJvckNvZGUgPSBleHBvcnRzLkNsaWVudEVycm9yQ29kZSB8fCAoZXhwb3J0cy5DbGllbnRFcnJvckNvZGUgPSB7fSkpO1xuZnVuY3Rpb24gYXBwUmVxdWVzdFJlc3VsdEVycm9yKHRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRXJyb3InLFxuICAgICAgICB0ZXh0LFxuICAgIH07XG59XG5leHBvcnRzLmFwcFJlcXVlc3RSZXN1bHRFcnJvciA9IGFwcFJlcXVlc3RSZXN1bHRFcnJvcjtcbmZ1bmN0aW9uIGFwcFJlcXVlc3RSZXN1bHRPayhyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnT2snLFxuICAgICAgICByZXN1bHQsXG4gICAgfTtcbn1cbmV4cG9ydHMuYXBwUmVxdWVzdFJlc3VsdE9rID0gYXBwUmVxdWVzdFJlc3VsdE9rO1xuLyoqXG4gKiBQcm92aWRlcyBpbmZvcm1hdGlvbiBhYm91dCBsaWJyYXJ5LlxuICovXG5jbGFzcyBDbGllbnRNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBDb3JlIExpYnJhcnkgQVBJIHJlZmVyZW5jZVxuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mR2V0QXBpUmVmZXJlbmNlXG4gICAgICovXG4gICAgZ2V0X2FwaV9yZWZlcmVuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjbGllbnQuZ2V0X2FwaV9yZWZlcmVuY2UnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBDb3JlIExpYnJhcnkgdmVyc2lvblxuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mVmVyc2lvblxuICAgICAqL1xuICAgIHZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjbGllbnQudmVyc2lvbicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgYnVpbGQuXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZCdWlsZEluZm9cbiAgICAgKi9cbiAgICBidWlsZF9pbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY2xpZW50LmJ1aWxkX2luZm8nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYXBwbGljYXRpb24gcmVxdWVzdCBwcm9jZXNzaW5nIHJlc3VsdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlJlc29sdmVBcHBSZXF1ZXN0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHJlc29sdmVfYXBwX3JlcXVlc3QocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjbGllbnQucmVzb2x2ZV9hcHBfcmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRNb2R1bGUgPSBDbGllbnRNb2R1bGU7XG4vLyBjcnlwdG8gbW9kdWxlXG52YXIgQ3J5cHRvRXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChDcnlwdG9FcnJvckNvZGUpIHtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiSW52YWxpZFB1YmxpY0tleVwiXSA9IDEwMF0gPSBcIkludmFsaWRQdWJsaWNLZXlcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiSW52YWxpZFNlY3JldEtleVwiXSA9IDEwMV0gPSBcIkludmFsaWRTZWNyZXRLZXlcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiSW52YWxpZEtleVwiXSA9IDEwMl0gPSBcIkludmFsaWRLZXlcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiSW52YWxpZEZhY3Rvcml6ZUNoYWxsZW5nZVwiXSA9IDEwNl0gPSBcIkludmFsaWRGYWN0b3JpemVDaGFsbGVuZ2VcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiSW52YWxpZEJpZ0ludFwiXSA9IDEwN10gPSBcIkludmFsaWRCaWdJbnRcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiU2NyeXB0RmFpbGVkXCJdID0gMTA4XSA9IFwiU2NyeXB0RmFpbGVkXCI7XG4gICAgQ3J5cHRvRXJyb3JDb2RlW0NyeXB0b0Vycm9yQ29kZVtcIkludmFsaWRLZXlTaXplXCJdID0gMTA5XSA9IFwiSW52YWxpZEtleVNpemVcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiTmFjbFNlY3JldEJveEZhaWxlZFwiXSA9IDExMF0gPSBcIk5hY2xTZWNyZXRCb3hGYWlsZWRcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiTmFjbEJveEZhaWxlZFwiXSA9IDExMV0gPSBcIk5hY2xCb3hGYWlsZWRcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiTmFjbFNpZ25GYWlsZWRcIl0gPSAxMTJdID0gXCJOYWNsU2lnbkZhaWxlZFwiO1xuICAgIENyeXB0b0Vycm9yQ29kZVtDcnlwdG9FcnJvckNvZGVbXCJCaXAzOUludmFsaWRFbnRyb3B5XCJdID0gMTEzXSA9IFwiQmlwMzlJbnZhbGlkRW50cm9weVwiO1xuICAgIENyeXB0b0Vycm9yQ29kZVtDcnlwdG9FcnJvckNvZGVbXCJCaXAzOUludmFsaWRQaHJhc2VcIl0gPSAxMTRdID0gXCJCaXAzOUludmFsaWRQaHJhc2VcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiQmlwMzJJbnZhbGlkS2V5XCJdID0gMTE1XSA9IFwiQmlwMzJJbnZhbGlkS2V5XCI7XG4gICAgQ3J5cHRvRXJyb3JDb2RlW0NyeXB0b0Vycm9yQ29kZVtcIkJpcDMySW52YWxpZERlcml2ZVBhdGhcIl0gPSAxMTZdID0gXCJCaXAzMkludmFsaWREZXJpdmVQYXRoXCI7XG4gICAgQ3J5cHRvRXJyb3JDb2RlW0NyeXB0b0Vycm9yQ29kZVtcIkJpcDM5SW52YWxpZERpY3Rpb25hcnlcIl0gPSAxMTddID0gXCJCaXAzOUludmFsaWREaWN0aW9uYXJ5XCI7XG4gICAgQ3J5cHRvRXJyb3JDb2RlW0NyeXB0b0Vycm9yQ29kZVtcIkJpcDM5SW52YWxpZFdvcmRDb3VudFwiXSA9IDExOF0gPSBcIkJpcDM5SW52YWxpZFdvcmRDb3VudFwiO1xuICAgIENyeXB0b0Vycm9yQ29kZVtDcnlwdG9FcnJvckNvZGVbXCJNbmVtb25pY0dlbmVyYXRpb25GYWlsZWRcIl0gPSAxMTldID0gXCJNbmVtb25pY0dlbmVyYXRpb25GYWlsZWRcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiTW5lbW9uaWNGcm9tRW50cm9weUZhaWxlZFwiXSA9IDEyMF0gPSBcIk1uZW1vbmljRnJvbUVudHJvcHlGYWlsZWRcIjtcbiAgICBDcnlwdG9FcnJvckNvZGVbQ3J5cHRvRXJyb3JDb2RlW1wiU2lnbmluZ0JveE5vdFJlZ2lzdGVyZWRcIl0gPSAxMjFdID0gXCJTaWduaW5nQm94Tm90UmVnaXN0ZXJlZFwiO1xuICAgIENyeXB0b0Vycm9yQ29kZVtDcnlwdG9FcnJvckNvZGVbXCJJbnZhbGlkU2lnbmF0dXJlXCJdID0gMTIyXSA9IFwiSW52YWxpZFNpZ25hdHVyZVwiO1xufSkoQ3J5cHRvRXJyb3JDb2RlID0gZXhwb3J0cy5DcnlwdG9FcnJvckNvZGUgfHwgKGV4cG9ydHMuQ3J5cHRvRXJyb3JDb2RlID0ge30pKTtcbmZ1bmN0aW9uIHBhcmFtc09mQXBwU2lnbmluZ0JveEdldFB1YmxpY0tleSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnR2V0UHVibGljS2V5JyxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcFNpZ25pbmdCb3hHZXRQdWJsaWNLZXkgPSBwYXJhbXNPZkFwcFNpZ25pbmdCb3hHZXRQdWJsaWNLZXk7XG5mdW5jdGlvbiBwYXJhbXNPZkFwcFNpZ25pbmdCb3hTaWduKHVuc2lnbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NpZ24nLFxuICAgICAgICB1bnNpZ25lZCxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcFNpZ25pbmdCb3hTaWduID0gcGFyYW1zT2ZBcHBTaWduaW5nQm94U2lnbjtcbmZ1bmN0aW9uIHJlc3VsdE9mQXBwU2lnbmluZ0JveEdldFB1YmxpY0tleShwdWJsaWNfa2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0dldFB1YmxpY0tleScsXG4gICAgICAgIHB1YmxpY19rZXksXG4gICAgfTtcbn1cbmV4cG9ydHMucmVzdWx0T2ZBcHBTaWduaW5nQm94R2V0UHVibGljS2V5ID0gcmVzdWx0T2ZBcHBTaWduaW5nQm94R2V0UHVibGljS2V5O1xuZnVuY3Rpb24gcmVzdWx0T2ZBcHBTaWduaW5nQm94U2lnbihzaWduYXR1cmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU2lnbicsXG4gICAgICAgIHNpZ25hdHVyZSxcbiAgICB9O1xufVxuZXhwb3J0cy5yZXN1bHRPZkFwcFNpZ25pbmdCb3hTaWduID0gcmVzdWx0T2ZBcHBTaWduaW5nQm94U2lnbjtcbmZ1bmN0aW9uIGRpc3BhdGNoQXBwU2lnbmluZ0JveChvYmosIHBhcmFtcywgYXBwX3JlcXVlc3RfaWQsIGNsaWVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnR2V0UHVibGljS2V5JzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0geWllbGQgb2JqLmdldF9wdWJsaWNfa2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NpZ24nOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB5aWVsZCBvYmouc2lnbihwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWVudC5yZXNvbHZlX2FwcF9yZXF1ZXN0KGFwcF9yZXF1ZXN0X2lkLCBPYmplY3QuYXNzaWduKHsgdHlwZTogcGFyYW1zLnR5cGUgfSwgcmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjbGllbnQucmVqZWN0X2FwcF9yZXF1ZXN0KGFwcF9yZXF1ZXN0X2lkLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ3J5cHRvIGZ1bmN0aW9ucy5cbiAqL1xuY2xhc3MgQ3J5cHRvTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHByaW1lIGZhY3Rvcml6YXRpb24g4oCTIGRlY29tcG9zaXRpb24gb2YgYSBjb21wb3NpdGUgbnVtYmVyIGludG8gYSBwcm9kdWN0IG9mIHNtYWxsZXIgcHJpbWUgaW50ZWdlcnMgKGZhY3RvcnMpLiBTZWUgW2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVnZXJfZmFjdG9yaXphdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZGYWN0b3JpemV9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mRmFjdG9yaXplXG4gICAgICovXG4gICAgZmFjdG9yaXplKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLmZhY3Rvcml6ZScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG1vZHVsYXIgZXhwb25lbnRpYXRpb24gZm9yIGJpZyBpbnRlZ2VycyAoYGJhc2VgXmBleHBvbmVudGAgbW9kIGBtb2R1bHVzYCkuIFNlZSBbaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxhcl9leHBvbmVudGlhdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZNb2R1bGFyUG93ZXJ9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTW9kdWxhclBvd2VyXG4gICAgICovXG4gICAgbW9kdWxhcl9wb3dlcihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5tb2R1bGFyX3Bvd2VyJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBDUkMxNiB1c2luZyBUT04gYWxnb3JpdGhtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlRvbkNyYzE2fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlRvbkNyYzE2XG4gICAgICovXG4gICAgdG9uX2NyYzE2KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLnRvbl9jcmMxNicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyByYW5kb20gYnl0ZSBhcnJheSBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aCBhbmQgcmV0dXJucyBpdCBpbiBgYmFzZTY0YCBmb3JtYXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZHZW5lcmF0ZVJhbmRvbUJ5dGVzfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkdlbmVyYXRlUmFuZG9tQnl0ZXNcbiAgICAgKi9cbiAgICBnZW5lcmF0ZV9yYW5kb21fYnl0ZXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uZ2VuZXJhdGVfcmFuZG9tX2J5dGVzJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgcHVibGljIGtleSB0byB0b24gc2FmZV9mb3JtYXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZDb252ZXJ0UHVibGljS2V5VG9Ub25TYWZlRm9ybWF0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkNvbnZlcnRQdWJsaWNLZXlUb1RvblNhZmVGb3JtYXRcbiAgICAgKi9cbiAgICBjb252ZXJ0X3B1YmxpY19rZXlfdG9fdG9uX3NhZmVfZm9ybWF0KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLmNvbnZlcnRfcHVibGljX2tleV90b190b25fc2FmZV9mb3JtYXQnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgcmFuZG9tIGVkMjU1MTkga2V5IHBhaXIuXG4gICAgICogQHJldHVybnMgS2V5UGFpclxuICAgICAqL1xuICAgIGdlbmVyYXRlX3JhbmRvbV9zaWduX2tleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uZ2VuZXJhdGVfcmFuZG9tX3NpZ25fa2V5cycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaWducyBhIGRhdGEgdXNpbmcgdGhlIHByb3ZpZGVkIGtleXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mU2lnbn0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZTaWduXG4gICAgICovXG4gICAgc2lnbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5zaWduJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmVyaWZpZXMgc2lnbmVkIGRhdGEgdXNpbmcgdGhlIHByb3ZpZGVkIHB1YmxpYyBrZXkuIFJhaXNlcyBlcnJvciBpZiB2ZXJpZmljYXRpb24gaXMgZmFpbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlZlcmlmeVNpZ25hdHVyZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZWZXJpZnlTaWduYXR1cmVcbiAgICAgKi9cbiAgICB2ZXJpZnlfc2lnbmF0dXJlKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLnZlcmlmeV9zaWduYXR1cmUnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIFNIQTI1NiBoYXNoIG9mIHRoZSBzcGVjaWZpZWQgZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZIYXNofSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkhhc2hcbiAgICAgKi9cbiAgICBzaGEyNTYocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uc2hhMjU2JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBTSEE1MTIgaGFzaCBvZiB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mSGFzaH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZIYXNoXG4gICAgICovXG4gICAgc2hhNTEyKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLnNoYTUxMicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlcml2ZXMga2V5IGZyb20gYHBhc3N3b3JkYCBhbmQgYGtleWAgdXNpbmcgYHNjcnlwdGAgYWxnb3JpdGhtLiBTZWUgW2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjcnlwdF0uXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqICMgQXJndW1lbnRzXG4gICAgICogLSBgbG9nX25gIC0gVGhlIGxvZzIgb2YgdGhlIFNjcnlwdCBwYXJhbWV0ZXIgYE5gXG4gICAgICogLSBgcmAgLSBUaGUgU2NyeXB0IHBhcmFtZXRlciBgcmBcbiAgICAgKiAtIGBwYCAtIFRoZSBTY3J5cHQgcGFyYW1ldGVyIGBwYFxuICAgICAqICMgQ29uZGl0aW9uc1xuICAgICAqIC0gYGxvZ19uYCBtdXN0IGJlIGxlc3MgdGhhbiBgNjRgXG4gICAgICogLSBgcmAgbXVzdCBiZSBncmVhdGVyIHRoYW4gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDQyOTQ5NjcyOTVgXG4gICAgICogLSBgcGAgbXVzdCBiZSBncmVhdGVyIHRoYW4gYDBgIGFuZCBsZXNzIHRoYW4gYDQyOTQ5NjcyOTVgXG4gICAgICogIyBSZWNvbW1lbmRlZCB2YWx1ZXMgc3VmZmljaWVudCBmb3IgbW9zdCB1c2UtY2FzZXNcbiAgICAgKiAtIGBsb2dfbiA9IDE1YCAoYG4gPSAzMjc2OGApXG4gICAgICogLSBgciA9IDhgXG4gICAgICogLSBgcCA9IDFgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mU2NyeXB0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlNjcnlwdFxuICAgICAqL1xuICAgIHNjcnlwdChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5zY3J5cHQnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBrZXkgcGFpciBmb3Igc2lnbmluZyBmcm9tIHRoZSBzZWNyZXQga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mTmFjbFNpZ25LZXlQYWlyRnJvbVNlY3JldH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgS2V5UGFpclxuICAgICAqL1xuICAgIG5hY2xfc2lnbl9rZXlwYWlyX2Zyb21fc2VjcmV0X2tleShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5uYWNsX3NpZ25fa2V5cGFpcl9mcm9tX3NlY3JldF9rZXknLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaWducyBkYXRhIHVzaW5nIHRoZSBzaWduZXIncyBzZWNyZXQga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZk5hY2xTaWdufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZk5hY2xTaWduXG4gICAgICovXG4gICAgbmFjbF9zaWduKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLm5hY2xfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIHRoZSBzaWduYXR1cmUgYW5kIHJldHVybnMgdGhlIHVuc2lnbmVkIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVmVyaWZpZXMgdGhlIHNpZ25hdHVyZSBpbiBgc2lnbmVkYCB1c2luZyB0aGUgc2lnbmVyJ3MgcHVibGljIGtleSBgcHVibGljYFxuICAgICAqIGFuZCByZXR1cm5zIHRoZSBtZXNzYWdlIGB1bnNpZ25lZGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgc2lnbmF0dXJlIGZhaWxzIHZlcmlmaWNhdGlvbiwgY3J5cHRvX3NpZ25fb3BlbiByYWlzZXMgYW4gZXhjZXB0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZk5hY2xTaWduT3Blbn0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZOYWNsU2lnbk9wZW5cbiAgICAgKi9cbiAgICBuYWNsX3NpZ25fb3BlbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5uYWNsX3NpZ25fb3BlbicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpZ25zIHRoZSBtZXNzYWdlIHVzaW5nIHRoZSBzZWNyZXQga2V5IGFuZCByZXR1cm5zIGEgc2lnbmF0dXJlLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBTaWducyB0aGUgbWVzc2FnZSBgdW5zaWduZWRgIHVzaW5nIHRoZSBzZWNyZXQga2V5IGBzZWNyZXRgXG4gICAgICogYW5kIHJldHVybnMgYSBzaWduYXR1cmUgYHNpZ25hdHVyZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mTmFjbFNpZ259IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTmFjbFNpZ25EZXRhY2hlZFxuICAgICAqL1xuICAgIG5hY2xfc2lnbl9kZXRhY2hlZChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5uYWNsX3NpZ25fZGV0YWNoZWQnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWZXJpZmllcyB0aGUgc2lnbmF0dXJlIHdpdGggcHVibGljIGtleSBhbmQgYHVuc2lnbmVkYCBkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZk5hY2xTaWduRGV0YWNoZWRWZXJpZnl9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTmFjbFNpZ25EZXRhY2hlZFZlcmlmeVxuICAgICAqL1xuICAgIG5hY2xfc2lnbl9kZXRhY2hlZF92ZXJpZnkocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubmFjbF9zaWduX2RldGFjaGVkX3ZlcmlmeScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBOYUNsIGtleSBwYWlyXG4gICAgICogQHJldHVybnMgS2V5UGFpclxuICAgICAqL1xuICAgIG5hY2xfYm94X2tleXBhaXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubmFjbF9ib3hfa2V5cGFpcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMga2V5IHBhaXIgZnJvbSBhIHNlY3JldCBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZOYWNsQm94S2V5UGFpckZyb21TZWNyZXR9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIEtleVBhaXJcbiAgICAgKi9cbiAgICBuYWNsX2JveF9rZXlwYWlyX2Zyb21fc2VjcmV0X2tleShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5uYWNsX2JveF9rZXlwYWlyX2Zyb21fc2VjcmV0X2tleScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBrZXkgYXV0aGVudGljYXRlZCBlbmNyeXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEVuY3J5cHQgYW5kIGF1dGhlbnRpY2F0ZSBhIG1lc3NhZ2UgdXNpbmcgdGhlIHNlbmRlcnMgc2VjcmV0IGtleSwgdGhlIHJlY2VpdmVycyBwdWJsaWNcbiAgICAgKiBrZXksIGFuZCBhIG5vbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZk5hY2xCb3h9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTmFjbEJveFxuICAgICAqL1xuICAgIG5hY2xfYm94KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLm5hY2xfYm94JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjcnlwdCBhbmQgdmVyaWZ5IHRoZSBjaXBoZXIgdGV4dCB1c2luZyB0aGUgcmVjZWl2ZXJzIHNlY3JldCBrZXksIHRoZSBzZW5kZXJzIHB1YmxpYyBrZXksIGFuZCB0aGUgbm9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mTmFjbEJveE9wZW59IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTmFjbEJveE9wZW5cbiAgICAgKi9cbiAgICBuYWNsX2JveF9vcGVuKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLm5hY2xfYm94X29wZW4nLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNyeXB0IGFuZCBhdXRoZW50aWNhdGUgbWVzc2FnZSB1c2luZyBub25jZSBhbmQgc2VjcmV0IGtleS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZOYWNsU2VjcmV0Qm94fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZk5hY2xCb3hcbiAgICAgKi9cbiAgICBuYWNsX3NlY3JldF9ib3gocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubmFjbF9zZWNyZXRfYm94JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjcnlwdHMgYW5kIHZlcmlmaWVzIGNpcGhlciB0ZXh0IHVzaW5nIGBub25jZWAgYW5kIHNlY3JldCBga2V5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZOYWNsU2VjcmV0Qm94T3Blbn0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZOYWNsQm94T3BlblxuICAgICAqL1xuICAgIG5hY2xfc2VjcmV0X2JveF9vcGVuKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLm5hY2xfc2VjcmV0X2JveF9vcGVuJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpbnRzIHRoZSBsaXN0IG9mIHdvcmRzIGZyb20gdGhlIHNwZWNpZmllZCBkaWN0aW9uYXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mTW5lbW9uaWNXb3Jkc30gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZNbmVtb25pY1dvcmRzXG4gICAgICovXG4gICAgbW5lbW9uaWNfd29yZHMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubW5lbW9uaWNfd29yZHMnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbW5lbW9uaWMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpY3Rpb25hcnkgYW5kIHdvcmQgY291bnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZNbmVtb25pY0Zyb21SYW5kb219IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mTW5lbW9uaWNGcm9tUmFuZG9tXG4gICAgICovXG4gICAgbW5lbW9uaWNfZnJvbV9yYW5kb20ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubW5lbW9uaWNfZnJvbV9yYW5kb20nLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgbW5lbW9uaWMgZnJvbSBwcmUtZ2VuZXJhdGVkIGVudHJvcHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZNbmVtb25pY0Zyb21FbnRyb3B5fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZk1uZW1vbmljRnJvbUVudHJvcHlcbiAgICAgKi9cbiAgICBtbmVtb25pY19mcm9tX2VudHJvcHkocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ubW5lbW9uaWNfZnJvbV9lbnRyb3B5JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBocmFzZSBzdXBwbGllZCB3aWxsIGJlIGNoZWNrZWQgZm9yIHdvcmQgbGVuZ3RoIGFuZCB2YWxpZGF0ZWQgYWNjb3JkaW5nIHRvIHRoZSBjaGVja3N1bSBzcGVjaWZpZWQgaW4gQklQMDAzOS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZNbmVtb25pY1ZlcmlmeX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZNbmVtb25pY1ZlcmlmeVxuICAgICAqL1xuICAgIG1uZW1vbmljX3ZlcmlmeShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5tbmVtb25pY192ZXJpZnknLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIHNlZWQgcGhyYXNlLCBnZW5lcmF0ZXMgbWFzdGVyIGtleSBhbmQgdGhlbiBkZXJpdmVzIHRoZSBrZXkgcGFpciBmcm9tIHRoZSBtYXN0ZXIga2V5IGFuZCB0aGUgc3BlY2lmaWVkIHBhdGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZNbmVtb25pY0Rlcml2ZVNpZ25LZXlzfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBLZXlQYWlyXG4gICAgICovXG4gICAgbW5lbW9uaWNfZGVyaXZlX3NpZ25fa2V5cyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5tbmVtb25pY19kZXJpdmVfc2lnbl9rZXlzJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV4dGVuZGVkIG1hc3RlciBwcml2YXRlIGtleSB0aGF0IHdpbGwgYmUgdGhlIHJvb3QgZm9yIGFsbCB0aGUgZGVyaXZlZCBrZXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mSERLZXlYUHJ2RnJvbU1uZW1vbmljfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkhES2V5WFBydkZyb21NbmVtb25pY1xuICAgICAqL1xuICAgIGhka2V5X3hwcnZfZnJvbV9tbmVtb25pYyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5oZGtleV94cHJ2X2Zyb21fbW5lbW9uaWMnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGV4dGVuZGVkIHByaXZhdGUga2V5IGRlcml2ZWQgZnJvbSB0aGUgc3BlY2lmaWVkIGV4dGVuZGVkIHByaXZhdGUga2V5IGFuZCBjaGlsZCBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkhES2V5RGVyaXZlRnJvbVhQcnZ9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mSERLZXlEZXJpdmVGcm9tWFBydlxuICAgICAqL1xuICAgIGhka2V5X2Rlcml2ZV9mcm9tX3hwcnYocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uaGRrZXlfZGVyaXZlX2Zyb21feHBydicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlcml2ZXMgdGhlIGV4dGVuZGVkIHByaXZhdGUga2V5IGZyb20gdGhlIHNwZWNpZmllZCBrZXkgYW5kIHBhdGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZIREtleURlcml2ZUZyb21YUHJ2UGF0aH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZIREtleURlcml2ZUZyb21YUHJ2UGF0aFxuICAgICAqL1xuICAgIGhka2V5X2Rlcml2ZV9mcm9tX3hwcnZfcGF0aChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2NyeXB0by5oZGtleV9kZXJpdmVfZnJvbV94cHJ2X3BhdGgnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcHJpdmF0ZSBrZXkgZnJvbSB0aGUgc2VyaWFsaXplZCBleHRlbmRlZCBwcml2YXRlIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkhES2V5U2VjcmV0RnJvbVhQcnZ9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mSERLZXlTZWNyZXRGcm9tWFBydlxuICAgICAqL1xuICAgIGhka2V5X3NlY3JldF9mcm9tX3hwcnYocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uaGRrZXlfc2VjcmV0X2Zyb21feHBydicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBwdWJsaWMga2V5IGZyb20gdGhlIHNlcmlhbGl6ZWQgZXh0ZW5kZWQgcHJpdmF0ZSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZIREtleVB1YmxpY0Zyb21YUHJ2fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkhES2V5UHVibGljRnJvbVhQcnZcbiAgICAgKi9cbiAgICBoZGtleV9wdWJsaWNfZnJvbV94cHJ2KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLmhka2V5X3B1YmxpY19mcm9tX3hwcnYnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBzeW1tZXRyaWMgYGNoYWNoYTIwYCBlbmNyeXB0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkNoYUNoYTIwfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkNoYUNoYTIwXG4gICAgICovXG4gICAgY2hhY2hhMjAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uY2hhY2hhMjAnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBhcHBsaWNhdGlvbiBpbXBsZW1lbnRlZCBzaWduaW5nIGJveC5cbiAgICAgKiBAcmV0dXJucyBSZWdpc3RlcmVkU2lnbmluZ0JveFxuICAgICAqL1xuICAgIHJlZ2lzdGVyX3NpZ25pbmdfYm94KG9iaikge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLnJlZ2lzdGVyX3NpZ25pbmdfYm94JywgdW5kZWZpbmVkLCAocGFyYW1zLCByZXNwb25zZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEFwcFNpZ25pbmdCb3gob2JqLCBwYXJhbXMucmVxdWVzdF9kYXRhLCBwYXJhbXMuYXBwX3JlcXVlc3RfaWQsIHRoaXMuY2xpZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlVHlwZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoQXBwU2lnbmluZ0JveChvYmosIHBhcmFtcywgbnVsbCwgdGhpcy5jbGllbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGRlZmF1bHQgc2lnbmluZyBib3ggaW1wbGVtZW50YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleVBhaXJ9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlZ2lzdGVyZWRTaWduaW5nQm94XG4gICAgICovXG4gICAgZ2V0X3NpZ25pbmdfYm94KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLmdldF9zaWduaW5nX2JveCcsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgcHVibGljIGtleSBvZiBzaWduaW5nIGtleSBwYWlyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdpc3RlcmVkU2lnbmluZ0JveH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZTaWduaW5nQm94R2V0UHVibGljS2V5XG4gICAgICovXG4gICAgc2lnbmluZ19ib3hfZ2V0X3B1YmxpY19rZXkocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8uc2lnbmluZ19ib3hfZ2V0X3B1YmxpY19rZXknLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHNpZ25lZCB1c2VyIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mU2lnbmluZ0JveFNpZ259IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mU2lnbmluZ0JveFNpZ25cbiAgICAgKi9cbiAgICBzaWduaW5nX2JveF9zaWduKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnY3J5cHRvLnNpZ25pbmdfYm94X3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHNpZ25pbmcgYm94IGZyb20gU0RLLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdpc3RlcmVkU2lnbmluZ0JveH0gcGFyYW1zXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICByZW1vdmVfc2lnbmluZ19ib3gocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdjcnlwdG8ucmVtb3ZlX3NpZ25pbmdfYm94JywgcGFyYW1zKTtcbiAgICB9XG59XG5leHBvcnRzLkNyeXB0b01vZHVsZSA9IENyeXB0b01vZHVsZTtcbi8vIGFiaSBtb2R1bGVcbnZhciBBYmlFcnJvckNvZGU7XG4oZnVuY3Rpb24gKEFiaUVycm9yQ29kZSkge1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJSZXF1aXJlZEFkZHJlc3NNaXNzaW5nRm9yRW5jb2RlTWVzc2FnZVwiXSA9IDMwMV0gPSBcIlJlcXVpcmVkQWRkcmVzc01pc3NpbmdGb3JFbmNvZGVNZXNzYWdlXCI7XG4gICAgQWJpRXJyb3JDb2RlW0FiaUVycm9yQ29kZVtcIlJlcXVpcmVkQ2FsbFNldE1pc3NpbmdGb3JFbmNvZGVNZXNzYWdlXCJdID0gMzAyXSA9IFwiUmVxdWlyZWRDYWxsU2V0TWlzc2luZ0ZvckVuY29kZU1lc3NhZ2VcIjtcbiAgICBBYmlFcnJvckNvZGVbQWJpRXJyb3JDb2RlW1wiSW52YWxpZEpzb25cIl0gPSAzMDNdID0gXCJJbnZhbGlkSnNvblwiO1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJJbnZhbGlkTWVzc2FnZVwiXSA9IDMwNF0gPSBcIkludmFsaWRNZXNzYWdlXCI7XG4gICAgQWJpRXJyb3JDb2RlW0FiaUVycm9yQ29kZVtcIkVuY29kZURlcGxveU1lc3NhZ2VGYWlsZWRcIl0gPSAzMDVdID0gXCJFbmNvZGVEZXBsb3lNZXNzYWdlRmFpbGVkXCI7XG4gICAgQWJpRXJyb3JDb2RlW0FiaUVycm9yQ29kZVtcIkVuY29kZVJ1bk1lc3NhZ2VGYWlsZWRcIl0gPSAzMDZdID0gXCJFbmNvZGVSdW5NZXNzYWdlRmFpbGVkXCI7XG4gICAgQWJpRXJyb3JDb2RlW0FiaUVycm9yQ29kZVtcIkF0dGFjaFNpZ25hdHVyZUZhaWxlZFwiXSA9IDMwN10gPSBcIkF0dGFjaFNpZ25hdHVyZUZhaWxlZFwiO1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJJbnZhbGlkVHZjSW1hZ2VcIl0gPSAzMDhdID0gXCJJbnZhbGlkVHZjSW1hZ2VcIjtcbiAgICBBYmlFcnJvckNvZGVbQWJpRXJyb3JDb2RlW1wiUmVxdWlyZWRQdWJsaWNLZXlNaXNzaW5nRm9yRnVuY3Rpb25IZWFkZXJcIl0gPSAzMDldID0gXCJSZXF1aXJlZFB1YmxpY0tleU1pc3NpbmdGb3JGdW5jdGlvbkhlYWRlclwiO1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJJbnZhbGlkU2lnbmVyXCJdID0gMzEwXSA9IFwiSW52YWxpZFNpZ25lclwiO1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJJbnZhbGlkQWJpXCJdID0gMzExXSA9IFwiSW52YWxpZEFiaVwiO1xuICAgIEFiaUVycm9yQ29kZVtBYmlFcnJvckNvZGVbXCJJbnZhbGlkRnVuY3Rpb25JZFwiXSA9IDMxMl0gPSBcIkludmFsaWRGdW5jdGlvbklkXCI7XG59KShBYmlFcnJvckNvZGUgPSBleHBvcnRzLkFiaUVycm9yQ29kZSB8fCAoZXhwb3J0cy5BYmlFcnJvckNvZGUgPSB7fSkpO1xuZnVuY3Rpb24gYWJpQ29udHJhY3QodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ29udHJhY3QnLFxuICAgICAgICB2YWx1ZSxcbiAgICB9O1xufVxuZXhwb3J0cy5hYmlDb250cmFjdCA9IGFiaUNvbnRyYWN0O1xuZnVuY3Rpb24gYWJpSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdKc29uJyxcbiAgICAgICAgdmFsdWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWJpSnNvbiA9IGFiaUpzb247XG5mdW5jdGlvbiBhYmlIYW5kbGUodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnSGFuZGxlJyxcbiAgICAgICAgdmFsdWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWJpSGFuZGxlID0gYWJpSGFuZGxlO1xuZnVuY3Rpb24gYWJpU2VyaWFsaXplZCh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTZXJpYWxpemVkJyxcbiAgICAgICAgdmFsdWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWJpU2VyaWFsaXplZCA9IGFiaVNlcmlhbGl6ZWQ7XG5mdW5jdGlvbiBzaWduZXJOb25lKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdOb25lJyxcbiAgICB9O1xufVxuZXhwb3J0cy5zaWduZXJOb25lID0gc2lnbmVyTm9uZTtcbmZ1bmN0aW9uIHNpZ25lckV4dGVybmFsKHB1YmxpY19rZXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRXh0ZXJuYWwnLFxuICAgICAgICBwdWJsaWNfa2V5LFxuICAgIH07XG59XG5leHBvcnRzLnNpZ25lckV4dGVybmFsID0gc2lnbmVyRXh0ZXJuYWw7XG5mdW5jdGlvbiBzaWduZXJLZXlzKGtleXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnS2V5cycsXG4gICAgICAgIGtleXMsXG4gICAgfTtcbn1cbmV4cG9ydHMuc2lnbmVyS2V5cyA9IHNpZ25lcktleXM7XG5mdW5jdGlvbiBzaWduZXJTaWduaW5nQm94KGhhbmRsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTaWduaW5nQm94JyxcbiAgICAgICAgaGFuZGxlLFxuICAgIH07XG59XG5leHBvcnRzLnNpZ25lclNpZ25pbmdCb3ggPSBzaWduZXJTaWduaW5nQm94O1xudmFyIE1lc3NhZ2VCb2R5VHlwZTtcbihmdW5jdGlvbiAoTWVzc2FnZUJvZHlUeXBlKSB7XG4gICAgTWVzc2FnZUJvZHlUeXBlW1wiSW5wdXRcIl0gPSBcIklucHV0XCI7XG4gICAgTWVzc2FnZUJvZHlUeXBlW1wiT3V0cHV0XCJdID0gXCJPdXRwdXRcIjtcbiAgICBNZXNzYWdlQm9keVR5cGVbXCJJbnRlcm5hbE91dHB1dFwiXSA9IFwiSW50ZXJuYWxPdXRwdXRcIjtcbiAgICBNZXNzYWdlQm9keVR5cGVbXCJFdmVudFwiXSA9IFwiRXZlbnRcIjtcbn0pKE1lc3NhZ2VCb2R5VHlwZSA9IGV4cG9ydHMuTWVzc2FnZUJvZHlUeXBlIHx8IChleHBvcnRzLk1lc3NhZ2VCb2R5VHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBzdGF0ZUluaXRTb3VyY2VNZXNzYWdlKHNvdXJjZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdNZXNzYWdlJyxcbiAgICAgICAgc291cmNlLFxuICAgIH07XG59XG5leHBvcnRzLnN0YXRlSW5pdFNvdXJjZU1lc3NhZ2UgPSBzdGF0ZUluaXRTb3VyY2VNZXNzYWdlO1xuZnVuY3Rpb24gc3RhdGVJbml0U291cmNlU3RhdGVJbml0KGNvZGUsIGRhdGEsIGxpYnJhcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU3RhdGVJbml0JyxcbiAgICAgICAgY29kZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgbGlicmFyeSxcbiAgICB9O1xufVxuZXhwb3J0cy5zdGF0ZUluaXRTb3VyY2VTdGF0ZUluaXQgPSBzdGF0ZUluaXRTb3VyY2VTdGF0ZUluaXQ7XG5mdW5jdGlvbiBzdGF0ZUluaXRTb3VyY2VUdmModHZjLCBwdWJsaWNfa2V5LCBpbml0X3BhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdUdmMnLFxuICAgICAgICB0dmMsXG4gICAgICAgIHB1YmxpY19rZXksXG4gICAgICAgIGluaXRfcGFyYW1zLFxuICAgIH07XG59XG5leHBvcnRzLnN0YXRlSW5pdFNvdXJjZVR2YyA9IHN0YXRlSW5pdFNvdXJjZVR2YztcbmZ1bmN0aW9uIG1lc3NhZ2VTb3VyY2VFbmNvZGVkKG1lc3NhZ2UsIGFiaSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdFbmNvZGVkJyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgYWJpLFxuICAgIH07XG59XG5leHBvcnRzLm1lc3NhZ2VTb3VyY2VFbmNvZGVkID0gbWVzc2FnZVNvdXJjZUVuY29kZWQ7XG5mdW5jdGlvbiBtZXNzYWdlU291cmNlRW5jb2RpbmdQYXJhbXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnRW5jb2RpbmdQYXJhbXMnIH0sIHBhcmFtcyk7XG59XG5leHBvcnRzLm1lc3NhZ2VTb3VyY2VFbmNvZGluZ1BhcmFtcyA9IG1lc3NhZ2VTb3VyY2VFbmNvZGluZ1BhcmFtcztcbi8qKlxuICogUHJvdmlkZXMgbWVzc2FnZSBlbmNvZGluZyBhbmQgZGVjb2RpbmcgYWNjb3JkaW5nIHRvIHRoZSBBQkkgc3BlY2lmaWNhdGlvbi5cbiAqL1xuY2xhc3MgQWJpTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgbWVzc2FnZSBib2R5IGFjY29yZGluZyB0byBBQkkgZnVuY3Rpb24gY2FsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZFbmNvZGVNZXNzYWdlQm9keX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZFbmNvZGVNZXNzYWdlQm9keVxuICAgICAqL1xuICAgIGVuY29kZV9tZXNzYWdlX2JvZHkocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdhYmkuZW5jb2RlX21lc3NhZ2VfYm9keScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkF0dGFjaFNpZ25hdHVyZVRvTWVzc2FnZUJvZHl9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mQXR0YWNoU2lnbmF0dXJlVG9NZXNzYWdlQm9keVxuICAgICAqL1xuICAgIGF0dGFjaF9zaWduYXR1cmVfdG9fbWVzc2FnZV9ib2R5KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYWJpLmF0dGFjaF9zaWduYXR1cmVfdG9fbWVzc2FnZV9ib2R5JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBhbiBBQkktY29tcGF0aWJsZSBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEFsbG93cyB0byBlbmNvZGUgZGVwbG95IGFuZCBmdW5jdGlvbiBjYWxsIG1lc3NhZ2VzLFxuICAgICAqIGJvdGggc2lnbmVkIGFuZCB1bnNpZ25lZC5cbiAgICAgKlxuICAgICAqIFVzZSBjYXNlcyBpbmNsdWRlIG1lc3NhZ2VzIG9mIGFueSBwb3NzaWJsZSB0eXBlOlxuICAgICAqIC0gZGVwbG95IHdpdGggaW5pdGlhbCBmdW5jdGlvbiBjYWxsIChpLmUuIGBjb25zdHJ1Y3RvcmAgb3IgYW55IG90aGVyIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCBmb3Igc29tZSBraW5kXG4gICAgICogb2YgaW5pdGlhbGl6YXRpb24pO1xuICAgICAqIC0gZGVwbG95IHdpdGhvdXQgaW5pdGlhbCBmdW5jdGlvbiBjYWxsO1xuICAgICAqIC0gc2lnbmVkL3Vuc2lnbmVkICsgZGF0YSBmb3Igc2lnbmluZy5cbiAgICAgKlxuICAgICAqIGBTaWduZXJgIGRlZmluZXMgaG93IHRoZSBtZXNzYWdlIHNob3VsZCBvciBzaG91bGRuJ3QgYmUgc2lnbmVkOlxuICAgICAqXG4gICAgICogYFNpZ25lcjo6Tm9uZWAgY3JlYXRlcyBhbiB1bnNpZ25lZCBtZXNzYWdlLiBUaGlzIG1heSBiZSBuZWVkZWQgaW4gY2FzZSBvZiBzb21lIHB1YmxpYyBtZXRob2RzLFxuICAgICAqIHRoYXQgZG8gbm90IHJlcXVpcmUgYXV0aG9yaXphdGlvbiBieSBwdWJrZXkuXG4gICAgICpcbiAgICAgKiBgU2lnbmVyOjpFeHRlcm5hbGAgdGFrZXMgcHVibGljIGtleSBhbmQgcmV0dXJucyBgZGF0YV90b19zaWduYCBmb3IgbGF0ZXIgc2lnbmluZy5cbiAgICAgKiBVc2UgYGF0dGFjaF9zaWduYXR1cmVgIG1ldGhvZCB3aXRoIHRoZSByZXN1bHQgc2lnbmF0dXJlIHRvIGdldCB0aGUgc2lnbmVkIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBgU2lnbmVyOjpLZXlzYCBjcmVhdGVzIGEgc2lnbmVkIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCBrZXkgcGFpci5cbiAgICAgKlxuICAgICAqIFtTT09OXSBgU2lnbmVyOjpTaWduaW5nQm94YCBBbGxvd3MgdXNpbmcgYSBzcGVjaWFsIGludGVyZmFjZSB0byBpbXBsZW1lbnQgc2lnbmluZ1xuICAgICAqIHdpdGhvdXQgcHJpdmF0ZSBrZXkgZGlzY2xvc3VyZSB0byBTREsuIEZvciBpbnN0YW5jZSwgaW4gY2FzZSBvZiB1c2luZyBhIGNvbGQgd2FsbGV0IG9yIEhTTSxcbiAgICAgKiB3aGVuIGFwcGxpY2F0aW9uIGNhbGxzIHNvbWUgQVBJIHRvIHNpZ24gZGF0YS5cbiAgICAgKlxuICAgICAqIFRoZXJlIGlzIGFuIG9wdGlvbmFsIHB1YmxpYyBrZXkgY2FuIGJlIHByb3ZpZGVkIGluIGRlcGxveSBzZXQgaW4gb3JkZXIgdG8gc3Vic3RpdHV0ZSBvbmVcbiAgICAgKiBpbiBUVk0gZmlsZS5cbiAgICAgKlxuICAgICAqIFB1YmxpYyBrZXkgcmVzb2x2aW5nIHByaW9yaXR5OlxuICAgICAqIDEuIFB1YmxpYyBrZXkgZnJvbSBkZXBsb3kgc2V0LlxuICAgICAqIDIuIFB1YmxpYyBrZXksIHNwZWNpZmllZCBpbiBUVk0gZmlsZS5cbiAgICAgKiAzLiBQdWJsaWMga2V5LCBwcm92aWRlZCBieSBzaWduZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRW5jb2RlTWVzc2FnZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZFbmNvZGVNZXNzYWdlXG4gICAgICovXG4gICAgZW5jb2RlX21lc3NhZ2UocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdhYmkuZW5jb2RlX21lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIGFuIGludGVybmFsIEFCSS1jb21wYXRpYmxlIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogQWxsb3dzIHRvIGVuY29kZSBkZXBsb3kgYW5kIGZ1bmN0aW9uIGNhbGwgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBVc2UgY2FzZXMgaW5jbHVkZSBtZXNzYWdlcyBvZiBhbnkgcG9zc2libGUgdHlwZTpcbiAgICAgKiAtIGRlcGxveSB3aXRoIGluaXRpYWwgZnVuY3Rpb24gY2FsbCAoaS5lLiBgY29uc3RydWN0b3JgIG9yIGFueSBvdGhlciBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgZm9yIHNvbWUga2luZFxuICAgICAqIG9mIGluaXRpYWxpemF0aW9uKTtcbiAgICAgKiAtIGRlcGxveSB3aXRob3V0IGluaXRpYWwgZnVuY3Rpb24gY2FsbDtcbiAgICAgKiAtIHNpbXBsZSBmdW5jdGlvbiBjYWxsXG4gICAgICpcbiAgICAgKiBUaGVyZSBpcyBhbiBvcHRpb25hbCBwdWJsaWMga2V5IGNhbiBiZSBwcm92aWRlZCBpbiBkZXBsb3kgc2V0IGluIG9yZGVyIHRvIHN1YnN0aXR1dGUgb25lXG4gICAgICogaW4gVFZNIGZpbGUuXG4gICAgICpcbiAgICAgKiBQdWJsaWMga2V5IHJlc29sdmluZyBwcmlvcml0eTpcbiAgICAgKiAxLiBQdWJsaWMga2V5IGZyb20gZGVwbG95IHNldC5cbiAgICAgKiAyLiBQdWJsaWMga2V5LCBzcGVjaWZpZWQgaW4gVFZNIGZpbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRW5jb2RlSW50ZXJuYWxNZXNzYWdlfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkVuY29kZUludGVybmFsTWVzc2FnZVxuICAgICAqL1xuICAgIGVuY29kZV9pbnRlcm5hbF9tZXNzYWdlKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYWJpLmVuY29kZV9pbnRlcm5hbF9tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tYmluZXMgYGhleGAtZW5jb2RlZCBgc2lnbmF0dXJlYCB3aXRoIGBiYXNlNjRgLWVuY29kZWQgYHVuc2lnbmVkX21lc3NhZ2VgLiBSZXR1cm5zIHNpZ25lZCBtZXNzYWdlIGVuY29kZWQgaW4gYGJhc2U2NGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mQXR0YWNoU2lnbmF0dXJlfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkF0dGFjaFNpZ25hdHVyZVxuICAgICAqL1xuICAgIGF0dGFjaF9zaWduYXR1cmUocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdhYmkuYXR0YWNoX3NpZ25hdHVyZScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgbWVzc2FnZSBib2R5IHVzaW5nIHByb3ZpZGVkIG1lc3NhZ2UgQk9DIGFuZCBBQkkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRGVjb2RlTWVzc2FnZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgRGVjb2RlZE1lc3NhZ2VCb2R5XG4gICAgICovXG4gICAgZGVjb2RlX21lc3NhZ2UocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdhYmkuZGVjb2RlX21lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIG1lc3NhZ2UgYm9keSB1c2luZyBwcm92aWRlZCBib2R5IEJPQyBhbmQgQUJJLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkRlY29kZU1lc3NhZ2VCb2R5fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBEZWNvZGVkTWVzc2FnZUJvZHlcbiAgICAgKi9cbiAgICBkZWNvZGVfbWVzc2FnZV9ib2R5KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYWJpLmRlY29kZV9tZXNzYWdlX2JvZHknLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFjY291bnQgc3RhdGUgQk9DXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIENyZWF0ZXMgYWNjb3VudCBzdGF0ZSBwcm92aWRlZCB3aXRoIG9uZSBvZiB0aGVzZSBzZXRzIG9mIGRhdGEgOlxuICAgICAqIDEuIEJPQyBvZiBjb2RlLCBCT0Mgb2YgZGF0YSwgQk9DIG9mIGxpYnJhcnlcbiAgICAgKiAyLiBUVkMgKHN0cmluZyBpbiBgYmFzZTY0YCksIGtleXMsIGluaXQgcGFyYW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRW5jb2RlQWNjb3VudH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZFbmNvZGVBY2NvdW50XG4gICAgICovXG4gICAgZW5jb2RlX2FjY291bnQocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdhYmkuZW5jb2RlX2FjY291bnQnLCBwYXJhbXMpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWJpTW9kdWxlID0gQWJpTW9kdWxlO1xuZnVuY3Rpb24gYm9jQ2FjaGVUeXBlUGlubmVkKHBpbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdQaW5uZWQnLFxuICAgICAgICBwaW4sXG4gICAgfTtcbn1cbmV4cG9ydHMuYm9jQ2FjaGVUeXBlUGlubmVkID0gYm9jQ2FjaGVUeXBlUGlubmVkO1xuZnVuY3Rpb24gYm9jQ2FjaGVUeXBlVW5waW5uZWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VucGlubmVkJyxcbiAgICB9O1xufVxuZXhwb3J0cy5ib2NDYWNoZVR5cGVVbnBpbm5lZCA9IGJvY0NhY2hlVHlwZVVucGlubmVkO1xudmFyIEJvY0Vycm9yQ29kZTtcbihmdW5jdGlvbiAoQm9jRXJyb3JDb2RlKSB7XG4gICAgQm9jRXJyb3JDb2RlW0JvY0Vycm9yQ29kZVtcIkludmFsaWRCb2NcIl0gPSAyMDFdID0gXCJJbnZhbGlkQm9jXCI7XG4gICAgQm9jRXJyb3JDb2RlW0JvY0Vycm9yQ29kZVtcIlNlcmlhbGl6YXRpb25FcnJvclwiXSA9IDIwMl0gPSBcIlNlcmlhbGl6YXRpb25FcnJvclwiO1xuICAgIEJvY0Vycm9yQ29kZVtCb2NFcnJvckNvZGVbXCJJbmFwcHJvcHJpYXRlQmxvY2tcIl0gPSAyMDNdID0gXCJJbmFwcHJvcHJpYXRlQmxvY2tcIjtcbiAgICBCb2NFcnJvckNvZGVbQm9jRXJyb3JDb2RlW1wiTWlzc2luZ1NvdXJjZUJvY1wiXSA9IDIwNF0gPSBcIk1pc3NpbmdTb3VyY2VCb2NcIjtcbiAgICBCb2NFcnJvckNvZGVbQm9jRXJyb3JDb2RlW1wiSW5zdWZmaWNpZW50Q2FjaGVTaXplXCJdID0gMjA1XSA9IFwiSW5zdWZmaWNpZW50Q2FjaGVTaXplXCI7XG4gICAgQm9jRXJyb3JDb2RlW0JvY0Vycm9yQ29kZVtcIkJvY1JlZk5vdEZvdW5kXCJdID0gMjA2XSA9IFwiQm9jUmVmTm90Rm91bmRcIjtcbiAgICBCb2NFcnJvckNvZGVbQm9jRXJyb3JDb2RlW1wiSW52YWxpZEJvY1JlZlwiXSA9IDIwN10gPSBcIkludmFsaWRCb2NSZWZcIjtcbn0pKEJvY0Vycm9yQ29kZSA9IGV4cG9ydHMuQm9jRXJyb3JDb2RlIHx8IChleHBvcnRzLkJvY0Vycm9yQ29kZSA9IHt9KSk7XG5mdW5jdGlvbiBidWlsZGVyT3BJbnRlZ2VyKHNpemUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0ludGVnZXInLFxuICAgICAgICBzaXplLFxuICAgICAgICB2YWx1ZSxcbiAgICB9O1xufVxuZXhwb3J0cy5idWlsZGVyT3BJbnRlZ2VyID0gYnVpbGRlck9wSW50ZWdlcjtcbmZ1bmN0aW9uIGJ1aWxkZXJPcEJpdFN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdCaXRTdHJpbmcnLFxuICAgICAgICB2YWx1ZSxcbiAgICB9O1xufVxuZXhwb3J0cy5idWlsZGVyT3BCaXRTdHJpbmcgPSBidWlsZGVyT3BCaXRTdHJpbmc7XG5mdW5jdGlvbiBidWlsZGVyT3BDZWxsKGJ1aWxkZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ2VsbCcsXG4gICAgICAgIGJ1aWxkZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnVpbGRlck9wQ2VsbCA9IGJ1aWxkZXJPcENlbGw7XG5mdW5jdGlvbiBidWlsZGVyT3BDZWxsQm9jKGJvYykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdDZWxsQm9jJyxcbiAgICAgICAgYm9jLFxuICAgIH07XG59XG5leHBvcnRzLmJ1aWxkZXJPcENlbGxCb2MgPSBidWlsZGVyT3BDZWxsQm9jO1xuLyoqXG4gKiBCT0MgbWFuaXB1bGF0aW9uIG1vZHVsZS5cbiAqL1xuY2xhc3MgQm9jTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBtZXNzYWdlIGJvYyBpbnRvIGEgSlNPTlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBKU09OIHN0cnVjdHVyZSBpcyBjb21wYXRpYmxlIHdpdGggR3JhcGhRTCBBUEkgbWVzc2FnZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZQYXJzZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZQYXJzZVxuICAgICAqL1xuICAgIHBhcnNlX21lc3NhZ2UocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MucGFyc2VfbWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0cmFuc2FjdGlvbiBib2MgaW50byBhIEpTT05cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogSlNPTiBzdHJ1Y3R1cmUgaXMgY29tcGF0aWJsZSB3aXRoIEdyYXBoUUwgQVBJIHRyYW5zYWN0aW9uIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlBhcnNlfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlBhcnNlXG4gICAgICovXG4gICAgcGFyc2VfdHJhbnNhY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MucGFyc2VfdHJhbnNhY3Rpb24nLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYWNjb3VudCBib2MgaW50byBhIEpTT05cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogSlNPTiBzdHJ1Y3R1cmUgaXMgY29tcGF0aWJsZSB3aXRoIEdyYXBoUUwgQVBJIGFjY291bnQgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mUGFyc2V9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mUGFyc2VcbiAgICAgKi9cbiAgICBwYXJzZV9hY2NvdW50KHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYm9jLnBhcnNlX2FjY291bnQnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYmxvY2sgYm9jIGludG8gYSBKU09OXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEpTT04gc3RydWN0dXJlIGlzIGNvbXBhdGlibGUgd2l0aCBHcmFwaFFMIEFQSSBibG9jayBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZQYXJzZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZQYXJzZVxuICAgICAqL1xuICAgIHBhcnNlX2Jsb2NrKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYm9jLnBhcnNlX2Jsb2NrJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHNoYXJkc3RhdGUgYm9jIGludG8gYSBKU09OXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEpTT04gc3RydWN0dXJlIGlzIGNvbXBhdGlibGUgd2l0aCBHcmFwaFFMIEFQSSBzaGFyZHN0YXRlIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlBhcnNlU2hhcmRzdGF0ZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZQYXJzZVxuICAgICAqL1xuICAgIHBhcnNlX3NoYXJkc3RhdGUocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MucGFyc2Vfc2hhcmRzdGF0ZScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYmxvY2tjaGFpbiBjb25maWd1cmF0aW9uIGZyb20ga2V5IGJsb2NrIGFuZCBhbHNvIGZyb20gemVyb3N0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkdldEJsb2NrY2hhaW5Db25maWd9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mR2V0QmxvY2tjaGFpbkNvbmZpZ1xuICAgICAqL1xuICAgIGdldF9ibG9ja2NoYWluX2NvbmZpZyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2JvYy5nZXRfYmxvY2tjaGFpbl9jb25maWcnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIEJPQyByb290IGhhc2hcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZHZXRCb2NIYXNofSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkdldEJvY0hhc2hcbiAgICAgKi9cbiAgICBnZXRfYm9jX2hhc2gocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MuZ2V0X2JvY19oYXNoJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgY29kZSBmcm9tIFRWQyBjb250cmFjdCBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkdldENvZGVGcm9tVHZjfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkdldENvZGVGcm9tVHZjXG4gICAgICovXG4gICAgZ2V0X2NvZGVfZnJvbV90dmMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MuZ2V0X2NvZGVfZnJvbV90dmMnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgQk9DIGZyb20gY2FjaGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZCb2NDYWNoZUdldH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZCb2NDYWNoZUdldFxuICAgICAqL1xuICAgIGNhY2hlX2dldChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2JvYy5jYWNoZV9nZXQnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYXZlIEJPQyBpbnRvIGNhY2hlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mQm9jQ2FjaGVTZXR9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mQm9jQ2FjaGVTZXRcbiAgICAgKi9cbiAgICBjYWNoZV9zZXQocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MuY2FjaGVfc2V0JywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5waW4gQk9DcyB3aXRoIHNwZWNpZmllZCBwaW4uXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEJPQ3Mgd2hpY2ggZG9uJ3QgaGF2ZSBhbm90aGVyIHBpbnMgd2lsbCBiZSByZW1vdmVkIGZyb20gY2FjaGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZCb2NDYWNoZVVucGlufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNhY2hlX3VucGluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnYm9jLmNhY2hlX3VucGluJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBCT0MgZnJvbSBidWlsZGVyIG9wZXJhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRW5jb2RlQm9jfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkVuY29kZUJvY1xuICAgICAqL1xuICAgIGVuY29kZV9ib2MocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdib2MuZW5jb2RlX2JvYycsIHBhcmFtcyk7XG4gICAgfVxufVxuZXhwb3J0cy5Cb2NNb2R1bGUgPSBCb2NNb2R1bGU7XG4vLyBwcm9jZXNzaW5nIG1vZHVsZVxudmFyIFByb2Nlc3NpbmdFcnJvckNvZGU7XG4oZnVuY3Rpb24gKFByb2Nlc3NpbmdFcnJvckNvZGUpIHtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJNZXNzYWdlQWxyZWFkeUV4cGlyZWRcIl0gPSA1MDFdID0gXCJNZXNzYWdlQWxyZWFkeUV4cGlyZWRcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJNZXNzYWdlSGFzTm90RGVzdGluYXRpb25BZGRyZXNzXCJdID0gNTAyXSA9IFwiTWVzc2FnZUhhc05vdERlc3RpbmF0aW9uQWRkcmVzc1wiO1xuICAgIFByb2Nlc3NpbmdFcnJvckNvZGVbUHJvY2Vzc2luZ0Vycm9yQ29kZVtcIkNhbk5vdEJ1aWxkTWVzc2FnZUNlbGxcIl0gPSA1MDNdID0gXCJDYW5Ob3RCdWlsZE1lc3NhZ2VDZWxsXCI7XG4gICAgUHJvY2Vzc2luZ0Vycm9yQ29kZVtQcm9jZXNzaW5nRXJyb3JDb2RlW1wiRmV0Y2hCbG9ja0ZhaWxlZFwiXSA9IDUwNF0gPSBcIkZldGNoQmxvY2tGYWlsZWRcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJTZW5kTWVzc2FnZUZhaWxlZFwiXSA9IDUwNV0gPSBcIlNlbmRNZXNzYWdlRmFpbGVkXCI7XG4gICAgUHJvY2Vzc2luZ0Vycm9yQ29kZVtQcm9jZXNzaW5nRXJyb3JDb2RlW1wiSW52YWxpZE1lc3NhZ2VCb2NcIl0gPSA1MDZdID0gXCJJbnZhbGlkTWVzc2FnZUJvY1wiO1xuICAgIFByb2Nlc3NpbmdFcnJvckNvZGVbUHJvY2Vzc2luZ0Vycm9yQ29kZVtcIk1lc3NhZ2VFeHBpcmVkXCJdID0gNTA3XSA9IFwiTWVzc2FnZUV4cGlyZWRcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJUcmFuc2FjdGlvbldhaXRUaW1lb3V0XCJdID0gNTA4XSA9IFwiVHJhbnNhY3Rpb25XYWl0VGltZW91dFwiO1xuICAgIFByb2Nlc3NpbmdFcnJvckNvZGVbUHJvY2Vzc2luZ0Vycm9yQ29kZVtcIkludmFsaWRCbG9ja1JlY2VpdmVkXCJdID0gNTA5XSA9IFwiSW52YWxpZEJsb2NrUmVjZWl2ZWRcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJDYW5Ob3RDaGVja0Jsb2NrU2hhcmRcIl0gPSA1MTBdID0gXCJDYW5Ob3RDaGVja0Jsb2NrU2hhcmRcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJCbG9ja05vdEZvdW5kXCJdID0gNTExXSA9IFwiQmxvY2tOb3RGb3VuZFwiO1xuICAgIFByb2Nlc3NpbmdFcnJvckNvZGVbUHJvY2Vzc2luZ0Vycm9yQ29kZVtcIkludmFsaWREYXRhXCJdID0gNTEyXSA9IFwiSW52YWxpZERhdGFcIjtcbiAgICBQcm9jZXNzaW5nRXJyb3JDb2RlW1Byb2Nlc3NpbmdFcnJvckNvZGVbXCJFeHRlcm5hbFNpZ25lck11c3ROb3RCZVVzZWRcIl0gPSA1MTNdID0gXCJFeHRlcm5hbFNpZ25lck11c3ROb3RCZVVzZWRcIjtcbn0pKFByb2Nlc3NpbmdFcnJvckNvZGUgPSBleHBvcnRzLlByb2Nlc3NpbmdFcnJvckNvZGUgfHwgKGV4cG9ydHMuUHJvY2Vzc2luZ0Vycm9yQ29kZSA9IHt9KSk7XG5mdW5jdGlvbiBwcm9jZXNzaW5nRXZlbnRXaWxsRmV0Y2hGaXJzdEJsb2NrKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdXaWxsRmV0Y2hGaXJzdEJsb2NrJyxcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRXaWxsRmV0Y2hGaXJzdEJsb2NrID0gcHJvY2Vzc2luZ0V2ZW50V2lsbEZldGNoRmlyc3RCbG9jaztcbmZ1bmN0aW9uIHByb2Nlc3NpbmdFdmVudEZldGNoRmlyc3RCbG9ja0ZhaWxlZChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdGZXRjaEZpcnN0QmxvY2tGYWlsZWQnLFxuICAgICAgICBlcnJvcixcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnRGZXRjaEZpcnN0QmxvY2tGYWlsZWQgPSBwcm9jZXNzaW5nRXZlbnRGZXRjaEZpcnN0QmxvY2tGYWlsZWQ7XG5mdW5jdGlvbiBwcm9jZXNzaW5nRXZlbnRXaWxsU2VuZChzaGFyZF9ibG9ja19pZCwgbWVzc2FnZV9pZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdXaWxsU2VuZCcsXG4gICAgICAgIHNoYXJkX2Jsb2NrX2lkLFxuICAgICAgICBtZXNzYWdlX2lkLFxuICAgICAgICBtZXNzYWdlLFxuICAgIH07XG59XG5leHBvcnRzLnByb2Nlc3NpbmdFdmVudFdpbGxTZW5kID0gcHJvY2Vzc2luZ0V2ZW50V2lsbFNlbmQ7XG5mdW5jdGlvbiBwcm9jZXNzaW5nRXZlbnREaWRTZW5kKHNoYXJkX2Jsb2NrX2lkLCBtZXNzYWdlX2lkLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0RpZFNlbmQnLFxuICAgICAgICBzaGFyZF9ibG9ja19pZCxcbiAgICAgICAgbWVzc2FnZV9pZCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICB9O1xufVxuZXhwb3J0cy5wcm9jZXNzaW5nRXZlbnREaWRTZW5kID0gcHJvY2Vzc2luZ0V2ZW50RGlkU2VuZDtcbmZ1bmN0aW9uIHByb2Nlc3NpbmdFdmVudFNlbmRGYWlsZWQoc2hhcmRfYmxvY2tfaWQsIG1lc3NhZ2VfaWQsIG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NlbmRGYWlsZWQnLFxuICAgICAgICBzaGFyZF9ibG9ja19pZCxcbiAgICAgICAgbWVzc2FnZV9pZCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgZXJyb3IsXG4gICAgfTtcbn1cbmV4cG9ydHMucHJvY2Vzc2luZ0V2ZW50U2VuZEZhaWxlZCA9IHByb2Nlc3NpbmdFdmVudFNlbmRGYWlsZWQ7XG5mdW5jdGlvbiBwcm9jZXNzaW5nRXZlbnRXaWxsRmV0Y2hOZXh0QmxvY2soc2hhcmRfYmxvY2tfaWQsIG1lc3NhZ2VfaWQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnV2lsbEZldGNoTmV4dEJsb2NrJyxcbiAgICAgICAgc2hhcmRfYmxvY2tfaWQsXG4gICAgICAgIG1lc3NhZ2VfaWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbn1cbmV4cG9ydHMucHJvY2Vzc2luZ0V2ZW50V2lsbEZldGNoTmV4dEJsb2NrID0gcHJvY2Vzc2luZ0V2ZW50V2lsbEZldGNoTmV4dEJsb2NrO1xuZnVuY3Rpb24gcHJvY2Vzc2luZ0V2ZW50RmV0Y2hOZXh0QmxvY2tGYWlsZWQoc2hhcmRfYmxvY2tfaWQsIG1lc3NhZ2VfaWQsIG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0ZldGNoTmV4dEJsb2NrRmFpbGVkJyxcbiAgICAgICAgc2hhcmRfYmxvY2tfaWQsXG4gICAgICAgIG1lc3NhZ2VfaWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59XG5leHBvcnRzLnByb2Nlc3NpbmdFdmVudEZldGNoTmV4dEJsb2NrRmFpbGVkID0gcHJvY2Vzc2luZ0V2ZW50RmV0Y2hOZXh0QmxvY2tGYWlsZWQ7XG5mdW5jdGlvbiBwcm9jZXNzaW5nRXZlbnRNZXNzYWdlRXhwaXJlZChtZXNzYWdlX2lkLCBtZXNzYWdlLCBlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdNZXNzYWdlRXhwaXJlZCcsXG4gICAgICAgIG1lc3NhZ2VfaWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59XG5leHBvcnRzLnByb2Nlc3NpbmdFdmVudE1lc3NhZ2VFeHBpcmVkID0gcHJvY2Vzc2luZ0V2ZW50TWVzc2FnZUV4cGlyZWQ7XG4vKipcbiAqIE1lc3NhZ2UgcHJvY2Vzc2luZyBtb2R1bGUuXG4gKlxuICogQHJlbWFya3NcbiAqIFRoaXMgbW9kdWxlIGluY29ycG9yYXRlcyBmdW5jdGlvbnMgcmVsYXRlZCB0byBjb21wbGV4IG1lc3NhZ2VcbiAqIHByb2Nlc3Npbmcgc2NlbmFyaW9zLlxuICovXG5jbGFzcyBQcm9jZXNzaW5nTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIG1lc3NhZ2UgdG8gdGhlIG5ldHdvcmtcbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogU2VuZHMgbWVzc2FnZSB0byB0aGUgbmV0d29yayBhbmQgcmV0dXJucyB0aGUgbGFzdCBnZW5lcmF0ZWQgc2hhcmQgYmxvY2sgb2YgdGhlIGRlc3RpbmF0aW9uIGFjY291bnRcbiAgICAgKiBiZWZvcmUgdGhlIG1lc3NhZ2Ugd2FzIHNlbnQuIEl0IHdpbGwgYmUgcmVxdWlyZWQgbGF0ZXIgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZTZW5kTWVzc2FnZX0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZTZW5kTWVzc2FnZVxuICAgICAqL1xuICAgIHNlbmRfbWVzc2FnZShwYXJhbXMsIHJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgncHJvY2Vzc2luZy5zZW5kX21lc3NhZ2UnLCBwYXJhbXMsIHJlc3BvbnNlSGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG1vbml0b3Jpbmcgb2YgdGhlIG5ldHdvcmsgZm9yIHRoZSByZXN1bHQgdHJhbnNhY3Rpb24gb2YgdGhlIGV4dGVybmFsIGluYm91bmQgbWVzc2FnZSBwcm9jZXNzaW5nLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBgc2VuZF9ldmVudHNgIGVuYWJsZXMgaW50ZXJtZWRpYXRlIGV2ZW50cywgc3VjaCBhcyBgV2lsbEZldGNoTmV4dEJsb2NrYCxcbiAgICAgKiBgRmV0Y2hOZXh0QmxvY2tGYWlsZWRgIHRoYXQgbWF5IGJlIHVzZWZ1bCBmb3IgbG9nZ2luZyBvZiBuZXcgc2hhcmQgYmxvY2tzIGNyZWF0aW9uXG4gICAgICogZHVyaW5nIG1lc3NhZ2UgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoYXQgcHJlc2VuY2Ugb2YgdGhlIGBhYmlgIHBhcmFtZXRlciBpcyBjcml0aWNhbCBmb3IgQUJJXG4gICAgICogY29tcGxpYW50IGNvbnRyYWN0cy4gTWVzc2FnZSBwcm9jZXNzaW5nIHVzZXMgZHJhc3RpY2FsbHlcbiAgICAgKiBkaWZmZXJlbnQgc3RyYXRlZ3kgZm9yIHByb2Nlc3NpbmcgbWVzc2FnZSBmb3IgY29udHJhY3RzIHdoaWNoXG4gICAgICogQUJJIGluY2x1ZGVzIFwiZXhwaXJlXCIgaGVhZGVyLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgQUJJIGhlYWRlciBgZXhwaXJlYCBpcyBwcmVzZW50LCB0aGUgcHJvY2Vzc2luZyB1c2VzXG4gICAgICogYG1lc3NhZ2UgZXhwaXJhdGlvbmAgc3RyYXRlZ3k6XG4gICAgICogLSBUaGUgbWF4aW11bSBibG9jayBnZW4gdGltZSBpcyBzZXQgdG9cbiAgICAgKiAgIGBtZXNzYWdlX2V4cGlyYXRpb25fdGltZW91dCArIHRyYW5zYWN0aW9uX3dhaXRfdGltZW91dGAuXG4gICAgICogLSBXaGVuIG1heGltdW0gYmxvY2sgZ2VuIHRpbWUgaXMgcmVhY2hlZCwgdGhlIHByb2Nlc3Npbmcgd2lsbFxuICAgICAqICAgYmUgZmluaXNoZWQgd2l0aCBgTWVzc2FnZUV4cGlyZWRgIGVycm9yLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgQUJJIGhlYWRlciBgZXhwaXJlYCBpc24ndCBwcmVzZW50IG9yIGBhYmlgIHBhcmFtZXRlclxuICAgICAqIGlzbid0IHNwZWNpZmllZCwgdGhlIHByb2Nlc3NpbmcgdXNlcyBgdHJhbnNhY3Rpb24gd2FpdGluZ2BcbiAgICAgKiBzdHJhdGVneTpcbiAgICAgKiAtIFRoZSBtYXhpbXVtIGJsb2NrIGdlbiB0aW1lIGlzIHNldCB0b1xuICAgICAqICAgYG5vdygpICsgdHJhbnNhY3Rpb25fd2FpdF90aW1lb3V0YC5cbiAgICAgKlxuICAgICAqIC0gSWYgbWF4aW11bSBibG9jayBnZW4gdGltZSBpcyByZWFjaGVkIGFuZCBubyByZXN1bHQgdHJhbnNhY3Rpb24gaXMgZm91bmQsXG4gICAgICogdGhlIHByb2Nlc3Npbmcgd2lsbCBleGl0IHdpdGggYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mV2FpdEZvclRyYW5zYWN0aW9ufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlByb2Nlc3NNZXNzYWdlXG4gICAgICovXG4gICAgd2FpdF9mb3JfdHJhbnNhY3Rpb24ocGFyYW1zLCByZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ3Byb2Nlc3Npbmcud2FpdF9mb3JfdHJhbnNhY3Rpb24nLCBwYXJhbXMsIHJlc3BvbnNlSGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgbWVzc2FnZSwgc2VuZHMgaXQgdG8gdGhlIG5ldHdvcmsgYW5kIG1vbml0b3JzIGl0cyBwcm9jZXNzaW5nLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDcmVhdGVzIEFCSS1jb21wYXRpYmxlIG1lc3NhZ2UsXG4gICAgICogc2VuZHMgaXQgdG8gdGhlIG5ldHdvcmsgYW5kIG1vbml0b3JzIGZvciB0aGUgcmVzdWx0IHRyYW5zYWN0aW9uLlxuICAgICAqIERlY29kZXMgdGhlIG91dHB1dCBtZXNzYWdlcycgYm9kaWVzLlxuICAgICAqXG4gICAgICogSWYgY29udHJhY3QncyBBQkkgaW5jbHVkZXMgXCJleHBpcmVcIiBoZWFkZXIsIHRoZW5cbiAgICAgKiBTREsgaW1wbGVtZW50cyByZXRyaWVzIGluIGNhc2Ugb2YgdW5zdWNjZXNzZnVsIG1lc3NhZ2UgZGVsaXZlcnkgd2l0aGluIHRoZSBleHBpcmF0aW9uXG4gICAgICogdGltZW91dDogU0RLIHJlY3JlYXRlcyB0aGUgbWVzc2FnZSwgc2VuZHMgaXQgYW5kIHByb2Nlc3NlcyBpdCBhZ2Fpbi5cbiAgICAgKlxuICAgICAqIFRoZSBpbnRlcm1lZGlhdGUgZXZlbnRzLCBzdWNoIGFzIGBXaWxsRmV0Y2hGaXJzdEJsb2NrYCwgYFdpbGxTZW5kYCwgYERpZFNlbmRgLFxuICAgICAqIGBXaWxsRmV0Y2hOZXh0QmxvY2tgLCBldGMgLSBhcmUgc3dpdGNoZWQgb24vb2ZmIGJ5IGBzZW5kX2V2ZW50c2AgZmxhZ1xuICAgICAqIGFuZCBsb2dnZWQgaW50byB0aGUgc3VwcGxpZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmV0cnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFyZSBkZWZpbmVkIGluIHRoZSBjbGllbnQncyBgTmV0d29ya0NvbmZpZ2AgYW5kIGBBYmlDb25maWdgLlxuICAgICAqXG4gICAgICogSWYgY29udHJhY3QncyBBQkkgZG9lcyBub3QgaW5jbHVkZSBcImV4cGlyZVwiIGhlYWRlclxuICAgICAqIHRoZW4sIGlmIG5vIHRyYW5zYWN0aW9uIGlzIGZvdW5kIHdpdGhpbiB0aGUgbmV0d29yayB0aW1lb3V0IChzZWUgY29uZmlnIHBhcmFtZXRlciApLCBleGl0cyB3aXRoIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlByb2Nlc3NNZXNzYWdlfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlByb2Nlc3NNZXNzYWdlXG4gICAgICovXG4gICAgcHJvY2Vzc19tZXNzYWdlKHBhcmFtcywgcmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdwcm9jZXNzaW5nLnByb2Nlc3NfbWVzc2FnZScsIHBhcmFtcywgcmVzcG9uc2VIYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnRzLlByb2Nlc3NpbmdNb2R1bGUgPSBQcm9jZXNzaW5nTW9kdWxlO1xuZnVuY3Rpb24gYWRkcmVzc1N0cmluZ0Zvcm1hdEFjY291bnRJZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQWNjb3VudElkJyxcbiAgICB9O1xufVxuZXhwb3J0cy5hZGRyZXNzU3RyaW5nRm9ybWF0QWNjb3VudElkID0gYWRkcmVzc1N0cmluZ0Zvcm1hdEFjY291bnRJZDtcbmZ1bmN0aW9uIGFkZHJlc3NTdHJpbmdGb3JtYXRIZXgoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0hleCcsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWRkcmVzc1N0cmluZ0Zvcm1hdEhleCA9IGFkZHJlc3NTdHJpbmdGb3JtYXRIZXg7XG5mdW5jdGlvbiBhZGRyZXNzU3RyaW5nRm9ybWF0QmFzZTY0KHVybCwgdGVzdCwgYm91bmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0Jhc2U2NCcsXG4gICAgICAgIHVybCxcbiAgICAgICAgdGVzdCxcbiAgICAgICAgYm91bmNlLFxuICAgIH07XG59XG5leHBvcnRzLmFkZHJlc3NTdHJpbmdGb3JtYXRCYXNlNjQgPSBhZGRyZXNzU3RyaW5nRm9ybWF0QmFzZTY0O1xuLyoqXG4gKiBNaXNjIHV0aWxpdHkgRnVuY3Rpb25zLlxuICovXG5jbGFzcyBVdGlsc01vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhZGRyZXNzIGZyb20gYW55IFRPTiBmb3JtYXQgdG8gYW55IFRPTiBmb3JtYXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZDb252ZXJ0QWRkcmVzc30gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZDb252ZXJ0QWRkcmVzc1xuICAgICAqL1xuICAgIGNvbnZlcnRfYWRkcmVzcyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ3V0aWxzLmNvbnZlcnRfYWRkcmVzcycsIHBhcmFtcyk7XG4gICAgfVxufVxuZXhwb3J0cy5VdGlsc01vZHVsZSA9IFV0aWxzTW9kdWxlO1xuLy8gdHZtIG1vZHVsZVxudmFyIFR2bUVycm9yQ29kZTtcbihmdW5jdGlvbiAoVHZtRXJyb3JDb2RlKSB7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIkNhbk5vdFJlYWRUcmFuc2FjdGlvblwiXSA9IDQwMV0gPSBcIkNhbk5vdFJlYWRUcmFuc2FjdGlvblwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJDYW5Ob3RSZWFkQmxvY2tjaGFpbkNvbmZpZ1wiXSA9IDQwMl0gPSBcIkNhbk5vdFJlYWRCbG9ja2NoYWluQ29uZmlnXCI7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIlRyYW5zYWN0aW9uQWJvcnRlZFwiXSA9IDQwM10gPSBcIlRyYW5zYWN0aW9uQWJvcnRlZFwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJJbnRlcm5hbEVycm9yXCJdID0gNDA0XSA9IFwiSW50ZXJuYWxFcnJvclwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJBY3Rpb25QaGFzZUZhaWxlZFwiXSA9IDQwNV0gPSBcIkFjdGlvblBoYXNlRmFpbGVkXCI7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIkFjY291bnRDb2RlTWlzc2luZ1wiXSA9IDQwNl0gPSBcIkFjY291bnRDb2RlTWlzc2luZ1wiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJMb3dCYWxhbmNlXCJdID0gNDA3XSA9IFwiTG93QmFsYW5jZVwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJBY2NvdW50RnJvemVuT3JEZWxldGVkXCJdID0gNDA4XSA9IFwiQWNjb3VudEZyb3plbk9yRGVsZXRlZFwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJBY2NvdW50TWlzc2luZ1wiXSA9IDQwOV0gPSBcIkFjY291bnRNaXNzaW5nXCI7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIlVua25vd25FeGVjdXRpb25FcnJvclwiXSA9IDQxMF0gPSBcIlVua25vd25FeGVjdXRpb25FcnJvclwiO1xuICAgIFR2bUVycm9yQ29kZVtUdm1FcnJvckNvZGVbXCJJbnZhbGlkSW5wdXRTdGFja1wiXSA9IDQxMV0gPSBcIkludmFsaWRJbnB1dFN0YWNrXCI7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIkludmFsaWRBY2NvdW50Qm9jXCJdID0gNDEyXSA9IFwiSW52YWxpZEFjY291bnRCb2NcIjtcbiAgICBUdm1FcnJvckNvZGVbVHZtRXJyb3JDb2RlW1wiSW52YWxpZE1lc3NhZ2VUeXBlXCJdID0gNDEzXSA9IFwiSW52YWxpZE1lc3NhZ2VUeXBlXCI7XG4gICAgVHZtRXJyb3JDb2RlW1R2bUVycm9yQ29kZVtcIkNvbnRyYWN0RXhlY3V0aW9uRXJyb3JcIl0gPSA0MTRdID0gXCJDb250cmFjdEV4ZWN1dGlvbkVycm9yXCI7XG59KShUdm1FcnJvckNvZGUgPSBleHBvcnRzLlR2bUVycm9yQ29kZSB8fCAoZXhwb3J0cy5Udm1FcnJvckNvZGUgPSB7fSkpO1xuZnVuY3Rpb24gYWNjb3VudEZvckV4ZWN1dG9yTm9uZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTm9uZScsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWNjb3VudEZvckV4ZWN1dG9yTm9uZSA9IGFjY291bnRGb3JFeGVjdXRvck5vbmU7XG5mdW5jdGlvbiBhY2NvdW50Rm9yRXhlY3V0b3JVbmluaXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VuaW5pdCcsXG4gICAgfTtcbn1cbmV4cG9ydHMuYWNjb3VudEZvckV4ZWN1dG9yVW5pbml0ID0gYWNjb3VudEZvckV4ZWN1dG9yVW5pbml0O1xuZnVuY3Rpb24gYWNjb3VudEZvckV4ZWN1dG9yQWNjb3VudChib2MsIHVubGltaXRlZF9iYWxhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0FjY291bnQnLFxuICAgICAgICBib2MsXG4gICAgICAgIHVubGltaXRlZF9iYWxhbmNlLFxuICAgIH07XG59XG5leHBvcnRzLmFjY291bnRGb3JFeGVjdXRvckFjY291bnQgPSBhY2NvdW50Rm9yRXhlY3V0b3JBY2NvdW50O1xuLyoqXG4gKi9cbmNsYXNzIFR2bU1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbXVsYXRlcyBhbGwgdGhlIHBoYXNlcyBvZiBjb250cmFjdCBleGVjdXRpb24gbG9jYWxseVxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBQZXJmb3JtcyBhbGwgdGhlIHBoYXNlcyBvZiBjb250cmFjdCBleGVjdXRpb24gb24gVHJhbnNhY3Rpb24gRXhlY3V0b3IgLVxuICAgICAqIHRoZSBzYW1lIGNvbXBvbmVudCB0aGF0IGlzIHVzZWQgb24gVmFsaWRhdG9yIE5vZGVzLlxuICAgICAqXG4gICAgICogQ2FuIGJlIHVzZWQgZm9yIGNvbnRyYWN0IGRlYnVnZ2luaCwgdG8gZmluZCBvdXQgdGhlIHJlYXNvbiB3aHkgbWVzc2FnZSB3YXMgbm90IGRlbGl2ZXJlZCBzdWNjZXNzZnVsbHlcbiAgICAgKiAgLSBiZWNhdXNlIFZhbGlkYXRvcnMganVzdCB0aHJvdyBhd2F5IHRoZSBmYWlsZWQgZXh0ZXJuYWwgaW5ib3VuZCBtZXNzYWdlcywgaGVyZSB5b3UgY2FuIGNhdGNoIHRoZW0uXG4gICAgICpcbiAgICAgKiBBbm90aGVyIHVzZSBjYXNlIGlzIHRvIGVzdGltYXRlIGZlZXMgZm9yIG1lc3NhZ2UgZXhlY3V0aW9uLiBTZXQgIGBBY2NvdW50Rm9yRXhlY3V0b3I6OkFjY291bnQudW5saW1pdGVkX2JhbGFuY2VgXG4gICAgICogdG8gYHRydWVgIHNvIHRoYXQgZW11bGF0aW9uIHdpbGwgbm90IGRlcGVuZCBvbiB0aGUgYWN0dWFsIGJhbGFuY2UuXG4gICAgICpcbiAgICAgKiBPbmUgbW9yZSB1c2UgY2FzZSAtIHlvdSBjYW4gcHJvZHVjZSB0aGUgc2VxdWVuY2Ugb2Ygb3BlcmF0aW9ucyxcbiAgICAgKiB0aHVzIGVtdWxhdGluZyB0aGUgbXVsdGlwbGUgY29udHJhY3QgY2FsbHMgbG9jYWxseS5cbiAgICAgKiBBbmQgc28gb24uXG4gICAgICpcbiAgICAgKiBUbyBnZXQgdGhlIGFjY291bnQgQk9DIChiYWcgb2YgY2VsbHMpIC0gdXNlIGBuZXQucXVlcnlgIG1ldGhvZCB0byBkb3dubG9hZCBpdCBmcm9tIEdyYXBoUUwgQVBJXG4gICAgICogKGZpZWxkIGBib2NgIG9mIGBhY2NvdW50YCkgb3IgZ2VuZXJhdGUgaXQgd2l0aCBgYWJpLmVuY29kZV9hY2NvdW50YCBtZXRob2QuXG4gICAgICogVG8gZ2V0IHRoZSBtZXNzYWdlIEJPQyAtIHVzZSBgYWJpLmVuY29kZV9tZXNzYWdlYCBvciBwcmVwYXJlIGl0IGFueSBvdGhlciB3YXksIGZvciBpbnN0YW5jZSwgd2l0aCBGSUZUIHNjcmlwdC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBuZWVkIHRoaXMgZW11bGF0aW9uIHRvIGJlIGFzIHByZWNpc2UgYXMgcG9zc2libGUgdGhlbiBzcGVjaWZ5IGBQYXJhbXNPZlJ1bkV4ZWN1dG9yYCBwYXJhbWV0ZXIuXG4gICAgICogSWYgeW91IG5lZWQgdG8gc2VlIHRoZSBhYm9ydGVkIHRyYW5zYWN0aW9uIGFzIGEgcmVzdWx0LCBub3QgYXMgYW4gZXJyb3IsIHNldCBgc2tpcF90cmFuc2FjdGlvbl9jaGVja2AgdG8gYHRydWVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlJ1bkV4ZWN1dG9yfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlJ1bkV4ZWN1dG9yXG4gICAgICovXG4gICAgcnVuX2V4ZWN1dG9yKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgndHZtLnJ1bl9leGVjdXRvcicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGdldC1tZXRob2RzIG9mIEFCSS1jb21wYXRpYmxlIGNvbnRyYWN0c1xuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBQZXJmb3JtcyBvbmx5IGEgcGFydCBvZiBjb21wdXRlIHBoYXNlIG9mIHRyYW5zYWN0aW9uIGV4ZWN1dGlvblxuICAgICAqIHRoYXQgaXMgdXNlZCB0byBydW4gZ2V0LW1ldGhvZHMgb2YgQUJJLWNvbXBhdGlibGUgY29udHJhY3RzLlxuICAgICAqXG4gICAgICogSWYgeW91IHRyeSB0byBydW4gZ2V0LW1ldGhvZHMgd2l0aCBgcnVuX2V4ZWN1dG9yYCB5b3Ugd2lsbCBnZXQgYW4gZXJyb3IsIGJlY2F1c2UgaXQgY2hlY2tzIEFDQ0VQVCBhbmQgZXhpdHNcbiAgICAgKiBpZiB0aGVyZSBpcyBub25lLCB3aGljaCBpcyBhY3R1YWxseSB0cnVlIGZvciBnZXQtbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICBUbyBnZXQgdGhlIGFjY291bnQgQk9DIChiYWcgb2YgY2VsbHMpIC0gdXNlIGBuZXQucXVlcnlgIG1ldGhvZCB0byBkb3dubG9hZCBpdCBmcm9tIEdyYXBoUUwgQVBJXG4gICAgICogKGZpZWxkIGBib2NgIG9mIGBhY2NvdW50YCkgb3IgZ2VuZXJhdGUgaXQgd2l0aCBgYWJpLmVuY29kZV9hY2NvdW50IG1ldGhvZGAuXG4gICAgICogVG8gZ2V0IHRoZSBtZXNzYWdlIEJPQyAtIHVzZSBgYWJpLmVuY29kZV9tZXNzYWdlYCBvciBwcmVwYXJlIGl0IGFueSBvdGhlciB3YXksIGZvciBpbnN0YW5jZSwgd2l0aCBGSUZUIHNjcmlwdC5cbiAgICAgKlxuICAgICAqIEF0dGVudGlvbiEgVXBkYXRlZCBhY2NvdW50IHN0YXRlIGlzIHByb2R1Y2VzIGFzIHdlbGwsIGJ1dCBvbmx5XG4gICAgICogYGFjY291bnRfc3RhdGUuc3RvcmFnZS5zdGF0ZS5kYXRhYCAgcGFydCBvZiB0aGUgQk9DIGlzIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mUnVuVHZtfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlJ1blR2bVxuICAgICAqL1xuICAgIHJ1bl90dm0ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCd0dm0ucnVuX3R2bScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGEgZ2V0LW1ldGhvZCBvZiBGSUZUIGNvbnRyYWN0XG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIEV4ZWN1dGVzIGEgZ2V0LW1ldGhvZCBvZiBGSUZUIGNvbnRyYWN0IHRoYXQgZnVsZmlsbHMgdGhlIHNtYy1ndWlkZWxpbmVzIGh0dHBzOi8vdGVzdC50b24ub3JnL3NtYy1ndWlkZWxpbmVzLnR4dFxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgZGF0YSBmcm9tIFRWTSdzIHN0YWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mUnVuR2V0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlJ1bkdldFxuICAgICAqL1xuICAgIHJ1bl9nZXQocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCd0dm0ucnVuX2dldCcsIHBhcmFtcyk7XG4gICAgfVxufVxuZXhwb3J0cy5Udm1Nb2R1bGUgPSBUdm1Nb2R1bGU7XG4vLyBuZXQgbW9kdWxlXG52YXIgTmV0RXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChOZXRFcnJvckNvZGUpIHtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiUXVlcnlGYWlsZWRcIl0gPSA2MDFdID0gXCJRdWVyeUZhaWxlZFwiO1xuICAgIE5ldEVycm9yQ29kZVtOZXRFcnJvckNvZGVbXCJTdWJzY3JpYmVGYWlsZWRcIl0gPSA2MDJdID0gXCJTdWJzY3JpYmVGYWlsZWRcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiV2FpdEZvckZhaWxlZFwiXSA9IDYwM10gPSBcIldhaXRGb3JGYWlsZWRcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiR2V0U3Vic2NyaXB0aW9uUmVzdWx0RmFpbGVkXCJdID0gNjA0XSA9IFwiR2V0U3Vic2NyaXB0aW9uUmVzdWx0RmFpbGVkXCI7XG4gICAgTmV0RXJyb3JDb2RlW05ldEVycm9yQ29kZVtcIkludmFsaWRTZXJ2ZXJSZXNwb25zZVwiXSA9IDYwNV0gPSBcIkludmFsaWRTZXJ2ZXJSZXNwb25zZVwiO1xuICAgIE5ldEVycm9yQ29kZVtOZXRFcnJvckNvZGVbXCJDbG9ja091dE9mU3luY1wiXSA9IDYwNl0gPSBcIkNsb2NrT3V0T2ZTeW5jXCI7XG4gICAgTmV0RXJyb3JDb2RlW05ldEVycm9yQ29kZVtcIldhaXRGb3JUaW1lb3V0XCJdID0gNjA3XSA9IFwiV2FpdEZvclRpbWVvdXRcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiR3JhcGhxbEVycm9yXCJdID0gNjA4XSA9IFwiR3JhcGhxbEVycm9yXCI7XG4gICAgTmV0RXJyb3JDb2RlW05ldEVycm9yQ29kZVtcIk5ldHdvcmtNb2R1bGVTdXNwZW5kZWRcIl0gPSA2MDldID0gXCJOZXR3b3JrTW9kdWxlU3VzcGVuZGVkXCI7XG4gICAgTmV0RXJyb3JDb2RlW05ldEVycm9yQ29kZVtcIldlYnNvY2tldERpc2Nvbm5lY3RlZFwiXSA9IDYxMF0gPSBcIldlYnNvY2tldERpc2Nvbm5lY3RlZFwiO1xuICAgIE5ldEVycm9yQ29kZVtOZXRFcnJvckNvZGVbXCJOb3RTdXBwb3J0ZWRcIl0gPSA2MTFdID0gXCJOb3RTdXBwb3J0ZWRcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiTm9FbmRwb2ludHNQcm92aWRlZFwiXSA9IDYxMl0gPSBcIk5vRW5kcG9pbnRzUHJvdmlkZWRcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiR3JhcGhxbFdlYnNvY2tldEluaXRFcnJvclwiXSA9IDYxM10gPSBcIkdyYXBocWxXZWJzb2NrZXRJbml0RXJyb3JcIjtcbiAgICBOZXRFcnJvckNvZGVbTmV0RXJyb3JDb2RlW1wiTmV0d29ya01vZHVsZVJlc3VtZWRcIl0gPSA2MTRdID0gXCJOZXR3b3JrTW9kdWxlUmVzdW1lZFwiO1xufSkoTmV0RXJyb3JDb2RlID0gZXhwb3J0cy5OZXRFcnJvckNvZGUgfHwgKGV4cG9ydHMuTmV0RXJyb3JDb2RlID0ge30pKTtcbnZhciBTb3J0RGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChTb3J0RGlyZWN0aW9uKSB7XG4gICAgU29ydERpcmVjdGlvbltcIkFTQ1wiXSA9IFwiQVNDXCI7XG4gICAgU29ydERpcmVjdGlvbltcIkRFU0NcIl0gPSBcIkRFU0NcIjtcbn0pKFNvcnREaXJlY3Rpb24gPSBleHBvcnRzLlNvcnREaXJlY3Rpb24gfHwgKGV4cG9ydHMuU29ydERpcmVjdGlvbiA9IHt9KSk7XG5mdW5jdGlvbiBwYXJhbXNPZlF1ZXJ5T3BlcmF0aW9uUXVlcnlDb2xsZWN0aW9uKHBhcmFtcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgdHlwZTogJ1F1ZXJ5Q29sbGVjdGlvbicgfSwgcGFyYW1zKTtcbn1cbmV4cG9ydHMucGFyYW1zT2ZRdWVyeU9wZXJhdGlvblF1ZXJ5Q29sbGVjdGlvbiA9IHBhcmFtc09mUXVlcnlPcGVyYXRpb25RdWVyeUNvbGxlY3Rpb247XG5mdW5jdGlvbiBwYXJhbXNPZlF1ZXJ5T3BlcmF0aW9uV2FpdEZvckNvbGxlY3Rpb24ocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnV2FpdEZvckNvbGxlY3Rpb24nIH0sIHBhcmFtcyk7XG59XG5leHBvcnRzLnBhcmFtc09mUXVlcnlPcGVyYXRpb25XYWl0Rm9yQ29sbGVjdGlvbiA9IHBhcmFtc09mUXVlcnlPcGVyYXRpb25XYWl0Rm9yQ29sbGVjdGlvbjtcbmZ1bmN0aW9uIHBhcmFtc09mUXVlcnlPcGVyYXRpb25BZ2dyZWdhdGVDb2xsZWN0aW9uKHBhcmFtcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgdHlwZTogJ0FnZ3JlZ2F0ZUNvbGxlY3Rpb24nIH0sIHBhcmFtcyk7XG59XG5leHBvcnRzLnBhcmFtc09mUXVlcnlPcGVyYXRpb25BZ2dyZWdhdGVDb2xsZWN0aW9uID0gcGFyYW1zT2ZRdWVyeU9wZXJhdGlvbkFnZ3JlZ2F0ZUNvbGxlY3Rpb247XG52YXIgQWdncmVnYXRpb25GbjtcbihmdW5jdGlvbiAoQWdncmVnYXRpb25Gbikge1xuICAgIEFnZ3JlZ2F0aW9uRm5bXCJDT1VOVFwiXSA9IFwiQ09VTlRcIjtcbiAgICBBZ2dyZWdhdGlvbkZuW1wiTUlOXCJdID0gXCJNSU5cIjtcbiAgICBBZ2dyZWdhdGlvbkZuW1wiTUFYXCJdID0gXCJNQVhcIjtcbiAgICBBZ2dyZWdhdGlvbkZuW1wiU1VNXCJdID0gXCJTVU1cIjtcbiAgICBBZ2dyZWdhdGlvbkZuW1wiQVZFUkFHRVwiXSA9IFwiQVZFUkFHRVwiO1xufSkoQWdncmVnYXRpb25GbiA9IGV4cG9ydHMuQWdncmVnYXRpb25GbiB8fCAoZXhwb3J0cy5BZ2dyZWdhdGlvbkZuID0ge30pKTtcbi8qKlxuICogTmV0d29yayBhY2Nlc3MuXG4gKi9cbmNsYXNzIE5ldE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBEQXBwU2VydmVyIEdyYXBoUUwgcXVlcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mUXVlcnl9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mUXVlcnlcbiAgICAgKi9cbiAgICBxdWVyeShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ25ldC5xdWVyeScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG11bHRpcGxlIHF1ZXJpZXMgcGVyIHNpbmdsZSBmZXRjaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZCYXRjaFF1ZXJ5fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkJhdGNoUXVlcnlcbiAgICAgKi9cbiAgICBiYXRjaF9xdWVyeShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ25ldC5iYXRjaF9xdWVyeScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgY29sbGVjdGlvbiBkYXRhXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFF1ZXJpZXMgZGF0YSB0aGF0IHNhdGlzZmllcyB0aGUgYGZpbHRlcmAgY29uZGl0aW9ucyxcbiAgICAgKiBsaW1pdHMgdGhlIG51bWJlciBvZiByZXR1cm5lZCByZWNvcmRzIGFuZCBvcmRlcnMgdGhlbS5cbiAgICAgKiBUaGUgcHJvamVjdGlvbiBmaWVsZHMgYXJlIGxpbWl0ZWQgdG8gYHJlc3VsdGAgZmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mUXVlcnlDb2xsZWN0aW9ufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZlF1ZXJ5Q29sbGVjdGlvblxuICAgICAqL1xuICAgIHF1ZXJ5X2NvbGxlY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQucXVlcnlfY29sbGVjdGlvbicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFnZ3JlZ2F0ZXMgY29sbGVjdGlvbiBkYXRhLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBBZ2dyZWdhdGVzIHZhbHVlcyBmcm9tIHRoZSBzcGVjaWZpZWQgYGZpZWxkc2AgZm9yIHJlY29yZHNcbiAgICAgKiB0aGF0IHNhdGlzZmllcyB0aGUgYGZpbHRlcmAgY29uZGl0aW9ucyxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZBZ2dyZWdhdGVDb2xsZWN0aW9ufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZkFnZ3JlZ2F0ZUNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBhZ2dyZWdhdGVfY29sbGVjdGlvbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ25ldC5hZ2dyZWdhdGVfY29sbGVjdGlvbicsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgZnVsZmlsbHMgdGhlIGNvbmRpdGlvbnMgb3Igd2FpdHMgZm9yIGl0cyBhcHBlYXJhbmNlXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRyaWdnZXJzIG9ubHkgb25jZS5cbiAgICAgKiBJZiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlIGBmaWx0ZXJgIGNvbmRpdGlvbnNcbiAgICAgKiBhbHJlYWR5IGV4aXN0cyAtIHJldHVybnMgaXQgaW1tZWRpYXRlbHkuXG4gICAgICogSWYgbm90IC0gd2FpdHMgZm9yIGluc2VydC91cGRhdGUgb2YgZGF0YSB3aXRoaW4gdGhlIHNwZWNpZmllZCBgdGltZW91dGAsXG4gICAgICogYW5kIHJldHVybnMgaXQuXG4gICAgICogVGhlIHByb2plY3Rpb24gZmllbGRzIGFyZSBsaW1pdGVkIHRvIGByZXN1bHRgIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZldhaXRGb3JDb2xsZWN0aW9ufSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyBSZXN1bHRPZldhaXRGb3JDb2xsZWN0aW9uXG4gICAgICovXG4gICAgd2FpdF9mb3JfY29sbGVjdGlvbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ25ldC53YWl0X2Zvcl9jb2xsZWN0aW9uJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FuY2VscyBhIHN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDYW5jZWxzIGEgc3Vic2NyaXB0aW9uIHNwZWNpZmllZCBieSBpdHMgaGFuZGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXN1bHRPZlN1YnNjcmliZUNvbGxlY3Rpb259IHBhcmFtc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQudW5zdWJzY3JpYmUnLCBwYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRyaWdnZXJzIGZvciBlYWNoIGluc2VydC91cGRhdGUgb2YgZGF0YSB0aGF0IHNhdGlzZmllc1xuICAgICAqIHRoZSBgZmlsdGVyYCBjb25kaXRpb25zLlxuICAgICAqIFRoZSBwcm9qZWN0aW9uIGZpZWxkcyBhcmUgbGltaXRlZCB0byBgcmVzdWx0YCBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBUaGUgc3Vic2NyaXB0aW9uIGlzIGEgcGVyc2lzdGVudCBjb21tdW5pY2F0aW9uIGNoYW5uZWwgYmV0d2VlblxuICAgICAqIGNsaWVudCBhbmQgRnJlZSBUT04gTmV0d29yay5cbiAgICAgKiBBbGwgY2hhbmdlcyBpbiB0aGUgYmxvY2tjaGFpbiB3aWxsIGJlIHJlZmxlY3RlZCBpbiByZWFsdGltZS5cbiAgICAgKiBDaGFuZ2VzIG1lYW5zIGluc2VydHMgYW5kIHVwZGF0ZXMgb2YgdGhlIGJsb2NrY2hhaW4gZW50aXRpZXMuXG4gICAgICpcbiAgICAgKiAjIyMgSW1wb3J0YW50IE5vdGVzIG9uIFN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIFVuZm9ydHVuYXRlbHkgc29tZXRpbWVzIHRoZSBjb25uZWN0aW9uIHdpdGggdGhlIG5ldHdvcmsgYnJha2VzIGRvd24uXG4gICAgICogSW4gdGhpcyBzaXR1YXRpb24gdGhlIGxpYnJhcnkgYXR0ZW1wdHMgdG8gcmVjb25uZWN0IHRvIHRoZSBuZXR3b3JrLlxuICAgICAqIFRoaXMgcmVjb25uZWN0aW9uIHNlcXVlbmNlIGNhbiB0YWtlIHNpZ25pZmljYW50IHRpbWUuXG4gICAgICogQWxsIG9mIHRoaXMgdGltZSB0aGUgY2xpZW50IGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBuZXR3b3JrLlxuICAgICAqXG4gICAgICogQmFkIG5ld3MgaXMgdGhhdCBhbGwgYmxvY2tjaGFpbiBjaGFuZ2VzIHRoYXQgaGFwcGVuZWQgd2hpbGVcbiAgICAgKiB0aGUgY2xpZW50IHdhcyBkaXNjb25uZWN0ZWQgYXJlIGxvc3QuXG4gICAgICpcbiAgICAgKiBHb29kIG5ld3MgaXMgdGhhdCB0aGUgY2xpZW50IHJlcG9ydCBlcnJvcnMgdG8gdGhlIGNhbGxiYWNrIHdoZW5cbiAgICAgKiBpdCBsb3NlcyBhbmQgcmVzdW1lcyBjb25uZWN0aW9uLlxuICAgICAqXG4gICAgICogU28sIGlmIHRoZSBsb3N0IGNoYW5nZXMgYXJlIGltcG9ydGFudCB0byB0aGUgYXBwbGljYXRpb24gdGhlblxuICAgICAqIHRoZSBhcHBsaWNhdGlvbiBtdXN0IGhhbmRsZSB0aGVzZSBlcnJvciByZXBvcnRzLlxuICAgICAqXG4gICAgICogTGlicmFyeSByZXBvcnRzIGVycm9ycyB3aXRoIGByZXNwb25zZVR5cGVgID09IDEwMVxuICAgICAqIGFuZCB0aGUgZXJyb3Igb2JqZWN0IHBhc3NlZCB2aWEgYHBhcmFtc2AuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBsaWJyYXJ5IGhhcyBzdWNjZXNzZnVsbHkgcmVjb25uZWN0ZWRcbiAgICAgKiB0aGUgYXBwbGljYXRpb24gcmVjZWl2ZXMgY2FsbGJhY2sgd2l0aFxuICAgICAqIGByZXNwb25zZVR5cGVgID09IDEwMSBhbmQgYHBhcmFtcy5jb2RlYCA9PSA2MTQgKE5ldHdvcmtNb2R1bGVSZXN1bWVkKS5cbiAgICAgKlxuICAgICAqIEFwcGxpY2F0aW9uIGNhbiB1c2Ugc2V2ZXJhbCB3YXlzIHRvIGhhbmRsZSB0aGlzIHNpdHVhdGlvbjpcbiAgICAgKiAtIElmIGFwcGxpY2F0aW9uIG1vbml0b3JzIGNoYW5nZXMgZm9yIHRoZSBzaW5nbGUgYmxvY2tjaGFpblxuICAgICAqIG9iamVjdCAoZm9yIGV4YW1wbGUgc3BlY2lmaWMgYWNjb3VudCk6ICBhcHBsaWNhdGlvblxuICAgICAqIGNhbiBwZXJmb3JtIGEgcXVlcnkgZm9yIHRoaXMgb2JqZWN0IGFuZCBoYW5kbGUgYWN0dWFsIGRhdGEgYXMgYVxuICAgICAqIHJlZ3VsYXIgZGF0YSBmcm9tIHRoZSBzdWJzY3JpcHRpb24uXG4gICAgICogLSBJZiBhcHBsaWNhdGlvbiBtb25pdG9ycyBzZXF1ZW5jZSBvZiBzb21lIGJsb2NrY2hhaW4gb2JqZWN0c1xuICAgICAqIChmb3IgZXhhbXBsZSB0cmFuc2FjdGlvbnMgb2YgdGhlIHNwZWNpZmljIGFjY291bnQpOiBhcHBsaWNhdGlvbiBtdXN0XG4gICAgICogcmVmcmVzaCBhbGwgY2FjaGVkIChvciB2aXNpYmxlIHRvIHVzZXIpIGxpc3RzIHdoZXJlIHRoaXMgc2VxdWVuY2VzIHByZXNlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZlN1YnNjcmliZUNvbGxlY3Rpb259IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIFJlc3VsdE9mU3Vic2NyaWJlQ29sbGVjdGlvblxuICAgICAqL1xuICAgIHN1YnNjcmliZV9jb2xsZWN0aW9uKHBhcmFtcywgcmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQuc3Vic2NyaWJlX2NvbGxlY3Rpb24nLCBwYXJhbXMsIHJlc3BvbnNlSGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1c3BlbmRzIG5ldHdvcmsgbW9kdWxlIHRvIHN0b3AgYW55IG5ldHdvcmsgYWN0aXZpdHlcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN1c3BlbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQuc3VzcGVuZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXN1bWVzIG5ldHdvcmsgbW9kdWxlIHRvIGVuYWJsZSBuZXR3b3JrIGFjdGl2aXR5XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQucmVzdW1lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgSUQgb2YgdGhlIGxhc3QgYmxvY2sgaW4gYSBzcGVjaWZpZWQgYWNjb3VudCBzaGFyZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQYXJhbXNPZkZpbmRMYXN0U2hhcmRCbG9ja30gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVzdWx0T2ZGaW5kTGFzdFNoYXJkQmxvY2tcbiAgICAgKi9cbiAgICBmaW5kX2xhc3Rfc2hhcmRfYmxvY2socGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCduZXQuZmluZF9sYXN0X3NoYXJkX2Jsb2NrJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgdGhlIGxpc3Qgb2YgYWx0ZXJuYXRpdmUgZW5kcG9pbnRzIGZyb20gc2VydmVyXG4gICAgICogQHJldHVybnMgRW5kcG9pbnRzU2V0XG4gICAgICovXG4gICAgZmV0Y2hfZW5kcG9pbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnbmV0LmZldGNoX2VuZHBvaW50cycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaXN0IG9mIGVuZHBvaW50cyB0byB1c2Ugb24gcmVpbml0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VuZHBvaW50c1NldH0gcGFyYW1zXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzZXRfZW5kcG9pbnRzKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnbmV0LnNldF9lbmRwb2ludHMnLCBwYXJhbXMpO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV0TW9kdWxlID0gTmV0TW9kdWxlO1xuLy8gZGVib3QgbW9kdWxlXG52YXIgRGVib3RFcnJvckNvZGU7XG4oZnVuY3Rpb24gKERlYm90RXJyb3JDb2RlKSB7XG4gICAgRGVib3RFcnJvckNvZGVbRGVib3RFcnJvckNvZGVbXCJEZWJvdFN0YXJ0RmFpbGVkXCJdID0gODAxXSA9IFwiRGVib3RTdGFydEZhaWxlZFwiO1xuICAgIERlYm90RXJyb3JDb2RlW0RlYm90RXJyb3JDb2RlW1wiRGVib3RGZXRjaEZhaWxlZFwiXSA9IDgwMl0gPSBcIkRlYm90RmV0Y2hGYWlsZWRcIjtcbiAgICBEZWJvdEVycm9yQ29kZVtEZWJvdEVycm9yQ29kZVtcIkRlYm90RXhlY3V0aW9uRmFpbGVkXCJdID0gODAzXSA9IFwiRGVib3RFeGVjdXRpb25GYWlsZWRcIjtcbiAgICBEZWJvdEVycm9yQ29kZVtEZWJvdEVycm9yQ29kZVtcIkRlYm90SW52YWxpZEhhbmRsZVwiXSA9IDgwNF0gPSBcIkRlYm90SW52YWxpZEhhbmRsZVwiO1xuICAgIERlYm90RXJyb3JDb2RlW0RlYm90RXJyb3JDb2RlW1wiRGVib3RJbnZhbGlkSnNvblBhcmFtc1wiXSA9IDgwNV0gPSBcIkRlYm90SW52YWxpZEpzb25QYXJhbXNcIjtcbiAgICBEZWJvdEVycm9yQ29kZVtEZWJvdEVycm9yQ29kZVtcIkRlYm90SW52YWxpZEZ1bmN0aW9uSWRcIl0gPSA4MDZdID0gXCJEZWJvdEludmFsaWRGdW5jdGlvbklkXCI7XG4gICAgRGVib3RFcnJvckNvZGVbRGVib3RFcnJvckNvZGVbXCJEZWJvdEludmFsaWRBYmlcIl0gPSA4MDddID0gXCJEZWJvdEludmFsaWRBYmlcIjtcbiAgICBEZWJvdEVycm9yQ29kZVtEZWJvdEVycm9yQ29kZVtcIkRlYm90R2V0TWV0aG9kRmFpbGVkXCJdID0gODA4XSA9IFwiRGVib3RHZXRNZXRob2RGYWlsZWRcIjtcbiAgICBEZWJvdEVycm9yQ29kZVtEZWJvdEVycm9yQ29kZVtcIkRlYm90SW52YWxpZE1zZ1wiXSA9IDgwOV0gPSBcIkRlYm90SW52YWxpZE1zZ1wiO1xuICAgIERlYm90RXJyb3JDb2RlW0RlYm90RXJyb3JDb2RlW1wiRGVib3RFeHRlcm5hbENhbGxGYWlsZWRcIl0gPSA4MTBdID0gXCJEZWJvdEV4dGVybmFsQ2FsbEZhaWxlZFwiO1xufSkoRGVib3RFcnJvckNvZGUgPSBleHBvcnRzLkRlYm90RXJyb3JDb2RlIHx8IChleHBvcnRzLkRlYm90RXJyb3JDb2RlID0ge30pKTtcbmZ1bmN0aW9uIHBhcmFtc09mQXBwRGVib3RCcm93c2VyTG9nKG1zZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdMb2cnLFxuICAgICAgICBtc2csXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJMb2cgPSBwYXJhbXNPZkFwcERlYm90QnJvd3NlckxvZztcbmZ1bmN0aW9uIHBhcmFtc09mQXBwRGVib3RCcm93c2VyU3dpdGNoKGNvbnRleHRfaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU3dpdGNoJyxcbiAgICAgICAgY29udGV4dF9pZCxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlclN3aXRjaCA9IHBhcmFtc09mQXBwRGVib3RCcm93c2VyU3dpdGNoO1xuZnVuY3Rpb24gcGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJTd2l0Y2hDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1N3aXRjaENvbXBsZXRlZCcsXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJTd2l0Y2hDb21wbGV0ZWQgPSBwYXJhbXNPZkFwcERlYm90QnJvd3NlclN3aXRjaENvbXBsZXRlZDtcbmZ1bmN0aW9uIHBhcmFtc09mQXBwRGVib3RCcm93c2VyU2hvd0FjdGlvbihhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU2hvd0FjdGlvbicsXG4gICAgICAgIGFjdGlvbixcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlclNob3dBY3Rpb24gPSBwYXJhbXNPZkFwcERlYm90QnJvd3NlclNob3dBY3Rpb247XG5mdW5jdGlvbiBwYXJhbXNPZkFwcERlYm90QnJvd3NlcklucHV0KHByb21wdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdJbnB1dCcsXG4gICAgICAgIHByb21wdCxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlcklucHV0ID0gcGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJJbnB1dDtcbmZ1bmN0aW9uIHBhcmFtc09mQXBwRGVib3RCcm93c2VyR2V0U2lnbmluZ0JveCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnR2V0U2lnbmluZ0JveCcsXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJHZXRTaWduaW5nQm94ID0gcGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJHZXRTaWduaW5nQm94O1xuZnVuY3Rpb24gcGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJJbnZva2VEZWJvdChkZWJvdF9hZGRyLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnSW52b2tlRGVib3QnLFxuICAgICAgICBkZWJvdF9hZGRyLFxuICAgICAgICBhY3Rpb24sXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyYW1zT2ZBcHBEZWJvdEJyb3dzZXJJbnZva2VEZWJvdCA9IHBhcmFtc09mQXBwRGVib3RCcm93c2VySW52b2tlRGVib3Q7XG5mdW5jdGlvbiBwYXJhbXNPZkFwcERlYm90QnJvd3NlclNlbmQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTZW5kJyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJhbXNPZkFwcERlYm90QnJvd3NlclNlbmQgPSBwYXJhbXNPZkFwcERlYm90QnJvd3NlclNlbmQ7XG5mdW5jdGlvbiByZXN1bHRPZkFwcERlYm90QnJvd3NlcklucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0lucHV0JyxcbiAgICAgICAgdmFsdWUsXG4gICAgfTtcbn1cbmV4cG9ydHMucmVzdWx0T2ZBcHBEZWJvdEJyb3dzZXJJbnB1dCA9IHJlc3VsdE9mQXBwRGVib3RCcm93c2VySW5wdXQ7XG5mdW5jdGlvbiByZXN1bHRPZkFwcERlYm90QnJvd3NlckdldFNpZ25pbmdCb3goc2lnbmluZ19ib3gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnR2V0U2lnbmluZ0JveCcsXG4gICAgICAgIHNpZ25pbmdfYm94LFxuICAgIH07XG59XG5leHBvcnRzLnJlc3VsdE9mQXBwRGVib3RCcm93c2VyR2V0U2lnbmluZ0JveCA9IHJlc3VsdE9mQXBwRGVib3RCcm93c2VyR2V0U2lnbmluZ0JveDtcbmZ1bmN0aW9uIHJlc3VsdE9mQXBwRGVib3RCcm93c2VySW52b2tlRGVib3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0ludm9rZURlYm90JyxcbiAgICB9O1xufVxuZXhwb3J0cy5yZXN1bHRPZkFwcERlYm90QnJvd3Nlckludm9rZURlYm90ID0gcmVzdWx0T2ZBcHBEZWJvdEJyb3dzZXJJbnZva2VEZWJvdDtcbmZ1bmN0aW9uIGRpc3BhdGNoQXBwRGVib3RCcm93c2VyKG9iaiwgcGFyYW1zLCBhcHBfcmVxdWVzdF9pZCwgY2xpZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdMb2cnOlxuICAgICAgICAgICAgICAgICAgICBvYmoubG9nKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1N3aXRjaCc6XG4gICAgICAgICAgICAgICAgICAgIG9iai5zd2l0Y2gocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU3dpdGNoQ29tcGxldGVkJzpcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN3aXRjaF9jb21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2hvd0FjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIG9iai5zaG93X2FjdGlvbihwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdJbnB1dCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHlpZWxkIG9iai5pbnB1dChwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdHZXRTaWduaW5nQm94JzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0geWllbGQgb2JqLmdldF9zaWduaW5nX2JveCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdJbnZva2VEZWJvdCc6XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG9iai5pbnZva2VfZGVib3QocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIG9iai5zZW5kKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpZW50LnJlc29sdmVfYXBwX3JlcXVlc3QoYXBwX3JlcXVlc3RfaWQsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBwYXJhbXMudHlwZSB9LCByZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNsaWVudC5yZWplY3RfYXBwX3JlcXVlc3QoYXBwX3JlcXVlc3RfaWQsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBbVU5TVEFCTEVdKFVOU1RBQkxFLm1kKSBNb2R1bGUgZm9yIHdvcmtpbmcgd2l0aCBkZWJvdC5cbiAqL1xuY2xhc3MgRGVib3RNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW1VOU1RBQkxFXShVTlNUQUJMRS5tZCkgU3RhcnRzIGFuIGluc3RhbmNlIG9mIGRlYm90LlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBEb3dubG9hZHMgZGVib3Qgc21hcnQgY29udHJhY3QgZnJvbSBibG9ja2NoYWluIGFuZCBzd2l0Y2hlcyBpdCB0b1xuICAgICAqIGNvbnRleHQgemVyby5cbiAgICAgKiBSZXR1cm5zIGEgZGVib3QgaGFuZGxlIHdoaWNoIGNhbiBiZSB1c2VkIGxhdGVyIGluIGBleGVjdXRlYCBmdW5jdGlvbi5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZCBieSBEZWJvdCBCcm93c2VyIHRvIHN0YXJ0IGEgZGlhbG9nIHdpdGggZGVib3QuXG4gICAgICogV2hpbGUgdGhlIGZ1bmN0aW9uIGlzIGV4ZWN1dGluZywgc2V2ZXJhbCBCcm93c2VyIENhbGxiYWNrcyBjYW4gYmUgY2FsbGVkLFxuICAgICAqIHNpbmNlIHRoZSBkZWJvdCB0cmllcyB0byBkaXNwbGF5IGFsbCBhY3Rpb25zIGZyb20gdGhlIGNvbnRleHQgMCB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqICMgUmVtYXJrc1xuICAgICAqIGBzdGFydGAgaXMgZXF1aXZhbGVudCB0byBgZmV0Y2hgICsgc3dpdGNoIHRvIGNvbnRleHQgMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZTdGFydH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVnaXN0ZXJlZERlYm90XG4gICAgICovXG4gICAgc3RhcnQocGFyYW1zLCBvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2RlYm90LnN0YXJ0JywgcGFyYW1zLCAocGFyYW1zLCByZXNwb25zZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEFwcERlYm90QnJvd3NlcihvYmosIHBhcmFtcy5yZXF1ZXN0X2RhdGEsIHBhcmFtcy5hcHBfcmVxdWVzdF9pZCwgdGhpcy5jbGllbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2VUeXBlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hBcHBEZWJvdEJyb3dzZXIob2JqLCBwYXJhbXMsIG51bGwsIHRoaXMuY2xpZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtVTlNUQUJMRV0oVU5TVEFCTEUubWQpIEZldGNoZXMgZGVib3QgZnJvbSBibG9ja2NoYWluLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBEb3dubG9hZHMgZGVib3Qgc21hcnQgY29udHJhY3QgKGNvZGUgYW5kIGRhdGEpIGZyb20gYmxvY2tjaGFpbiBhbmQgY3JlYXRlc1xuICAgICAqIGFuIGluc3RhbmNlIG9mIERlYm90IEVuZ2luZSBmb3IgaXQuXG4gICAgICpcbiAgICAgKiAjIFJlbWFya3NcbiAgICAgKiBJdCBkb2VzIG5vdCBzd2l0Y2ggZGVib3QgdG8gY29udGV4dCAwLiBCcm93c2VyIENhbGxiYWNrcyBhcmUgbm90IGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZGZXRjaH0gcGFyYW1zXG4gICAgICogQHJldHVybnMgUmVnaXN0ZXJlZERlYm90XG4gICAgICovXG4gICAgZmV0Y2gocGFyYW1zLCBvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2RlYm90LmZldGNoJywgcGFyYW1zLCAocGFyYW1zLCByZXNwb25zZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEFwcERlYm90QnJvd3NlcihvYmosIHBhcmFtcy5yZXF1ZXN0X2RhdGEsIHBhcmFtcy5hcHBfcmVxdWVzdF9pZCwgdGhpcy5jbGllbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2VUeXBlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hBcHBEZWJvdEJyb3dzZXIob2JqLCBwYXJhbXMsIG51bGwsIHRoaXMuY2xpZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtVTlNUQUJMRV0oVU5TVEFCTEUubWQpIEV4ZWN1dGVzIGRlYm90IGFjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICogQ2FsbHMgZGVib3QgZW5naW5lIHJlZmVyZW5jZWQgYnkgZGVib3QgaGFuZGxlIHRvIGV4ZWN1dGUgaW5wdXQgYWN0aW9uLlxuICAgICAqIENhbGxzIERlYm90IEJyb3dzZXIgQ2FsbGJhY2tzIGlmIG5lZWRlZC5cbiAgICAgKlxuICAgICAqICMgUmVtYXJrc1xuICAgICAqIENoYWluIG9mIGFjdGlvbnMgY2FuIGJlIGV4ZWN1dGVkIGlmIGlucHV0IGFjdGlvbiBnZW5lcmF0ZXMgYSBsaXN0IG9mIHN1YmFjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcmFtc09mRXhlY3V0ZX0gcGFyYW1zXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBleGVjdXRlKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCgnZGVib3QuZXhlY3V0ZScsIHBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtVTlNUQUJMRV0oVU5TVEFCTEUubWQpIFNlbmRzIG1lc3NhZ2UgdG8gRGVib3QuXG4gICAgICpcbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFVzZWQgYnkgRGVib3QgQnJvd3NlciB0byBzZW5kIHJlc3BvbnNlIG9uIERpbnRlcmZhY2UgY2FsbCBvciBmcm9tIG90aGVyIERlYm90cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGFyYW1zT2ZTZW5kfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHNlbmQocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KCdkZWJvdC5zZW5kJywgcGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW1VOU1RBQkxFXShVTlNUQUJMRS5tZCkgRGVzdHJveXMgZGVib3QgaGFuZGxlLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBSZW1vdmVzIGhhbmRsZSBmcm9tIENsaWVudCBDb250ZXh0IGFuZCBkcm9wcyBkZWJvdCBlbmdpbmUgcmVmZXJlbmNlZCBieSB0aGF0IGhhbmRsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVnaXN0ZXJlZERlYm90fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHJlbW92ZShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2RlYm90LnJlbW92ZScsIHBhcmFtcyk7XG4gICAgfVxufVxuZXhwb3J0cy5EZWJvdE1vZHVsZSA9IERlYm90TW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlcy5qcy5tYXAiLCJjb25zdCB3b3JrZXJTY3JpcHQgPSBgXG5sZXQgd2FzbTtcblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMikuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gaXNMaWtlTm9uZSh4KSB7XG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIFxcYFxcJHt2YWx9XFxgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gXFxgXCJcXCR7dmFsfVwiXFxgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcXGBTeW1ib2woXFwke2Rlc2NyaXB0aW9ufSlcXGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcXGBGdW5jdGlvbihcXCR7bmFtZX0pXFxgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcXFxbb2JqZWN0IChbXlxcXFxdXSspXFxcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgXFxgdmFsXFxgLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlcnJvcnNcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFxcYFxcJHt2YWwubmFtZX06IFxcJHt2YWwubWVzc2FnZX1cXFxcblxcJHt2YWwuc3RhY2t9XFxgO1xuICAgIH1cbiAgICAvLyBUT0RPIHdlIGNvdWxkIHRlc3QgZm9yIG1vcmUgdGhpbmdzIGhlcmUsIGxpa2UgXFxgU2V0XFxgcyBhbmQgXFxgTWFwXFxgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCBkdG9yLCBmKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IGE6IGFyZzAsIGI6IGFyZzEsIGNudDogMSB9O1xuICAgIGNvbnN0IHJlYWwgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBGaXJzdCB1cCB3aXRoIGEgY2xvc3VyZSB3ZSBpbmNyZW1lbnQgdGhlIGludGVybmFsIHJlZmVyZW5jZVxuICAgICAgICAvLyBjb3VudC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIFJ1c3QgY2xvc3VyZSBlbnZpcm9ubWVudCB3b24ndFxuICAgICAgICAvLyBiZSBkZWFsbG9jYXRlZCB3aGlsZSB3ZSdyZSBpbnZva2luZyBpdC5cbiAgICAgICAgc3RhdGUuY250Kys7XG4gICAgICAgIGNvbnN0IGEgPSBzdGF0ZS5hO1xuICAgICAgICBzdGF0ZS5hID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmKGEsIHN0YXRlLmIsIC4uLmFyZ3MpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKC0tc3RhdGUuY250ID09PSAwKSB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzIuZ2V0KGR0b3IpKGEsIHN0YXRlLmIpO1xuICAgICAgICAgICAgZWxzZSBzdGF0ZS5hID0gYTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhbC5vcmlnaW5hbCA9IHN0YXRlO1xuICAgIHJldHVybiByZWFsO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8yNihhcmcwLCBhcmcxKSB7XG4gICAgd2FzbS5fZHluX2NvcmVfX29wc19fZnVuY3Rpb25fX0ZuTXV0X19fX19PdXRwdXRfX19SX2FzX3dhc21fYmluZGdlbl9fY2xvc3VyZV9fV2FzbUNsb3N1cmVfX19kZXNjcmliZV9faW52b2tlX19oOGRlZDEzMjdkNTc2MWMyNShhcmcwLCBhcmcxKTtcbn1cblxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8yOShhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgd2FzbS5fZHluX2NvcmVfX29wc19fZnVuY3Rpb25fX0ZuTXV0X19BX19fX091dHB1dF9fX1JfYXNfd2FzbV9iaW5kZ2VuX19jbG9zdXJlX19XYXNtQ2xvc3VyZV9fX2Rlc2NyaWJlX19pbnZva2VfX2hhZDM4NDM1Mjc1MDEzNThlKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMikpO1xufVxuXG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzMyKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB3YXNtLl9keW5fY29yZV9fb3BzX19mdW5jdGlvbl9fRm5NdXRfX0FfX19fT3V0cHV0X19fUl9hc193YXNtX2JpbmRnZW5fX2Nsb3N1cmVfX1dhc21DbG9zdXJlX19fZGVzY3JpYmVfX2ludm9rZV9faDQ1OTk4OTJlM2UwNjg2ODkoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSk7XG59XG5cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfMzUoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHdhc20uX2R5bl9jb3JlX19vcHNfX2Z1bmN0aW9uX19Gbk11dF9fQV9fX19PdXRwdXRfX19SX2FzX3dhc21fYmluZGdlbl9fY2xvc3VyZV9fV2FzbUNsb3N1cmVfX19kZXNjcmliZV9faW52b2tlX19oOTk0MGE2MzNiZTM5ZTQ5MShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpKTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBjb25maWdfanNvblxuKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmZ1bmN0aW9uIGNvcmVfY3JlYXRlX2NvbnRleHQoY29uZmlnX2pzb24pIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKGNvbmZpZ19qc29uLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB3YXNtLmNvcmVfY3JlYXRlX2NvbnRleHQoOCwgcHRyMCwgbGVuMCk7XG4gICAgICAgIHZhciByMCA9IGdldEludDMyTWVtb3J5MCgpWzggLyA0ICsgMF07XG4gICAgICAgIHZhciByMSA9IGdldEludDMyTWVtb3J5MCgpWzggLyA0ICsgMV07XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocjAsIHIxKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShyMCwgcjEpO1xuICAgIH1cbn1cblxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4qL1xuZnVuY3Rpb24gY29yZV9kZXN0cm95X2NvbnRleHQoY29udGV4dCkge1xuICAgIHdhc20uY29yZV9kZXN0cm95X2NvbnRleHQoY29udGV4dCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25fbmFtZVxuKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zX2pzb25cbiogQHBhcmFtIHtudW1iZXJ9IHJlcXVlc3RfaWRcbiovXG5mdW5jdGlvbiBjb3JlX3JlcXVlc3QoY29udGV4dCwgZnVuY3Rpb25fbmFtZSwgcGFyYW1zX2pzb24sIHJlcXVlc3RfaWQpIHtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKGZ1bmN0aW9uX25hbWUsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICB2YXIgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20wKHBhcmFtc19qc29uLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgd2FzbS5jb3JlX3JlcXVlc3QoY29udGV4dCwgcHRyMCwgbGVuMCwgcHRyMSwgbGVuMSwgcmVxdWVzdF9pZCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGFkZEhlYXBPYmplY3QoZSkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyAxLCBwdHIgLyAxICsgbGVuKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZChtb2R1bGUsIGltcG9ydHMpIHtcbiAgICBpZiAodHlwZW9mIFJlc3BvbnNlID09PSAnZnVuY3Rpb24nICYmIG1vZHVsZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcobW9kdWxlLCBpbXBvcnRzKTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9ICdhcHBsaWNhdGlvbi93YXNtJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXGBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ1xcYCBmYWlsZWQgYmVjYXVzZSB5b3VyIHNlcnZlciBkb2VzIG5vdCBzZXJ2ZSB3YXNtIHdpdGggXFxgYXBwbGljYXRpb24vd2FzbVxcYCBNSU1FIHR5cGUuIEZhbGxpbmcgYmFjayB0byBcXGBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVxcYCB3aGljaCBpcyBzbG93ZXIuIE9yaWdpbmFsIGVycm9yOlxcXFxuXCIsIGUpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IG1vZHVsZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICByZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydHMpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKG1vZHVsZSwgaW1wb3J0cyk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgV2ViQXNzZW1ibHkuSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGluc3RhbmNlLCBtb2R1bGUgfTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KGlucHV0KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcpIHsgICAgfVxuICAgIGNvbnN0IGltcG9ydHMgPSB7fTtcbiAgICBpbXBvcnRzLndiZyA9IHt9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2NvcmVyZXNwb25zZWhhbmRsZXJfYmE0OGVhZTMyYjFlOTI0OCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvcmVfcmVzcG9uc2VfaGFuZGxlcihhcmcwID4+PiAwLCBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMiksIGFyZzMgPj4+IDAsIGFyZzQgIT09IDApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoYXJnMSwgYXJnMik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX25ldzBfOGQ4MTc5MTVjZDg5MGJkOCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmV0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2dldFRpbWVfOGU3YTA1Nzg1OThlNTAzOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdGFrZU9iamVjdChhcmcwKTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9NT0RVTEVfNDUyYjQ2ODBlODYxNGM4MSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmV0ID0gbW9kdWxlO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2VsZl9kMWI1OGRiYWI2OWQ1YmIxID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193Ymdfd2luZG93X2RlNDQ1Y2IxODgxOWFkNGIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJldCA9IHdpbmRvdy53aW5kb3c7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmdfZ2xvYmFsVGhpc182OGFmY2IwZDk4ZjAxMTJkID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBnbG9iYWxUaGlzLmdsb2JhbFRoaXM7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmdfZ2xvYmFsX2JhZWQ0ZTRmYTg1MGMwZDAgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJldCA9IGdsb2JhbC5nbG9iYWw7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmluZGdlbl9pc191bmRlZmluZWQgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX25ld25vYXJnc19kYjA1ODdmYTcxMmY5YWNjID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgcmV0ID0gbmV3IEZ1bmN0aW9uKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19jYWxsXzc5Y2EwZDQzNTQ5NWE4M2EgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSkpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH0pO1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3NldF9lZGU0MzRkOTEwNzJiZDVmID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB2YXIgcmV0ID0gUmVmbGVjdC5zZXQoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2VsZl84NmI0YjEzMzkyYzdhZjU2ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmdfcmVxdWlyZV9mNTUyMWE1Yjg1YWQyNTQyID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnJlcXVpcmUoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2NyeXB0b19iOGM5MmVhYWMyM2QwZDgwID0gZnVuY3Rpb24oYXJnMCkge1xuICAgICAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNyeXB0bztcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX21zQ3J5cHRvXzlhZDY2NzczMjFhMDhkZDggPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubXNDcnlwdG87XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19nZXRSYW5kb21WYWx1ZXNfZGQyN2U2YjA2NTJiMzIzNiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRSYW5kb21WYWx1ZXM7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19uZXd3aXRobGVuZ3RoXzMwMTUyZGNmOTUzYzA3NmQgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShhcmcwID4+PiAwKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3N1YmFycmF5XzM3ZjQ0MzZlMDgyYzY4MjcgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuc3ViYXJyYXkoYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19nZXRSYW5kb21WYWx1ZXNfZTU3YzliNzVkZGVhZDA2NSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgZ2V0T2JqZWN0KGFyZzApLmdldFJhbmRvbVZhbHVlcyhnZXRPYmplY3QoYXJnMSkpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfbGVuZ3RoXzNhY2FlM2E1MzM3ZTAyNTcgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmluZGdlbl9tZW1vcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ubWVtb3J5O1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfYnVmZmVyXzQ0ODU1YWVmYTgzZWE0OGMgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfbmV3XzA0NzkzZDJjMDliYTA2MGYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2V0X2ZkYWVmNTY1M2IyYzE0MDggPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3JhbmRvbUZpbGxTeW5jX2QyYmE1MzE2MGFlYzZhYmEgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIGdldE9iamVjdChhcmcwKS5yYW5kb21GaWxsU3luYyhnZXRBcnJheVU4RnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX25ld18xN2EwOGI4NzZjNGRlZGM5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX3N0cmluZ19uZXcgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19uZXd3aXRoc3RyYW5kaW5pdF9mODEzNWRhMDBhZDJlNzg3ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFJlcXVlc3QoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH0pO1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2hlYWRlcnNfNWIzYjQ4ZGM3OWUyYjhlNyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5oZWFkZXJzO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2V0X2Y3OTYyZmNmMjA2YTMyOGIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0KSB7XG4gICAgICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpLCBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMywgYXJnNCkpO1xuICAgIH0pO1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2ZldGNoX2FhZDZhY2Q5MGZiM2QzYWQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuZmV0Y2goZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2luc3RhbmNlb2ZfUmVzcG9uc2VfZTI0OTk5ZjM3NzU4ODhmYiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfdGV4dF9lODZjNzdhN2FmNmQ4NzM5ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCkge1xuICAgICAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRleHQoKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9KTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19zdGF0dXNfYjk2MDg1YTkxOGFmYWNhOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5zdGF0dXM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ191cmxfNjgxYjMzOWNiODcxYmFiZiA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcxKS51cmw7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMDtcbiAgICAgICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjA7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19zZXRUaW1lb3V0X2RjM2UyNTk5NWYzZjYwNjkgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuc2V0VGltZW91dChnZXRPYmplY3QoYXJnMSksIGFyZzIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3NlbmRfYzhhY2JlMTk0NmI2NjQ4MCA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICAgICAgZ2V0T2JqZWN0KGFyZzApLnNlbmQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICB9KTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19kYXRhXzA4MjQ1NDg5MGM4OWE0MjEgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuZGF0YTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5faXNfc3RyaW5nID0gZnVuY3Rpb24oYXJnMCkge1xuICAgICAgICB2YXIgcmV0ID0gdHlwZW9mKGdldE9iamVjdChhcmcwKSkgPT09ICdzdHJpbmcnO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfbmV3d2l0aHN0cl85NDM0MDYwNWIwNTFjOWZmID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFdlYlNvY2tldChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSksIGdldFN0cmluZ0Zyb21XYXNtMChhcmcyLCBhcmczKSk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmdfbmV3X2ZkODE4NmY3NTZiZjRkMTkgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgV2ViU29ja2V0KGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2V0b25tZXNzYWdlXzEzNDg1MmFlNGI5ZTExNzUgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIGdldE9iamVjdChhcmcwKS5vbm1lc3NhZ2UgPSBnZXRPYmplY3QoYXJnMSk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX2NiX2ZvcmdldCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdGFrZU9iamVjdChhcmcwKTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3NldG9ub3Blbl84MzFiOGFkMTEyYzAzN2MwID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICBnZXRPYmplY3QoYXJnMCkub25vcGVuID0gZ2V0T2JqZWN0KGFyZzEpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc2V0b25lcnJvcl8yMzdjZmUzM2VjYTRjMTNhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICBnZXRPYmplY3QoYXJnMCkub25lcnJvciA9IGdldE9iamVjdChhcmcxKTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2dldFRpbWV6b25lT2Zmc2V0X2Q0ZGRjZmZkNDIzMzBlOTQgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5fY2JfZHJvcCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgY29uc3Qgb2JqID0gdGFrZU9iamVjdChhcmcwKS5vcmlnaW5hbDtcbiAgICAgICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgICAgICBvYmouYSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19pbnN0YW5jZW9mX0Vycm9yX2FmMmIxNmY5NGYwMjk0OTYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBFcnJvcjtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5fanNvbl9zZXJpYWxpemUgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGdldE9iamVjdChhcmcxKTtcbiAgICAgICAgdmFyIHJldCA9IEpTT04uc3RyaW5naWZ5KG9iaiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9iaik7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMDtcbiAgICAgICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjA7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diZ19tZXNzYWdlXzU0MDA2MGZlNWE1MTkyNDUgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5fc3RyaW5nX2dldCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gZ2V0T2JqZWN0KGFyZzEpO1xuICAgICAgICB2YXIgcmV0ID0gdHlwZW9mKG9iaikgPT09ICdzdHJpbmcnID8gb2JqIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcHRyMCA9IGlzTGlrZU5vbmUocmV0KSA/IDAgOiBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5fZGVidWdfc3RyaW5nID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgcmV0ID0gZGVidWdTdHJpbmcoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICAgICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfdGhlbl80NWM4ODdhNTBhMjI5Mjc0ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRoZW4oZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3RoZW5fOWQxODk0MWRhMjFmNzEwNCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX3Jlc29sdmVfNTdjYmU2YWIwYjNiNjBhNyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IFByb21pc2UucmVzb2x2ZShnZXRPYmplY3QoYXJnMCkpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmdfY2xvc2VfMzEyZDQ2NTRmN2M4NTkyZiA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgZ2V0T2JqZWN0KGFyZzApLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgaW1wb3J0cy53YmcuX193YmdfaW5zdGFuY2VvZl9XaW5kb3dfMGU4ZGVjZDBhNjE3OTY5OSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICAgICAgdmFyIHJldCA9IHRydWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjMyNzggPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIHZhciByZXQgPSBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCAyNjksIF9fd2JnX2FkYXB0ZXJfMjYpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXIzODE5ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB2YXIgcmV0ID0gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgMTA2NCwgX193YmdfYWRhcHRlcl8yOSk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfTtcbiAgICBpbXBvcnRzLndiZy5fX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjM4MTggPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIHZhciByZXQgPSBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCAyNzIsIF9fd2JnX2FkYXB0ZXJfMzIpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXIzODIwID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB2YXIgcmV0ID0gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgMjY2LCBfX3diZ19hZGFwdGVyXzM1KTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiBSZXF1ZXN0ID09PSAnZnVuY3Rpb24nICYmIGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkgfHwgKHR5cGVvZiBVUkwgPT09ICdmdW5jdGlvbicgJiYgaW5wdXQgaW5zdGFuY2VvZiBVUkwpKSB7XG4gICAgICAgIGlucHV0ID0gZmV0Y2goaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaW5zdGFuY2UsIG1vZHVsZSB9ID0gYXdhaXQgbG9hZChhd2FpdCBpbnB1dCwgaW1wb3J0cyk7XG5cbiAgICB3YXNtID0gaW5zdGFuY2UuZXhwb3J0cztcbiAgICBpbml0Ll9fd2JpbmRnZW5fd2FzbV9tb2R1bGUgPSBtb2R1bGU7XG5cbiAgICByZXR1cm4gd2FzbTtcbn1cblxuXG5cblxuZnVuY3Rpb24gY29yZV9yZXNwb25zZV9oYW5kbGVyKHJlcXVlc3RfaWQsIHBhcmFtc19qc29uLCByZXNwb25zZV90eXBlLCBmaW5pc2hlZCkge1xuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0X2lkLFxuICAgICAgICBwYXJhbXNKc29uOiBwYXJhbXNfanNvbixcbiAgICAgICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZV90eXBlLFxuICAgICAgICBmaW5pc2hlZCxcbiAgICB9KTtcbn1cblxuc2VsZi5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICBjYXNlICdpbml0JzpcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGluaXQobWVzc2FnZS53YXNtTW9kdWxlKTtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXQnIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgICBicmVhaztcblxuICAgIGNhc2UgJ2NyZWF0ZUNvbnRleHQnOlxuICAgICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnY3JlYXRlQ29udGV4dCcsXG4gICAgICAgICAgICByZXN1bHQ6IGNvcmVfY3JlYXRlX2NvbnRleHQobWVzc2FnZS5jb25maWdKc29uKSxcbiAgICAgICAgICAgIHJlcXVlc3RJZDogbWVzc2FnZS5yZXF1ZXN0SWQsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgIGNhc2UgJ2Rlc3Ryb3lDb250ZXh0JzpcbiAgICAgICAgY29yZV9kZXN0cm95X2NvbnRleHQobWVzc2FnZS5jb250ZXh0KTtcbiAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2Rlc3Ryb3lDb250ZXh0J1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZXF1ZXN0JzpcbiAgICAgICAgY29yZV9yZXF1ZXN0KFxuICAgICAgICAgICAgbWVzc2FnZS5jb250ZXh0LFxuICAgICAgICAgICAgbWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLmZ1bmN0aW9uUGFyYW1zSnNvbixcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdElkLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG59O1xuYDtcblxuXG5sZXQgb3B0aW9ucyA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaWJXZWJTZXR1cChsaWJPcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGxpYk9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaWJXZWIoKSB7XG4gICAgZnVuY3Rpb24gZGVidWdMb2cobWVzc2FnZSkge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnTG9nKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRlYnVnTG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd29ya2VyQmxvYiA9IG5ldyBCbG9iKFxuICAgICAgICBbd29ya2VyU2NyaXB0XSxcbiAgICAgICAgeyB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcgfVxuICAgICk7XG4gICAgY29uc3Qgd29ya2VyVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh3b3JrZXJCbG9iKTtcbiAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlclVybCk7XG5cblxuICAgIGxldCBuZXh0Q3JlYXRlQ29udGV4dFJlcXVlc3RJZCA9IDE7XG4gICAgY29uc3QgY3JlYXRlQ29udGV4dFJlcXVlc3RzID0gbmV3IE1hcCgpO1xuICAgIGxldCBpbml0Q29tcGxldGUgPSBmYWxzZTtcblxuICAgIGxldCByZXNwb25zZUhhbmRsZXIgPSBudWxsO1xuICAgIGNvbnN0IGxpYnJhcnkgPSB7XG4gICAgICAgIHNldFJlc3BvbnNlSGFuZGxlcjogKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUNvbnRleHQ6IChjb25maWdKc29uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0SWQgPSBuZXh0Q3JlYXRlQ29udGV4dFJlcXVlc3RJZDtcbiAgICAgICAgICAgICAgICBuZXh0Q3JlYXRlQ29udGV4dFJlcXVlc3RJZCArPSAxO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRleHRSZXF1ZXN0cy5zZXQocmVxdWVzdElkLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ0pzb24sXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoaW5pdENvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY3JlYXRlQ29udGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdKc29uLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveUNvbnRleHQ6IChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkZXN0cm95Q29udGV4dCcsXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmRSZXF1ZXN0OiAoY29udGV4dCwgcmVxdWVzdElkLCBmdW5jdGlvbk5hbWUsIGZ1bmN0aW9uUGFyYW1zSnNvbikgPT4ge1xuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uUGFyYW1zSnNvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXIub25tZXNzYWdlID0gKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXZ0LmRhdGE7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgaW5pdENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3JlcXVlc3RJZCwgcmVxdWVzdF0gb2YgY3JlYXRlQ29udGV4dFJlcXVlc3RzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjcmVhdGVDb250ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgICAgICAgICAgICBjb25maWdKc29uOiByZXF1ZXN0LmNvbmZpZ0pzb24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3JlYXRlQ29udGV4dCc6XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gY3JlYXRlQ29udGV4dFJlcXVlc3RzLmdldChtZXNzYWdlLnJlcXVlc3RJZCk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRleHRSZXF1ZXN0cy5kZWxldGUobWVzc2FnZS5yZXF1ZXN0SWQpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGVzdHJveUNvbnRleHQnOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zSnNvbiA9IG1lc3NhZ2UucGFyYW1zSnNvbjtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zSnNvbi5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zSnNvbiA9IHBhcmFtc0pzb24uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZUhhbmRsZXIobWVzc2FnZS5yZXF1ZXN0SWQsIHBhcmFtc0pzb24sIG1lc3NhZ2UucmVzcG9uc2VUeXBlLCBtZXNzYWdlLmZpbmlzaGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd29ya2VyLm9uZXJyb3IgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBmcm9tIFdlYiBXb3JrZXI6ICR7ZXZ0Lm1lc3NhZ2V9YCk7XG4gICAgfTtcblxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgd2FzbU1vZHVsZTtcbiAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGZldGNoKChvcHRpb25zICYmIG9wdGlvbnMuYmluYXJ5VVJMKSB8fCAnL3RvbmNsaWVudC53YXNtJyk7XG4gICAgICAgIGlmIChXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZygnY29tcGlsZVN0cmVhbWluZyBiaW5hcnknKTtcbiAgICAgICAgICAgIHdhc21Nb2R1bGUgPSBhd2FpdCBXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nKGZldGNoZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVidWdMb2coJ2NvbXBpbGUgYmluYXJ5Jyk7XG4gICAgICAgICAgICB3YXNtTW9kdWxlID0gYXdhaXQgV2ViQXNzZW1ibHkuY29tcGlsZShhd2FpdCAoYXdhaXQgZmV0Y2hlZCkuYXJyYXlCdWZmZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbml0JyxcbiAgICAgICAgICAgIHdhc21Nb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBkZWJ1Z0xvZyhgY29tcGlsZSB0aW1lICR7RGF0ZS5ub3coKSAtIGV9YCk7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGlicmFyeSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQWJpQ29udHJhY3QsIFRvbkNsaWVudCB9IGZyb20gJ0B0b25jbGllbnQvY29yZSc7XHJcbmltcG9ydCB7IGxpYldlYiB9IGZyb20gJ0B0b25jbGllbnQvbGliLXdlYic7XHJcbmltcG9ydCB7Q29udGVzdENvbnRyYWN0fSBmcm9tIFwiLi9Db250ZXN0Q29udHJhY3RcIjtcclxuXHJcblRvbkNsaWVudC51c2VCaW5hcnlMaWJyYXJ5KGxpYldlYik7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgVG9uQ2xpZW50KHtcclxuICAgIG5ldHdvcms6IHsgXHJcbiAgICAgICAgZW5kcG9pbnRzOiBbJ21haW4udG9uLmRldiddIFxyXG4gICAgfSBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3M9XCIwOjUwNTQ3NmQ5NThhNjY5OWJjZDE4MjRkZTc2N2UxMWU1M2E1OWU0Mjc2MDhhMWQ0NWI4MGQ3NjQyZDlkMjkzNzVcIjtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYXdhaXQgVG9uQ2xpZW50LmRlZmF1bHQuY2xpZW50LnZlcnNpb24oKSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LmNvbnRyYWN0cy5ydW5Mb2NhbCh7XHJcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdnZXRDb250ZXN0SW5mbycsXHJcbiAgICAgICAgYWJpOiBDb250ZXN0Q29udHJhY3QsXHJcbiAgICAgICAgaW5wdXQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQuZGVjb2RlZC5vdXRwdXQpKTtcclxuXHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9