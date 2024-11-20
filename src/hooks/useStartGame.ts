import { useNavigate } from "react-router-dom";
import boundStore from "../stores/boundStore.store";

const useStartGame = () => {
  const nav = useNavigate();
  const setInitializeGame = boundStore.use.setInitializeGame();
  const setInitializeMotion = boundStore.use.setInitializeMotion();

  const startGame = () => {
    nav("/game");
    setInitializeGame();
    setInitializeMotion();
  }

  return startGame;
}

export default useStartGame;