import { StateCreator } from "zustand";
import { TState } from "../models/game.model";
import { ISlice } from "./boundStore.store";

export interface IMotionSlice {
  left: TState;
  right: TState;
  toggleLeft: () => void;
  toggleRight: () => void;
  setInitializeMotion: () => void;
}

export const motionSlice: StateCreator<ISlice, [], [], IMotionSlice> = (set) => ({
  left: "down",
  right: "down",
  toggleLeft: () => set((state) => ({ left: state.left === "down" ? "up" : "down" })),
  toggleRight: () => set((state) => ({ right: state.right === "down" ? "up" : "down" })),
  setInitializeMotion: () => set(() => ({ left: "down", right: "down" })),
});