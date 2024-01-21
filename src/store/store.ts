import { configureStore } from '@reduxjs/toolkit'
import popupExitSlice from '../components/feature/popupExit/popupExitSlice'
import popupRegisterSlice from '../components/feature/popupRegister/popupRegisterSlice'
import authSlice from '../components/feature/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    popupExit: popupExitSlice,
    popupRegister: popupRegisterSlice,
    auth: authSlice
  },
})
