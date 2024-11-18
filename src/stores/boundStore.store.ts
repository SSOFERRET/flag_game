import { create } from "zustand";
import createSelectors from ".";
import { INameCustomSlice, userNameSlice } from "./customSlice.store";
import { IMotionSlice, motionSlice } from "./motionSlice.store";
import { gameSlice, IGameSlice } from "./gameSlice.store";
import { audioSlice, IAudioSlice } from "./audioSlice.store";

export type ISlice = INameCustomSlice & IMotionSlice & IGameSlice & IAudioSlice

const boundStoreBase = create<ISlice>()((...a) => ({
    ...userNameSlice(...a),
    ...motionSlice(...a),
    ...gameSlice(...a),
    ...audioSlice(...a),
}));

export default createSelectors(boundStoreBase);