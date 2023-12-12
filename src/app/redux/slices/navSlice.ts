import { createSlice } from "@reduxjs/toolkit";

export interface navState {
  isOpen: Boolean;
  theme: "dark" | "light";
}

const initialState: navState = {
  isOpen: false,
  theme: "light",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setIsOpen, setTheme } = navSlice.actions;

export default navSlice.reducer;
