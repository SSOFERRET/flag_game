import { useEffect } from "react";
import boundStore from "../stores/boundStore.store";

const useToggleLeftRight = () => {
  const toggleLeft = boundStore.use.toggleLeft();
  const toggleRight = boundStore.use.toggleRight();

  const onClickLeft = () => {
    toggleLeft();
    console.log("left")
  }

  const onClickRight = () => {
    toggleRight();
    console.log("right")
  }

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