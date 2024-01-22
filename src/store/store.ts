import { configureStore } from '@reduxjs/toolkit'
import popupExitSlice from '../components/feature/popupExit/popupExitSlice'
import popupRegisterSlice from '../components/feature/popupRegister/popupRegisterSlice'
import authSlice from '../components/feature/authSlice/authSlice'
import stateUserSlice from '../components/feature/stateUser/stateUserSlice'

export const store = configureStore({
  reducer: {
    user: stateUserSlice,
    popupExit: popupExitSlice,
    popupRegister: popupRegisterSlice,
    auth: authSlice
  },
})
