export type TSide = "left" | "right" | "both";

export type TState = "up" | "down";

export type TResult = "up" | "down" | "stay";

export interface ICommand {
    id: number;
    script: string;
    prevState?: TState;
    result: TResult;
    sound: string;
}

export interface IFlag {
    id: number;
    color: string;
    name: string;
    sound: string;
}

export interface ISelectedFlag {
    left: IFlag;
    right: IFlag;
    both: IFlag;
}

export interface IState {
    left: TState;
    right: TState;
}