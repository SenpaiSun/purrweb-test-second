import { configureStore } from '@reduxjs/toolkit'
import popupExitSlice from '../components/feature/popupExit/popupExitSlice'

export const store = configureStore({
  reducer: {
    popupExit: popupExitSlice,
  },
})
