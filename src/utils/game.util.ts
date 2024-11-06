import { downCommand, upCommand } from "../constants/commands.constant";
import { flags } from "../constants/flags.constant";
import { ICommand, ISelectedFlag, TSide } from "../models/game.model";
import { getRandomNumber } from "./random.util";

interface IGameCommand {
  side: TSide;
  command: ICommand;
  script: string;
}

const getGameCommand = (): IGameCommand => {
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
  
  const getScriptString = (side: TSide, command: ICommand, selectedFlag: ISelectedFlag): string => {
    return `${selectedFlag[side].name} ${command.script}`
  }

  const side: TSide = getSide();
  const command: ICommand | null = getCommand();
  if (!command) throw new Error("Command Selection Error");
  const selectedFlag: ISelectedFlag = {
    left: flags[0],
    right: flags[1],
  }
  const script: string = getScriptString(side, command, selectedFlag);

  return {side, command, script};
};