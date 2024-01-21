import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: false,
}

export const stateUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStateUser(state, action) {
      state.userAuth = action.payload
    }
  }
})

export const { setStateUser } = stateUserSlice.actions
export default stateUserSlice.reducer