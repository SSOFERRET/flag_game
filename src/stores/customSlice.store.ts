import { StateCreator } from "zustand";
import { ISlice } from "./boundStore.store";

export interface INameCustomSlice {
    userName: string;
    setUserName: (userName: string) => void;
}

export const userNameSlice: StateCreator<ISlice, [], [], INameCustomSlice> = (set) => ({
    userName: "오똑씨",
    setUserName: (userName: string) => set(() => ({ userName })),
})