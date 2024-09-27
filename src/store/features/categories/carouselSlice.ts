import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarouselState = {
  [id: string]: {
    progress: number;
    count: number;
    current: number;
  };
};

const initialState: CarouselState = {};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setScrollSnapList: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const { id, count } = action.payload;
      if (!state[id]) {
        state[id] = { progress: 0, count: 0, current: 0 };
      }
      state[id].count = count;
      state[id].progress = state[id].count > 0 ? state[id].current / state[id].count : 0;
    },
    setSelectedScrollSnap: (state, action: PayloadAction<{ id: string; current: number }>) => {
      const { id, current } = action.payload;
      if (!state[id]) {
        state[id] = { progress: 0, count: 0, current: 0 };
      }
      state[id].current = current;
      state[id].progress = state[id].count > 0 ? state[id].current / state[id].count : 0;
    },
  },
});

export const { setScrollSnapList, setSelectedScrollSnap } = carouselSlice.actions;
export default carouselSlice.reducer;
