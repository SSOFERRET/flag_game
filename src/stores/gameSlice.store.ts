import { StateCreator } from "zustand";
import { ISlice } from "./boundStore.store";

export interface IGameSlice {
  score: number;
  addScore: () => void;
  setInitializeGame: () => void;
}

export const gameSlice: StateCreator<ISlice, [], [], IGameSlice> = (set) => ({
  score: 0,
  addScore: () => set((state) => ({ score: state.score + 1 })),
  setInitializeGame: () => set(() => ({ score: 0})),
})