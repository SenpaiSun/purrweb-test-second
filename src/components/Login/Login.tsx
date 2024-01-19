import React from 'react'
import PopupInfo from '../PopupInfo/PopupInfo'

export default function Login() {
  const propsItems = {
    textTitle: 'Авторизация',
    textRedirect: 'Еще нет аккаунта?',
    textLink: 'Зарегистрироваться',
    textUrl: '/sign-up',
    path: '/sign-in',
  }
  return (
    <>
      <PopupInfo propsItems={propsItems} />
    </>
  )
}
