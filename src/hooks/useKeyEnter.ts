import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useKeyEnter = () => {
  const nav = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter")
        nav('/game', { replace: true });
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);
}

export default useKeyEnter;