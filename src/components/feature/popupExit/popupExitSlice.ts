import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const popupExitSlice = createSlice({
  name: "popupExit",
  initialState,
  reducers: {
    setStatePopupExit: (state) => {
      state.isActive = !state.isActive
    }
  }
})

export const { setStatePopupExit } = popupExitSlice.actions
export default popupExitSlice.reducer