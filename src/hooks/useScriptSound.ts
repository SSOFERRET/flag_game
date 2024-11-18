import { useState } from "react";
import useSound from "use-sound";

const useScriptSound = (sounds: string[]) => {
  const [playScriptSide] = useSound(sounds[0], {
    onend: handleSoundEnd, autoplay: true
  });
  const [playScriptCommand] = useSound(sounds[1]);

  function handleSoundEnd() {
    playScriptCommand();
  }

  // 외부에서 재생을 제어할 수 있도록 함수 제공
  const playAll = () => {
    if (sounds.length === 0) return;
    console.log("스크립트 재생", sounds);
    playScriptSide();
  };

  return {
    playAll,
    // stopScript,
  };
};

export default useScriptSound;
