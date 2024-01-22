import React from 'react'
import PopupInfo from '../PopupInfo/PopupInfo'

export default function Register() {
  const propsItems = {
    textTitle: 'Регистрация',
    textRedirect: 'Уже есть аккаунт?',
    firstInput: 'Электронная почта',
    firstInputPlaceholder: 'example@mail.ru',
    secondInput: 'Пароль',
    secondInputPlaceholder: 'Введите пароль',
    thirdInput: 'Повтор пароля',
    thirdInputPlaceholder: 'Повторите пароль',
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
