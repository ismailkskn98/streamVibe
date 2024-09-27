import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./features/categories/carouselSlice";
import trailerSlice from "./features/trailer/trailerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      carousel: carouselSlice,
      trailer: trailerSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
