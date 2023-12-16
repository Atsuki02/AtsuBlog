import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  isOpen: Boolean;
}

const initialState: modalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
