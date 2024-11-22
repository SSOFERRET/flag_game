import { useNavigate } from "react-router-dom";
import boundStore from "../stores/boundStore.store";
import { useRouter } from "next/router";

const useStartGame = () => {
  const router = useRouter();
  const setInitializeGame = boundStore.use.setInitializeGame();
  const setInitializeMotion = boundStore.use.setInitializeMotion();

  const startGame = () => {
    router.push("/game");
    setInitializeGame();
    setInitializeMotion();
  }

  return startGame;
}

export default useStartGame;