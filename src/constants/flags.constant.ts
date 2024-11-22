import { IFlag } from "../models/game.model";

const blue = "/scripts/01_blue.mp3";
const white = "/scripts/02_white.mp3";
const both = "/scripts/03_both.mp3";

export const flags: IFlag[] = [
    {
        id: 0,
        color: "blue",
        name: "청기",
        sound: blue,
    },
    {
        id: 1,
        color: "white",
        name: "백기",
        sound: white,
    },
    {
        id: 2,
        color: "both",
        name: "청기 백기",
        sound: both,
    }
]