import { ICommand } from "../models/game.model";
import up1 from "./../assets/scripts/04_up1.mp3";
import down1 from "./../assets/scripts/08_down1.mp3";
import stay1 from "./../assets/scripts/12_stay1.mp3";

export const commands: ICommand[] = [
  {
    id: 0,
    script: "올려",
    result: "up",
    sound: up1,
  },
  {
    id: 1,
    script: "내려",
    result: "down",
    sound: down1,
  },
  {
    id: 2,
    script: "그대로",
    result: "stay",
    sound: stay1,
  },
]