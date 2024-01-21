import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import { setStatePopupExit } from '../feature/popupExit/popupExitSlice'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()
  const storedUserInfo = localStorage.getItem('userInfo')
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {}
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container-logo'>
          <span className='header__logo'></span>
          <p className='header__title'>Purrweb</p>
        </div>
        {location.pathname === '/' && localStorage.getItem('token') && userInfo.name !== undefined && (
          <div className='header__container-account'>
            <p className='header__account-name'>{`${userInfo.name} ${userInfo.surname}`}</p>
            <div
              className='header__container-account-exit'
              onClick={() => {
                dispatch(setStatePopupExit())
              }}
            >
              <button className='header__account-exit-text'>Выйти</button>
              <span className='header__account-exit-image'></span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
