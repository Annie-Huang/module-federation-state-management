// Cannot get things working with this index.d.ts file for store because it got multiple export
import React, { ReactNode } from 'react';
import { StoreApi, UseBoundStore } from 'zustand';

// If you don't have the CountProviderProps and useCountProps defined, it will run fine.
// But when you hover [count, setCount] in <App> in host, you will lost the intellison fo the type.
// export type CountProviderProps = React.FunctionComponent<{
//   children: ReactNode;
// }>;
// export type useCountProps = () => [
//   number,
//   (value: ((prevState: number) => number) | number) => void
// ];
//
// Then in the app side:
// import {
//   CountProvider,
//   CountProviderProps,
//   useCount,
//   useCountProps,
// } from 'host/store';
// const CountProviderHostApp = CountProvider as CountProviderProps;
// const useCountHostApp = useCount as useCountProps;

interface StoreState {
  count: number;
  increment: () => void;
  clear: () => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>>;

export default useStore;
