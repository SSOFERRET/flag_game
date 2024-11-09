import { create } from "zustand";
import createSelectors from ".";
import { INameCustomSlice, userNameSlice } from "./customSlice.store";
import { IMotionSlice, motionSlice } from "./motionSlice.store";

export type ISlice = INameCustomSlice & IMotionSlice

const boundStoreBase = create<ISlice>()((...a) => ({
    ...userNameSlice(...a),
    ...motionSlice(...a),
}));

export default createSelectors(boundStoreBase);