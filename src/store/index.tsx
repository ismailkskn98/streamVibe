import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categories/categoriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categoriesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
