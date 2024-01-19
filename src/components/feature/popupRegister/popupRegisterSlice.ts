import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatePopupRegister {
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialState: StatePopupRegister = {
  email: "",
  password: "",
  passwordConfirm: "",
};

export const popupRegisterSlice = createSlice({
  name: "popupRegister",
  initialState,
  reducers: {
    setStatePopupRegister: (state, action: PayloadAction<StatePopupRegister>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirm = action.payload.passwordConfirm;
    },
  },
});

export const { setStatePopupRegister } = popupRegisterSlice.actions;
export default popupRegisterSlice.reducer;
