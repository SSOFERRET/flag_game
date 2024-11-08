import { StateCreator } from "zustand";

export type ICustomSlice = INameCustomSlice

interface INameCustomSlice {
    userName: string;
    setUserName: (userName: string) => void;
}

export const userNameSlice: StateCreator<ICustomSlice, [], [], INameCustomSlice> = (set) => ({
    userName: "오똑씨",
    setUserName: (userName: string) => set(() => ({userName})),
})