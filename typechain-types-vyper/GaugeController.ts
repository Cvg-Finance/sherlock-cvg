/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
    BaseContract,
    BigNumberish,
    BytesLike,
    FunctionFragment,
    Result,
    Interface,
    EventFragment,
    AddressLike,
    ContractRunner,
    ContractMethod,
    Listener,
} from "ethers";
import type {TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod} from "./common";

export interface GaugeControllerInterface extends Interface {
    getFunction(
        nameOrSignature:
            | "initialize"
            | "set_lock"
            | "toggle_locker"
            | "toggle_vote_pause"
            | "toggle_votes_pause"
            | "commit_transfer_ownership"
            | "apply_transfer_ownership"
            | "gauge_types"
            | "add_gauge"
            | "checkpoint"
            | "checkpoint_gauge"
            | "gauge_relative_weight"
            | "gauge_relative_weight_write"
            | "gauge_relative_weight_writes"
            | "add_type"
            | "change_type_weight"
            | "change_gauge_weight"
            | "kill_gauge"
            | "multi_vote"
            | "simple_vote"
            | "get_gauge_weight_normal"
            | "get_gauge_weight"
            | "get_gauge_weight_sum"
            | "get_gauge_weights"
            | "get_gauge_weights_and_types"
            | "get_nft_datas"
            | "get_type_weight"
            | "get_total_weight"
            | "get_weights_sum_per_type"
            | "admin"
            | "future_admin"
            | "control_tower"
            | "n_gauge_types"
            | "n_gauges"
            | "gauge_type_names"
            | "gauges"
            | "vote_nft_slopes"
            | "vote_nft_power"
            | "last_nft_vote"
            | "points_weight"
            | "time_weight"
            | "points_sum"
            | "time_sum"
            | "points_total"
            | "time_total"
            | "points_type_weight"
            | "time_type_weight"
            | "isLock"
            | "lockers"
            | "killed_gauges"
            | "vote_activated"
            | "initialized"
    ): FunctionFragment;

