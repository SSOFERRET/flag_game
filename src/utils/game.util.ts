import { commands } from "../constants/commands.constant";
import { flags } from "../constants/flags.constant";
import { ICommand, ISelectedFlag, IState, TSide, TState } from "../models/game.model";
import { getRandomNumber } from "./random.util";

export interface IGameCommand {
  side: TSide;
  command: ICommand;
  script: string;
  sounds: string[];
}

export const getGameCommand = (): IGameCommand => {
  const getSide = (): TSide => {
    const randomNumber = getRandomNumber(0, 4);

    switch (randomNumber) {
      case 0: return "left";
      case 1: return "right";
      case 2: return "left";
      case 3: return "right";
      case 4: return "both";
      default: return "both";
    }
  }

  const getCommand = (): ICommand => {
    const randomNumber = getRandomNumber(0, commands.length - 1);
    
    return commands[randomNumber];
  }

  const getScriptString = (side: TSide, command: ICommand, selectedFlag: ISelectedFlag): string => {
    return `${selectedFlag[side].name}, ${command.script}`
  }

  const getScriptSound = (side: TSide, command: ICommand, selectedFlag: ISelectedFlag): string[] => {
    return [selectedFlag[side].sound, command.sound];
  }

  const side = getSide();
  const command: ICommand | null = getCommand();
  if (!command) throw new Error("Command Selection Error");

  const selectedFlag: ISelectedFlag = {
    left: flags[0],
    right: flags[1],
    both: flags[2],
  }

  const script = getScriptString(side, command, selectedFlag);
  const sounds = getScriptSound(side, command, selectedFlag);

  return { side, command, script, sounds };
};

export const getJudge = (prevState: IState, currentState: IState, side: TSide, command: ICommand) => {
  let leftAnswer: TState = prevState.left;
  let rightAnswer: TState = prevState.right;

  if (side === "both" && command.result !== "stay") {
    leftAnswer = command.result;
    rightAnswer = command.result;
  }

  if (side === "left" && command.result !== "stay")
    leftAnswer = command.result;

  if (side === "right" && command.result !== "stay")
    rightAnswer = command.result;


  console.log("답", {
    leftAnswer,
    rightAnswer
  })

  if (currentState.left !== leftAnswer)
    return false;
  if (currentState.right !== rightAnswer)
    return false;
  return true;
}