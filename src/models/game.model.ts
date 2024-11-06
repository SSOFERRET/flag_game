export type TSide = "left" | "right";

export type TState = "up" | "down";

export interface ICommand {
    id: number;
    script: string;
    prevState?: TState;
    result: TState;
}

export interface IFlag {
    id: number;
    color: string;
    name: string;
}

export interface ISelectedFlag {
    left: IFlag;
    right: IFlag;
}