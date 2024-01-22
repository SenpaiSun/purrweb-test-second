import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userAuth: boolean;
}

const initialState: UserState = {
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