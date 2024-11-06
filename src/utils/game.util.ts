import { downCommand, upCommand } from "../constants/commands.constant";
import { ICommand, IFlagSelected, TSide } from "../models/game.model";
import { getRandomNumber } from "./random.util";

const getSide = (): TSide => {
  const side: TSide[] = ["left", "right"];
  return side[getRandomNumber(0, 1)];
}

const getCommand = (): ICommand | null => {
  const upOrDown: number = getRandomNumber(0, 1);
  switch (upOrDown) {
    case 0: return upCommand[getRandomNumber(0, upCommand.length - 1)];
    case 1: return downCommand[getRandomNumber(0, downCommand.length - 1)];
    default: return null;
  }
}

const getScriptString = (side: TSide, command: ICommand, flags: IFlagSelected): string => {
  return `${flags[side].name} ${command.script}`
}