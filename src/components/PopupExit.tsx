import React from 'react'
import './PopupExit.css'
import { useDispatch } from 'react-redux'
import { setStatePopupExit } from '../components/feature/popupExit/popupExitSlice'

export default function PopupExit() {
  const dispatch = useDispatch()
  return (
    <>
      <div className='popup-exit__overlay popup-exit__overlay-active' onClick={() => dispatch(setStatePopupExit())}></div>
      <div className='popup-exit'>
        <p className='popup-exit__text'>Вы уверены что хотите выйти из аккаунта?</p>
        <button className='popup-exit__close' onClick={() => dispatch(setStatePopupExit())}></button>
        <div className='popup-exit__buttons'>
          <button className='popup-exit__cancel' onClick={() => dispatch(setStatePopupExit())}>Отмена</button>
          <button className='popup-exit__exit'>Выйти</button>
        </div>
      </div>
    </>
  )
}
