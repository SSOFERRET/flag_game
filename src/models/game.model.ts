export type TSide = "left" | "right";

export type TState = "up" | "down";

export interface ICommand {
    id: number;
    script: string;
    prevState?: TState;
    result: TState;
}