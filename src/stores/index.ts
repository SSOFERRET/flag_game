import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <T extends object, S extends UseBoundStore<StoreApi<T>>>(
  _store: S,
) => {
  type StoreState = T;
  const store = _store as WithSelectors<S>;

  store.use = {} as { [K in keyof StoreState]: () => StoreState[K] };

  for (const k of Object.keys(store.getState()) as (keyof StoreState)[]) {
    store.use[k] = () => store((s) => s[k]);
  }

  return store;
};

export default createSelectors;
