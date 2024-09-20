import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categories/categoriesSlice";
import trailerSlice from "./features/trailer/trailerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categoriesSlice,
      trailer: trailerSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
