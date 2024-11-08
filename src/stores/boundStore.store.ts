import { create } from "zustand";
import createSelectors from ".";
import { ICustomSlice, userNameSlice } from "./customSlice.store";

const boundStoreBase = create<ICustomSlice>()((...a) => ({
    ...userNameSlice(...a),
}));

export default createSelectors(boundStoreBase);