import { ICommand } from "../models/game.model";

const up = "/scripts/04_up.mp3";
const down = "/scripts/05_down.mp3";
const stay = "/scripts/06_stay.mp3";

export const commands: ICommand[] = [
  {
    id: 0,
    script: "올려",
    result: "up",
    sound: up,
  },
  {
    id: 1,
    script: "내려",
    result: "down",
    sound: down,
  },
  {
    id: 2,
    script: "그대로",
    result: "stay",
    sound: stay,
  },
]