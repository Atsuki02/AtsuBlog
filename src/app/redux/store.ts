import { configureStore } from "@reduxjs/toolkit";
import navSlice, { navState } from "./slices/navSlice";
import modalSlice, { modalState } from "./slices/modalSlice";

export interface RootState {
  nav: navState;
  modal: modalState;
}

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: { nav: navSlice, modal: modalSlice },
});

export default store;
