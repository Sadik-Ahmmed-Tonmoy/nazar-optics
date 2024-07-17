import { createSlice } from "@reduxjs/toolkit";

export interface showColorState {
  value: boolean;
}

const initialState: showColorState = {
  value: false,
};

export const showColorSlice = createSlice({
  name: "showColor",
  initialState,
  reducers: {
    showColor: (state) => {
      state.value = true;
    },
    hideColor: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showColor, hideColor } = showColorSlice.actions;

export default showColorSlice.reducer;
