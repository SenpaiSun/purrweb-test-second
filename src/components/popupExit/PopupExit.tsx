import React from 'react'
import './PopupExit.css'
import { useDispatch } from 'react-redux'
import { setStatePopupExit } from '../feature/popupExit/popupExitSlice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../feature/authSlice/authSlice'
import { setStatePopupRegister } from '../feature/popupRegister/popupRegisterSlice'

export default function PopupExit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const exitAccount = async () => {
    await localStorage.clear()
    navigate('/sign-in', { replace: true })
    dispatch(setStatePopupExit())
    dispatch(setStatePopupRegister({ email: '', password: '', passwordConfirm: '', name: '', surname: '', phone: '' }))
    dispatch(logout())
  }
  console.log(localStorage.getItem('token'))
  return (
    <>
      <div className='popup-exit__overlay popup-exit__overlay-active' onClick={() => dispatch(setStatePopupExit())}></div>
      <div className='popup-exit'>
        <p className='popup-exit__text'>Вы уверены что хотите выйти из аккаунта?</p>
        <button className='popup-exit__close' onClick={() => dispatch(setStatePopupExit())}></button>
        <div className='popup-exit__buttons'>
          <button className='popup-exit__cancel' onClick={() => dispatch(setStatePopupExit())}>
            Отмена
          </button>
          <button className='popup-exit__exit' onClick={exitAccount}>Выйти</button>
        </div>
      </div>
    </>
  )
}
