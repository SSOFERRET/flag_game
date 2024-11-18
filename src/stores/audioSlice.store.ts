import { StateCreator } from "zustand";
import { ISlice } from "./boundStore.store";
import { Howl } from "howler";

export interface IAudioSlice {
  gameAudio: Howl | null;
  setAudio: (sound: string) => void;
}

export const audioSlice: StateCreator<ISlice, [], [], IAudioSlice> = (set) =>({
    gameAudio: null,
    setAudio: (sound) => {
      set((state) => {
        if (!state.gameAudio) {
          const gameAudio = new Howl({
            src: [sound],
            preload: true,
            loop: false,
            volume: 1.0,
          });
  
          gameAudio.play();
          gameAudio.stop();
  
          return { gameAudio };
        }
        return {};
      });
    },
  });