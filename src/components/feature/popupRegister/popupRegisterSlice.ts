import { createSlice, PayloadAction} from '@reduxjs/toolkit'


interface StatePopupRegister {
  email: string
  password?: string
  passwordConfirm?: string
  name: string
  surname: string
  phone: string
}

const initialState: StatePopupRegister = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  surname: '',
  phone: '',
}

export const popupRegisterSlice = createSlice({
  name: 'popupRegister',
  initialState,
  reducers: {
    setStatePopupRegister: (state, action: PayloadAction<StatePopupRegister>) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.passwordConfirm = action.payload.passwordConfirm
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.phone = action.payload.phone
    },
  },
})

export const { setStatePopupRegister } = popupRegisterSlice.actions
export default popupRegisterSlice.reducer

