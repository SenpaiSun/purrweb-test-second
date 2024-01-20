import React, { useEffect, useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import './PopupInfo.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setStatePopupRegister } from '../feature/popupRegister/popupRegisterSlice'
import axios from 'axios'

interface Props {
  propsItems?: {
    textTitle?: string
    textRedirect?: string
    firstInput?: string
    firstInputPlaceholder?: string
    secondInput?: string
    secondInputPlaceholder?: string
    thirdInput?: string
    thirdInputPlaceholder?: string
    textLink?: string
    textUrl?: string
    path?: string
  }
}

interface StatePopupRegister {
  email: string
  password: string
  passwordConfirm: string
  name: string
  surname: string
  phone: string
}

export default function PopupInfo(props: Props) {
  const { propsItems } = props
  const [isSubmitState, setIsSubmitState] = useState(false)
  const location = useLocation()
  const stateForm = useSelector((state: { popupRegister: StatePopupRegister }) => state.popupRegister)

  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    trigger,
  } = useForm()

  useEffect(() => {
    const subscription = watch((value) => dispatch(setStatePopupRegister({ email: value.email, password: value.password, passwordConfirm: value.passwordConfirm, name: value.name, surname: value.surname, phone: value.phone })))
    return () => subscription.unsubscribe()
  }, [watch, dispatch])

  useEffect(() => {
    setIsSubmitState(false)
    trigger()
  }, [trigger, stateForm])

  const navigate = useNavigate()

  const onLoginHandler = async () => {
    await axios
    .post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/login', {
      email: stateForm.email,
      password: stateForm.password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.accessToken)
      navigate('/')
    })
    .catch((error) => console.log(error))
  }

  const onRegisterHandler = async () => {
    await axios
      .post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/register', stateForm)
      .then((res) => {
        localStorage.setItem('token', res.data)
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  const onSubmit = () => {
    if (location.pathname === '/sign-up') {
      navigate('/about-me', { state: { stateForm } })
    } else if (location.pathname === '/about-me') {
      onRegisterHandler()
    } else if (location.pathname === '/sign-in') {
      onLoginHandler()
    }
  }

  const onClickSubmit = () => {
    setIsSubmitState(true)
  }

  const toggleVisionPassword = (e: React.MouseEvent) => {
    const parentItem = e.currentTarget.parentNode?.parentNode
    if (parentItem) {
      // находим все нужные дочерние элементы
      const inputElement = parentItem.querySelector('.popup-info__input') as HTMLInputElement
      const eyeElement = parentItem.querySelector('.popup-info__input-eye')
      // меняем состояние элементов
      if (inputElement && eyeElement) {
        inputElement.type = inputElement.type === 'password' ? 'text' : 'password'
        eyeElement.classList.toggle('popup-info__input-eye-active')
      }
    }
  }

  useEffect(() => {
    if (location.state && location.state.stateForm) {
      const subscription = watch((value) => dispatch(setStatePopupRegister({ email: location.state.stateForm.email, password: location.state.stateForm.password, passwordConfirm: location.state.stateForm.passwordConfirm, name: value.name, surname: value.surname, phone: value.phone })))
      return () => subscription.unsubscribe()
    }
  }, [dispatch, location.state, watch])

  console.log(stateForm)
  setTimeout(() => {
    console.log(localStorage.getItem('token'))
  }, 5000)

  return (
    <section className='popup-info'>
      <form onSubmit={handleSubmit(onSubmit)} className='popup-info__form' noValidate>
        <h1 className='popup-info__title'>{propsItems?.textTitle}</h1>
        <div className='popup-info__inputs-container'>
          <div className='popup-info__inputs'>
            <label htmlFor='email' className='popup-info__label'>
              {propsItems?.firstInput}
            </label>
            <div className='popup-info__input-full'>
              <input
                type='email'
                id='email'
                className='popup-info__input'
                placeholder={propsItems?.firstInputPlaceholder}
                {...(location.pathname !== '/about-me'
                  ? register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Некорректная почта',
                      },
                    })
                  : register('name', {
                      required: true,
                    }))}
              />
              {location.pathname !== '/about-me' && (
                <div className='popup-info__input-buttons'>
                  <span className={!errors?.email && stateForm.email !== '' ? 'popup-info__input-accept' : 'popup-info__input-accept popup-info__input-error-disabled'} />
                  <span className={errors?.email && stateForm.email !== '' ? 'popup-info__input-error' : 'popup-info__input-error popup-info__input-error-disabled'} />
                </div>
              )}
            </div>
          </div>
          <div className='popup-info__inputs'>
            <label htmlFor='password' className='popup-info__label'>
              {propsItems?.secondInput}
            </label>
            <div className='popup-info__input-full'>
              <input
                type={location.pathname !== '/about-me' ? 'password' : 'text'}
                id='password'
                className='popup-info__input'
                placeholder={propsItems?.secondInputPlaceholder}
                {...(location.pathname !== '/about-me'
                  ? register('password', {
                      required: true,
                      minLength: {
                        value: 8,
                        message: 'Минимальная длина пароля 8 символов',
                      },
                    })
                  : register('surname', {
                      required: true,
                    }))}
              />
              {location.pathname !== '/about-me' && (
                <div className='popup-info__input-buttons'>
                  <button className='popup-info__input-eye' onClick={toggleVisionPassword} type='button' />
                  {stateForm.password !== '' && (
                    <>
                      {!errors?.password && <span className='popup-info__input-accept' />}
                      {errors?.password && <span className='popup-info__input-error' />}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {(location.pathname === '/sign-up' || location.pathname === '/about-me') && (
            <div className='popup-info__inputs'>
              <label htmlFor={propsItems?.path === '/sign-up' ? 'passwordConfirm' : 'phone'} className='popup-info__label'>
                {propsItems?.thirdInput}
              </label>
              <div className='popup-info__input-full'>
                <input
                  type={location.pathname === '/sign-up' ? 'password' : 'number'}
                  id='passwordConfirm'
                  className='popup-info__input'
                  placeholder={propsItems?.thirdInputPlaceholder}
                  {...(location.pathname !== '/about-me'
                    ? register('passwordConfirm', {
                        required: true,
                        validate: (value) => value === stateForm.password || 'Пароли не совпадают',
                      })
                    : register('phone', {
                        required: true,
                        pattern: {
                          value: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
                          message: 'Некорректный номер',
                        },
                      }))}
                />
                {location.pathname !== '/about-me' && (
                  <div className='popup-info__input-buttons'>
                    <button className='popup-info__input-eye' onClick={toggleVisionPassword} type='button' />
                    {stateForm.passwordConfirm !== '' && (
                      <>
                        {!errors?.passwordConfirm && <span className='popup-info__input-accept' />}
                        {errors?.passwordConfirm && <span className='popup-info__input-error' />}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className='popup-info__conainer-text-error'>
            {isSubmitState && (
              <>
                <span className={`popup-info__input-text-error ${errors?.email && typeof errors.email === 'object' ? 'visible' : 'hidden'}`}>{errors?.email && typeof errors.email === 'object' && (errors.email as FieldError).message}</span>
                <span className={`popup-info__input-text-error ${errors?.password && typeof errors.password === 'object' ? 'visible' : 'hidden'}`}>{errors?.password && typeof errors.password === 'object' && (errors.password as FieldError).message}</span>
                {location.pathname === '/sign-up' && (
                  <span className={`popup-info__input-text-error ${errors?.passwordConfirm && typeof errors.passwordConfirm === 'object' ? 'visible' : 'hidden'}`}>{errors?.passwordConfirm && typeof errors.passwordConfirm === 'object' && (errors.passwordConfirm as FieldError).message}</span>
                )}
                {location.pathname === '/about-me' && <span className={`popup-info__input-text-error ${errors?.phone && typeof errors.phone === 'object' ? 'visible' : 'hidden'}`}>{errors?.phone && typeof errors.phone === 'object' && (errors.phone as FieldError).message}</span>}
              </>
            )}
          </div>
        </div>
        <div className='popup-info__inputs-container'>
          <button type='submit' className='popup-info__button' onClick={onClickSubmit}>
            Продолжить
          </button>
        </div>
        <div className={location.pathname !== '/about-me' ? 'popup-info__text' : 'popup-info__text popup-info__text-about'}>
          {location.pathname !== '/about-me' && (
            <>
              <p className='popup-info__text-info'>{propsItems?.textRedirect}</p>
              <Link to={propsItems?.textUrl || '/default-path'} className='popup-info__text-link'>
                {propsItems?.textLink || 'Некорректное поле'}
              </Link>
            </>
          )}
        </div>
      </form>
    </section>
  )
}
