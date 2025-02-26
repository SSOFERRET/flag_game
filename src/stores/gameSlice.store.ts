import { StateCreator } from "zustand";
import { ISlice } from "./boundStore.store";

export interface IGameSlice {
  score: number;
  addScore: () => void;
  life: number;
  loseLife: () => void;
  setInitializeGame: () => void;
}

export const gameSlice: StateCreator<ISlice, [], [], IGameSlice> = (set) => ({
  score: 0,
  addScore: () => set((state) => ({ score: state.score + 1 })),
  life: 3,
  loseLife: () => set((state) => ({ life: state.life - 1 })),
  setInitializeGame: () => set(() => ({ score: 0, life: 3 })),
})