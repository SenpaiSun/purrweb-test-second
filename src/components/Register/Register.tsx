import React from 'react'
import PopupInfo from '../PopupInfo/PopupInfo'

export default function Register() {
  const propsItems = {
    textTitle: 'Регистрация',
    textRedirect: 'Уже есть аккаунт?',
    textLink: 'Войти',
    textUrl: '/sign-in',
    path: '/sign-up',
  }
  return (
    <>
      <PopupInfo propsItems={propsItems} />
    </>
  )
}
