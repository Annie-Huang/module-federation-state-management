// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice

import React, { FC } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
const { increment, clear } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export const useStore = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  // const dispatch = useDispatch();
  const dispatch: AppDispatch = useDispatch();
  // const dispatch: Dispatch<typeof increment | typeof clear> = useDispatch();
  // const dispatch: Dispatch<typeof counterSlice.actions> = useDispatch();
  // const dispatch: AppDispatch = useDispatch.withTypes<AppDispatch>();

  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  };
};

export const StoreProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
