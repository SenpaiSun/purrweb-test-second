import React from 'react'
import { useForm } from 'react-hook-form'
import './PopupInfo.css'
import { Link } from 'react-router-dom'

export default function PopupInfo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <section className='popup-info'>
      <form onSubmit={handleSubmit(() => {})} className='popup-info__form'>
        <h1 className='popup-info__title'>Регистрация</h1>
        <div className='popup-info__inputs-container'>
          <div className='popup-info__inputs'>
            <label htmlFor='email' className='popup-info__label'>
              Электронная почта
            </label>
            <div className='popup-info__input-full'>
              <input type='email' id='email' className='popup-info__input' />
              <div className='popup-info__input-buttons'>
                <span className='popup-info__input-accept' />
                <span className='popup-info__input-error' />
              </div>
            </div>
          </div>
          <div className='popup-info__inputs'>
            <label htmlFor='password' className='popup-info__label'>
              Пароль
            </label>
            <div className='popup-info__input-full'>
              <input type='password' id='password' className='popup-info__input' />
              <div className='popup-info__input-buttons'>
                <button className='popup-info__input-eye' />
                <span className='popup-info__input-accept' />
                <span className='popup-info__input-error' />
              </div>
            </div>
          </div>
          <div className='popup-info__inputs'>
            <label htmlFor='password-again' className='popup-info__label'>
              Пароль
            </label>
            <div className='popup-info__input-full'>
              <input type='password' id='password' className='popup-info__input' />
              <div className='popup-info__input-buttons'>
                <button className='popup-info__input-eye' />
                <span className='popup-info__input-accept' />
                <span className='popup-info__input-error' />
              </div>
            </div>
          </div>
          <span className='popup-info__input-text-error'>Пароли не совпадают</span>
        </div>
        <div className='popup-info__inputs-container'>
          <button type='submit' className='popup-info__button'>
            Продолжить
          </button>
        </div>
        <div className='popup-info__text'>
          <p className='popup-info__text-info'>Уже есть аккаунт?</p>
          <Link to='/sign-in' className='popup-info__text-link'>
            Войти
          </Link>
        </div>
      </form>
    </section>
  )
}
