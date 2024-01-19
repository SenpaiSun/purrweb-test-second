import React, { useEffect } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import './PopupInfo.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setStatePopupRegister } from '../feature/popupRegister/popupRegisterSlice'

interface Props {
  propsItems: {
    textTitle: string
    textRedirect: string
    textLink: string
    textUrl: string
    path: string
  }
}

interface StatePopupRegister {
  email: string
  password: string
  passwordConfirm: string
}

export default function PopupInfo(props: Props) {
  const { propsItems } = props
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()

  const statePopupRegister = useSelector((state: { popupRegister: StatePopupRegister }) => state.popupRegister)
  console.log(statePopupRegister)

  React.useEffect(() => {
    const subscription = watch((value) => dispatch(setStatePopupRegister({ email: value.email, password: value.password, passwordConfirm: value.passwordConfirm })))
    return () => subscription.unsubscribe()
  }, [watch, dispatch])

  const onSubmit = () => {}

  const toggleVisionPassword = (e: React.MouseEvent) => {
    const parentItem = e.currentTarget.parentNode?.parentNode
    if (parentItem) {
      // находим все нужные дочерние элементы
      const inputElement = parentItem.querySelector('.popup-info__input') as HTMLInputElement
      const eyeElement = parentItem.querySelector('.popup-info__input-eye')
      // меняем состояние элементов
      if (inputElement && eyeElement) {
        inputElement.type = inputElement.type === 'password' ? 'text' : 'password'
        inputElement.style.fontSize = inputElement.type === 'password' ? '42px' : '14px'
        eyeElement.classList.toggle('popup-info__input-eye-active')
      }
    }
  }

  return (
    <section className='popup-info'>
      <form onSubmit={handleSubmit(onSubmit)} className='popup-info__form' noValidate>
        <h1 className='popup-info__title'>{propsItems.textTitle}</h1>
        <div className='popup-info__inputs-container'>
          <div className='popup-info__inputs'>
            <label htmlFor='email' className='popup-info__label'>
              Электронная почта
            </label>
            <div className='popup-info__input-full'>
              <input
                type='email'
                id='email'
                className='popup-info__input'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Некорректный формат электронной почты',
                  },
                })}
              />
              <div className='popup-info__input-buttons'>
                <span className={errors?.email ? 'popup-info__input-accept popup-info__input-error-disabled' : 'popup-info__input-accept'} />
                <span className={errors?.email ? 'popup-info__input-error' : 'popup-info__input-error popup-info__input-error-disabled'} />
              </div>
            </div>
          </div>
          <div className='popup-info__inputs'>
            <label htmlFor='password' className='popup-info__label'>
              Пароль
            </label>
            <div className='popup-info__input-full'>
              <input
                type='password'
                id='password'
                className='popup-info__input'
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: 'Минимальная длина пароля 8 символов',
                  },
                })}
              />
              <div className='popup-info__input-buttons'>
                <button className='popup-info__input-eye' onClick={toggleVisionPassword} type='button' />
                <span className='popup-info__input-accept' />
                <span className='popup-info__input-error' />
              </div>
            </div>
          </div>
          {propsItems.path === '/sign-up' && (
            <div className='popup-info__inputs'>
              <label htmlFor='passwordConfirm' className='popup-info__label'>
                Повтор пароля
              </label>
              <div className='popup-info__input-full'>
                <input
                  type='password'
                  id='passwordConfirm'
                  className='popup-info__input'
                  {...register('passwordConfirm', {
                    required: true,
                  })}
                />
                <div className='popup-info__input-buttons'>
                  <button className='popup-info__input-eye' onClick={toggleVisionPassword} type='button' />
                  <span className='popup-info__input-accept' />
                  <span className='popup-info__input-error' />
                </div>
              </div>
            </div>
          )}
          <div className='popup-info__conainer-text-error'>
            <span className={`popup-info__input-text-error ${errors?.email && typeof errors.email === 'object' ? 'visible' : 'hidden'}`}>{errors?.email && typeof errors.email === 'object' && (errors.email as FieldError).message}</span>
          </div>
        </div>
        <div className='popup-info__inputs-container'>
          <button type='submit' className='popup-info__button'>
            Продолжить
          </button>
        </div>
        <div className='popup-info__text'>
          <p className='popup-info__text-info'>{propsItems.textRedirect}</p>
          <Link to={propsItems.textUrl} className='popup-info__text-link'>
            {propsItems.textLink}
          </Link>
        </div>
      </form>
    </section>
  )
}
