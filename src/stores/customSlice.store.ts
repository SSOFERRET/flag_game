import { StateCreator } from "zustand";

export type ICustomSlice = INameCustomSlice

interface INameCustomSlice {
    name: string;
    setName: (name: string) => void;
}

export const nameCustomSlice: StateCreator<ICustomSlice, [], [], INameCustomSlice> = (set) => ({
    name: "오똑씨",
    setName: (name: string) => set(() => ({name})),
})