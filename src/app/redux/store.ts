import { configureStore } from "@reduxjs/toolkit";
import navSlice, { navState } from "./slices/navSlice";

export interface RootState {
  nav: navState;
}

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: { nav: navSlice },
});

export default store;
