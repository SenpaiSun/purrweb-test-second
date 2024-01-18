import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import { setStatePopupExit } from '../feature/popupExit/popupExitSlice'
import { useLocation } from 'react-router-dom'


export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container-logo'>
          <span className='header__logo'></span>
          <p className='header__title'>Purrweb</p>
        </div>
        {location.pathname === '/' && <div className='header__container-account'>
          <p className='header__account-name'>Анастасия Филатовна</p>
          <div className='header__container-account-exit'>
            <button className='header__account-exit-text' onClick={() => { dispatch(setStatePopupExit())}}>Выйти</button>
            <span className='header__account-exit-image'></span>
          </div>
        </div>}
      </div>
    </header>
  )
}
