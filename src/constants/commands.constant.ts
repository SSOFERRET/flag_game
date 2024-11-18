import { ICommand } from "../models/game.model";
import up1 from "./../assets/scripts/04_up1.mp3";
import up2 from "./../assets/scripts/05_up2.mp3";
import up3 from "./../assets/scripts/06_up3.mp3";
import up4 from "./../assets/scripts/07_up4.mp3";
import up5 from "./../assets/scripts/16_up5.mp3";
import down1 from "./../assets/scripts/08_down1.mp3";
import down2 from "./../assets/scripts/09_down2.mp3";
import down3 from "./../assets/scripts/10_down3.mp3";
import down4 from "./../assets/scripts/11_down4.mp3";
import down5 from "./../assets/scripts/17_down5.mp3";
import stay1 from "./../assets/scripts/12_stay1.mp3";
import stay2 from "./../assets/scripts/14_stay2.mp3";
import stay3 from "./../assets/scripts/15_stay3.mp3";

export const commands: ICommand[] = [
  {
    id: 0,
    script: "올려",
    result: "up",
    sound: up1,
  },
  {
    id: 1,
    script: "올리시고",
    result: "up",
    sound: up2,
  },
  {
    id: 2,
    script: "내리지 말고 올려",
    result: "up",
    sound: up3,

  },
  {
    id: 3,
    script: "내리지 말고",
    result: "up",
    sound: up4,
  },
  {
    id: 4,
    script: "내려",
    result: "down",
    sound: down1,
  },
  {
    id: 5,
    script: "내리시고",
    result: "down",
    sound: down2,
  },
  {
    id: 6,
    script: "올리지 말고 내려",
    result: "down",
    sound: down3,
  },
  {
    id: 7,
    script: "올리지 말고",
    result: "down",
    sound: down4,
  },
  {
    id: 8,
    script: "그대로",
    result: "stay",
    sound: stay1,
  },
  {
    id: 9,
    script: "올리지 말고 그대로",
    result: "stay",
    sound: stay2,
  },
  {
    id: 10,
    script: "내리지 말고 그대로",
    result: "stay",
    sound: stay3,
  },
  {
    id: 11,
    script: "올리지 말고 올려",
    result: "up",
    sound: up5,
  },
  {
    id: 12,
    script: "내리지 말고 내려",
    result: "down",
    sound: down5,
  },
]