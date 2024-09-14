import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoriesState = {
  progress: number;
  count: number;
  current: number;
};

const initialState: CategoriesState = { progress: 0, count: 0, current: 0 };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setScrollSnapList: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
      state.progress = state.count > 0 ? state.current / state.count : 0;
    },
    setSelectedScrollSnap: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
      state.progress = state.count > 0 ? state.current / state.count : 0;
    },
  },
});

export const { setScrollSnapList, setSelectedScrollSnap } = categoriesSlice.actions;
export default categoriesSlice.reducer;
