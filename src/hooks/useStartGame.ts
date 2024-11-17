import { useNavigate } from "react-router-dom";
import boundStore from "../stores/boundStore.store";

const useStartGame = () => {
  const nav = useNavigate();
  const setInitializeGame = boundStore.use.setInitializeGame();
  const setInitializeMotion = boundStore.use.setInitializeMotion();
  const setContinue = boundStore.use.setContinue();

  const startGame = () => {
    nav("/game");
    setInitializeGame();
    setInitializeMotion();
    setContinue(true);
  }

  return startGame;
}

export default useStartGame;