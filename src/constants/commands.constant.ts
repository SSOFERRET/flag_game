import { ICommand } from "../models/game.model"

export const upCommand: ICommand[] = [
  {
    id: 0,
    script: "올려",
    result: "up"
  },
  {
    id: 1,
    script: "올리시고",
    result: "up"
  },
  {
    id: 2,
    script: "내리지 말고 올려",
    result: "up"
  },
]

export const downCommand: ICommand[] = [
  {
    id: 0,
    script: "내려",
    result: "down"
  },
  {
    id: 1,
    script: "내리시고",
    result: "down"
  },
  {
    id: 2,
    script: "올리지 말고 내려",
    result: "down"
  },
]