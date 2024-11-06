import { TSide } from "../models/game.model";
import { getRandomNumber } from "./random.util";

const getSide = (): TSide => {
  const side: TSide[] = ["left", "right"];
  return side[getRandomNumber(0, 1)];
}