import { useEffect } from "react";
import useStartGame from "./useStartGame";

const useKeyEnter = () => {
  const startGame = useStartGame();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter")
        startGame();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);
}

export default useKeyEnter;