import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TrailerState = {
  progress: number;
  count: number;
  current: number;
  selectedIndex: number;
};

const initialState: TrailerState = { progress: 0, count: 0, current: 0, selectedIndex: 0 };

const trailerState = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    setScrollSnapList: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
      state.progress = state.count > 0 ? state.current / state.count : 0;
      state.selectedIndex = action.payload;
    },
    setSelectedScrollSnap: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
      state.progress = state.count > 0 ? state.current / state.count : 0;
      state.selectedIndex = action.payload;
    },
  },
});

export const { setScrollSnapList, setSelectedScrollSnap } = trailerState.actions;
export default trailerState.reducer;
