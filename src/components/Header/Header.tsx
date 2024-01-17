import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container-logo'>
          <span className='header__logo'></span>
          <p className='header__title'>Purrweb</p>
        </div>
        <div className='header__container-account'>
          <p className='header__account-name'>Анастасия Филатовна</p>
          <div className='header__container-account-exit'>
            <Link to='/sign-in' className='header__account-exit'>
              <span className='header__account-exit-text'>Выйти</span>
            </Link>
            <span className='header__account-exit-image'></span>
          </div>
        </div>
      </div>
    </header>
  )
}
