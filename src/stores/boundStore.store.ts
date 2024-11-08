import { create } from "zustand";
import createSelectors from ".";
import { ICustomSlice, nameCustomSlice } from "./customSlice.store";

const boundStoreBase = create<ICustomSlice>()((...a) => ({
    ...nameCustomSlice(...a),
}));

export default createSelectors(boundStoreBase);