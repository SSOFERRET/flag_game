import { create } from "zustand";
import createSelectors from ".";
import { INameCustomSlice, userNameSlice } from "./customSlice.store";
import { IMotionSlice, motionSlice } from "./motionSlice.store";
import { gameSlice, IGameSlice } from "./gameStore.store";

export type ISlice = INameCustomSlice & IMotionSlice & IGameSlice

const boundStoreBase = create<ISlice>()((...a) => ({
    ...userNameSlice(...a),
    ...motionSlice(...a),
    ...gameSlice(...a),
}));

export default createSelectors(boundStoreBase);