    getEvent(
        nameOrSignatureOrTopic: "CommitOwnership" | "ApplyOwnership" | "AddType" | "NewTypeWeight" | "NewGaugeWeight" | "VoteForGauge" | "NewGauge"
    ): EventFragment;

    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "set_lock", values: [boolean]): string;
    encodeFunctionData(functionFragment: "toggle_locker", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "toggle_vote_pause", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "toggle_votes_pause", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "commit_transfer_ownership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "apply_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "gauge_types", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "add_gauge", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoint_gauge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "gauge_relative_weight", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gauge_relative_weight_write", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "gauge_relative_weight_writes", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "add_type", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "change_type_weight", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "change_gauge_weight", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "kill_gauge", values: [AddressLike]): string;
    encodeFunctionData(
        functionFragment: "multi_vote",
        values: [
            {
                tokenId: BigNumberish;
                votes: {gauge_address: AddressLike; weight: BigNumberish}[];
            }[]
        ]
    ): string;
    encodeFunctionData(functionFragment: "simple_vote", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_gauge_weight_normal", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "get_gauge_weight", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "get_gauge_weight_sum", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "get_gauge_weights", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "get_gauge_weights_and_types", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "get_nft_datas", values: [{tokenId: BigNumberish; gaugeAddresses: AddressLike[]}[]]): string;
    encodeFunctionData(functionFragment: "get_type_weight", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_total_weight", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_weights_sum_per_type", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "control_tower", values?: undefined): string;
    encodeFunctionData(functionFragment: "n_gauge_types", values?: undefined): string;
    encodeFunctionData(functionFragment: "n_gauges", values?: undefined): string;
    encodeFunctionData(functionFragment: "gauge_type_names", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gauges", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vote_nft_slopes", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "vote_nft_power", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "last_nft_vote", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "points_weight", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "time_weight", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "points_sum", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "time_sum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "points_total", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "time_total", values?: undefined): string;
    encodeFunctionData(functionFragment: "points_type_weight", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "time_type_weight", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "killed_gauges", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "vote_activated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;

    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggle_locker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggle_vote_pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggle_votes_pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_types", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_gauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint_gauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_relative_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_relative_weight_write", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_relative_weight_writes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_type", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "change_type_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "change_gauge_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill_gauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multi_vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simple_vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge_weight_normal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge_weight_sum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge_weights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge_weights_and_types", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_nft_datas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_type_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_total_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_weights_sum_per_type", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "control_tower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "n_gauge_types", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "n_gauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_type_names", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote_nft_slopes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote_nft_power", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last_nft_vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "points_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "points_sum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_sum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "points_total", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_total", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "points_type_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_type_weight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "killed_gauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote_activated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
}

export namespace CommitOwnershipEvent {
    export type InputTuple = [admin: AddressLike];
    export type OutputTuple = [admin: string];
    export interface OutputObject {
        admin: string;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApplyOwnershipEvent {
    export type InputTuple = [admin: AddressLike];
    export type OutputTuple = [admin: string];
    export interface OutputObject {
        admin: string;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddTypeEvent {
    export type InputTuple = [name: string, type_id: BigNumberish];
    export type OutputTuple = [name: string, type_id: bigint];
    export interface OutputObject {
        name: string;
        type_id: bigint;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewTypeWeightEvent {
    export type InputTuple = [type_id: BigNumberish, time: BigNumberish, weight: BigNumberish, total_weight: BigNumberish];
    export type OutputTuple = [type_id: bigint, time: bigint, weight: bigint, total_weight: bigint];
    export interface OutputObject {
        type_id: bigint;
        time: bigint;
        weight: bigint;
        total_weight: bigint;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewGaugeWeightEvent {
    export type InputTuple = [gauge_address: AddressLike, time: BigNumberish, weight: BigNumberish, total_weight: BigNumberish];
    export type OutputTuple = [gauge_address: string, time: bigint, weight: bigint, total_weight: bigint];
    export interface OutputObject {
        gauge_address: string;
        time: bigint;
        weight: bigint;
        total_weight: bigint;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteForGaugeEvent {
    export type InputTuple = [time: BigNumberish, tokenId: BigNumberish, gauge_addr: AddressLike, weight: BigNumberish];
    export type OutputTuple = [time: bigint, tokenId: bigint, gauge_addr: string, weight: bigint];
    export interface OutputObject {
        time: bigint;
        tokenId: bigint;
        gauge_addr: string;
        weight: bigint;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewGaugeEvent {
    export type InputTuple = [addr: AddressLike, gauge_type: BigNumberish, weight: BigNumberish];
    export type OutputTuple = [addr: string, gauge_type: bigint, weight: bigint];
    export interface OutputObject {
        addr: string;
        gauge_type: bigint;
        weight: bigint;
    }
    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export interface GaugeController extends BaseContract {
    connect(runner?: ContractRunner | null): GaugeController;
    waitForDeployment(): Promise<this>;

    interface: GaugeControllerInterface;

    queryFilter<TCEvent extends TypedContractEvent>(
        event: TCEvent,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(
        filter: TypedDeferredTopicFilter<TCEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TypedEventLog<TCEvent>>>;

    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

    initialize: TypedContractMethod<[setControlTower: AddressLike], [void], "nonpayable">;

    set_lock: TypedContractMethod<[isLock: boolean], [void], "nonpayable">;

    toggle_locker: TypedContractMethod<[lockerAddress: AddressLike], [void], "nonpayable">;

    toggle_vote_pause: TypedContractMethod<[gaugeAddress: AddressLike], [void], "nonpayable">;

    toggle_votes_pause: TypedContractMethod<[gaugeAddresses: AddressLike[]], [void], "nonpayable">;

    commit_transfer_ownership: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

    apply_transfer_ownership: TypedContractMethod<[], [void], "nonpayable">;

    gauge_types: TypedContractMethod<[_addr: AddressLike], [bigint], "view">;

    add_gauge: TypedContractMethod<[addr: AddressLike, gauge_type: BigNumberish, weight: BigNumberish], [void], "nonpayable">;

    checkpoint: TypedContractMethod<[], [void], "nonpayable">;

    checkpoint_gauge: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

    gauge_relative_weight: TypedContractMethod<[addr: AddressLike, time: BigNumberish], [bigint], "view">;

    gauge_relative_weight_write: TypedContractMethod<[addr: AddressLike], [bigint], "nonpayable">;

    gauge_relative_weight_writes: TypedContractMethod<[addrs: AddressLike[]], [void], "nonpayable">;

    add_type: TypedContractMethod<[_name: string, weight: BigNumberish], [void], "nonpayable">;

    change_type_weight: TypedContractMethod<[type_id: BigNumberish, weight: BigNumberish], [void], "nonpayable">;

    change_gauge_weight: TypedContractMethod<[addr: AddressLike, weight: BigNumberish], [void], "nonpayable">;

    kill_gauge: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

    multi_vote: TypedContractMethod<
        [
            param: {
                tokenId: BigNumberish;
                votes: {gauge_address: AddressLike; weight: BigNumberish}[];
            }[]
        ],
        [void],
        "nonpayable"
    >;

    simple_vote: TypedContractMethod<[tokenId: BigNumberish, _gauge_addr: AddressLike, _user_weight: BigNumberish], [void], "nonpayable">;

    get_gauge_weight_normal: TypedContractMethod<[addr: AddressLike], [bigint], "view">;

    get_gauge_weight: TypedContractMethod<[addr: AddressLike], [bigint], "view">;

    get_gauge_weight_sum: TypedContractMethod<[addrs: AddressLike[]], [bigint], "view">;

    get_gauge_weights: TypedContractMethod<[addrs: AddressLike[]], [bigint[]], "view">;

    get_gauge_weights_and_types: TypedContractMethod<
        [addrs: AddressLike[]],
        [[bigint, bigint, bigint] & {weight: bigint; type_weight: bigint; gauge_type: bigint}[]],
        "view"
    >;

    get_nft_datas: TypedContractMethod<
        [inputParams: {tokenId: BigNumberish; gaugeAddresses: AddressLike[]}[]],
        [
            {
                tokenId: bigint;
                nft_power: bigint;
                balanceOf: bigint;
                gaugeData: {
                    gaugeAddress: string;
                    nft_slopes: {
                        slope: bigint;
                        power: bigint;
                        end: bigint;
                    };
                    last_nft_vote: bigint;
                }[];
            }[]
        ],
        "view"
    >;

    get_type_weight: TypedContractMethod<[type_id: BigNumberish], [bigint], "view">;

    get_total_weight: TypedContractMethod<[], [bigint], "view">;

    get_weights_sum_per_type: TypedContractMethod<[type_id: BigNumberish], [bigint], "view">;

    admin: TypedContractMethod<[], [string], "view">;

    future_admin: TypedContractMethod<[], [string], "view">;

    control_tower: TypedContractMethod<[], [string], "view">;

    n_gauge_types: TypedContractMethod<[], [bigint], "view">;

    n_gauges: TypedContractMethod<[], [bigint], "view">;

    gauge_type_names: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

    gauges: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

    vote_nft_slopes: TypedContractMethod<
        [arg0: BigNumberish, arg1: AddressLike],
        [[bigint, bigint, bigint] & {slope: bigint; power: bigint; end: bigint}],
        "view"
    >;

    vote_nft_power: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

    last_nft_vote: TypedContractMethod<[arg0: BigNumberish, arg1: AddressLike], [bigint], "view">;

    points_weight: TypedContractMethod<[arg0: AddressLike, arg1: BigNumberish], [[bigint, bigint] & {bias: bigint; slope: bigint}], "view">;

    time_weight: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

    points_sum: TypedContractMethod<[arg0: BigNumberish, arg1: BigNumberish], [[bigint, bigint] & {bias: bigint; slope: bigint}], "view">;

    time_sum: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

    points_total: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

    time_total: TypedContractMethod<[], [bigint], "view">;

    points_type_weight: TypedContractMethod<[arg0: BigNumberish, arg1: BigNumberish], [bigint], "view">;

    time_type_weight: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

    isLock: TypedContractMethod<[], [boolean], "view">;

    lockers: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

    killed_gauges: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

    vote_activated: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

    initialized: TypedContractMethod<[], [boolean], "view">;

    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[setControlTower: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "set_lock"): TypedContractMethod<[isLock: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "toggle_locker"): TypedContractMethod<[lockerAddress: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "toggle_vote_pause"): TypedContractMethod<[gaugeAddress: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "toggle_votes_pause"): TypedContractMethod<[gaugeAddresses: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "commit_transfer_ownership"): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "apply_transfer_ownership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "gauge_types"): TypedContractMethod<[_addr: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "add_gauge"): TypedContractMethod<[addr: AddressLike, gauge_type: BigNumberish, weight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "checkpoint"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "checkpoint_gauge"): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "gauge_relative_weight"): TypedContractMethod<[addr: AddressLike, time: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "gauge_relative_weight_write"): TypedContractMethod<[addr: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "gauge_relative_weight_writes"): TypedContractMethod<[addrs: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "add_type"): TypedContractMethod<[_name: string, weight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "change_type_weight"): TypedContractMethod<[type_id: BigNumberish, weight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "change_gauge_weight"): TypedContractMethod<[addr: AddressLike, weight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "kill_gauge"): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "multi_vote"): TypedContractMethod<
        [
            param: {
                tokenId: BigNumberish;
                votes: {gauge_address: AddressLike; weight: BigNumberish}[];
            }[]
        ],
        [void],
        "nonpayable"
    >;
    getFunction(
        nameOrSignature: "simple_vote"
    ): TypedContractMethod<[tokenId: BigNumberish, _gauge_addr: AddressLike, _user_weight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "get_gauge_weight_normal"): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "get_gauge_weight"): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "get_gauge_weight_sum"): TypedContractMethod<[addrs: AddressLike[]], [bigint], "view">;
    getFunction(nameOrSignature: "get_gauge_weights"): TypedContractMethod<[addrs: AddressLike[]], [bigint[]], "view">;
    getFunction(
        nameOrSignature: "get_gauge_weights_and_types"
    ): TypedContractMethod<[addrs: AddressLike[]], [[bigint, bigint, bigint] & {weight: bigint; type_weight: bigint; gauge_type: bigint}[]], "view">;
    getFunction(nameOrSignature: "get_nft_datas"): TypedContractMethod<
        [inputParams: {tokenId: BigNumberish; gaugeAddresses: AddressLike[]}[]],
        [
            {
                tokenId: bigint;
                nft_power: bigint;
                balanceOf: bigint;
                gaugeData: {
                    gaugeAddress: string;
                    nft_slopes: {
                        slope: bigint;
                        power: bigint;
                        end: bigint;
                    };
                    last_nft_vote: bigint;
                }[];
            }[]
        ],
        "view"
    >;
    getFunction(nameOrSignature: "get_type_weight"): TypedContractMethod<[type_id: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "get_total_weight"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "get_weights_sum_per_type"): TypedContractMethod<[type_id: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "future_admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "control_tower"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "n_gauge_types"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "n_gauges"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "gauge_type_names"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "gauges"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(
        nameOrSignature: "vote_nft_slopes"
    ): TypedContractMethod<[arg0: BigNumberish, arg1: AddressLike], [[bigint, bigint, bigint] & {slope: bigint; power: bigint; end: bigint}], "view">;
    getFunction(nameOrSignature: "vote_nft_power"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "last_nft_vote"): TypedContractMethod<[arg0: BigNumberish, arg1: AddressLike], [bigint], "view">;
    getFunction(
        nameOrSignature: "points_weight"
    ): TypedContractMethod<[arg0: AddressLike, arg1: BigNumberish], [[bigint, bigint] & {bias: bigint; slope: bigint}], "view">;
    getFunction(nameOrSignature: "time_weight"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(
        nameOrSignature: "points_sum"
    ): TypedContractMethod<[arg0: BigNumberish, arg1: BigNumberish], [[bigint, bigint] & {bias: bigint; slope: bigint}], "view">;
    getFunction(nameOrSignature: "time_sum"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "points_total"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "time_total"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "points_type_weight"): TypedContractMethod<[arg0: BigNumberish, arg1: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "time_type_weight"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "isLock"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "lockers"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "killed_gauges"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "vote_activated"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "initialized"): TypedContractMethod<[], [boolean], "view">;

    getEvent(key: "CommitOwnership"): TypedContractEvent<CommitOwnershipEvent.InputTuple, CommitOwnershipEvent.OutputTuple, CommitOwnershipEvent.OutputObject>;
    getEvent(key: "ApplyOwnership"): TypedContractEvent<ApplyOwnershipEvent.InputTuple, ApplyOwnershipEvent.OutputTuple, ApplyOwnershipEvent.OutputObject>;
    getEvent(key: "AddType"): TypedContractEvent<AddTypeEvent.InputTuple, AddTypeEvent.OutputTuple, AddTypeEvent.OutputObject>;
    getEvent(key: "NewTypeWeight"): TypedContractEvent<NewTypeWeightEvent.InputTuple, NewTypeWeightEvent.OutputTuple, NewTypeWeightEvent.OutputObject>;
    getEvent(key: "NewGaugeWeight"): TypedContractEvent<NewGaugeWeightEvent.InputTuple, NewGaugeWeightEvent.OutputTuple, NewGaugeWeightEvent.OutputObject>;
    getEvent(key: "VoteForGauge"): TypedContractEvent<VoteForGaugeEvent.InputTuple, VoteForGaugeEvent.OutputTuple, VoteForGaugeEvent.OutputObject>;
    getEvent(key: "NewGauge"): TypedContractEvent<NewGaugeEvent.InputTuple, NewGaugeEvent.OutputTuple, NewGaugeEvent.OutputObject>;

    filters: {
        "CommitOwnership(address)": TypedContractEvent<CommitOwnershipEvent.InputTuple, CommitOwnershipEvent.OutputTuple, CommitOwnershipEvent.OutputObject>;
        CommitOwnership: TypedContractEvent<CommitOwnershipEvent.InputTuple, CommitOwnershipEvent.OutputTuple, CommitOwnershipEvent.OutputObject>;

        "ApplyOwnership(address)": TypedContractEvent<ApplyOwnershipEvent.InputTuple, ApplyOwnershipEvent.OutputTuple, ApplyOwnershipEvent.OutputObject>;
        ApplyOwnership: TypedContractEvent<ApplyOwnershipEvent.InputTuple, ApplyOwnershipEvent.OutputTuple, ApplyOwnershipEvent.OutputObject>;

        "AddType(string,int128)": TypedContractEvent<AddTypeEvent.InputTuple, AddTypeEvent.OutputTuple, AddTypeEvent.OutputObject>;
        AddType: TypedContractEvent<AddTypeEvent.InputTuple, AddTypeEvent.OutputTuple, AddTypeEvent.OutputObject>;

        "NewTypeWeight(int128,uint256,uint256,uint256)": TypedContractEvent<
            NewTypeWeightEvent.InputTuple,
            NewTypeWeightEvent.OutputTuple,
            NewTypeWeightEvent.OutputObject
        >;
        NewTypeWeight: TypedContractEvent<NewTypeWeightEvent.InputTuple, NewTypeWeightEvent.OutputTuple, NewTypeWeightEvent.OutputObject>;

        "NewGaugeWeight(address,uint256,uint256,uint256)": TypedContractEvent<
            NewGaugeWeightEvent.InputTuple,
            NewGaugeWeightEvent.OutputTuple,
            NewGaugeWeightEvent.OutputObject
        >;
        NewGaugeWeight: TypedContractEvent<NewGaugeWeightEvent.InputTuple, NewGaugeWeightEvent.OutputTuple, NewGaugeWeightEvent.OutputObject>;

        "VoteForGauge(uint256,uint256,address,uint256)": TypedContractEvent<
            VoteForGaugeEvent.InputTuple,
            VoteForGaugeEvent.OutputTuple,
            VoteForGaugeEvent.OutputObject
        >;
        VoteForGauge: TypedContractEvent<VoteForGaugeEvent.InputTuple, VoteForGaugeEvent.OutputTuple, VoteForGaugeEvent.OutputObject>;

        "NewGauge(address,int128,uint256)": TypedContractEvent<NewGaugeEvent.InputTuple, NewGaugeEvent.OutputTuple, NewGaugeEvent.OutputObject>;
        NewGauge: TypedContractEvent<NewGaugeEvent.InputTuple, NewGaugeEvent.OutputTuple, NewGaugeEvent.OutputObject>;
    };
}