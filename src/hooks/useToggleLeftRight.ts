import { useEffect } from "react";
import boundStore from "../stores/boundStore.store";
import useSound from "use-sound";
import toggleSound from "./../assets/toggle.mp3";

const useToggleLeftRight = () => {
  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const toggleLeft = boundStore.use.toggleLeft();
  const toggleRight = boundStore.use.toggleRight();

  const [playToggle] = useSound(toggleSound);

  const onClickLeft = () => {
    toggleLeft();
  }

  const onClickRight = () => {
    toggleRight();
  }

  useEffect(() => {
    playToggle();
  }, [left, right]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "d")
        onClickLeft();
      else if (e.key === "k")
        onClickRight();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return { onClickLeft, onClickRight };
}

export default useToggleLeftRight;