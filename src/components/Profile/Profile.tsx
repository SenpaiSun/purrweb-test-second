import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import Productivity from '../../image/g10.png'
import PopupExit from '../popupExit/PopupExit'
import { useSelector } from 'react-redux'

export default function Profile() {
  const statePopupExit = useSelector((state: { popupExit: { isActive: boolean } }) => state.popupExit.isActive)
  const storedUserInfo = localStorage.getItem('userInfo')
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {}

  const openAccordeon = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentItem = e.currentTarget
    // Проверка активности аккордеона
    const isActive = currentItem.classList.contains('profile__container-faq-item-active')
    // Закрытие активных аккордеонов
    document.querySelectorAll('.profile__container-faq-item-active').forEach((item) => item.classList.remove('profile__container-faq-item-active'))
    document.querySelectorAll('.profile__faq-text-active').forEach((item) => item.classList.remove('profile__faq-text-active'))
    // Условие активности для аккордеона
    if (!isActive) {
      currentItem.classList.add('profile__container-faq-item-active')
      const items: NodeListOf<HTMLElement> = currentItem.querySelectorAll('.profile__faq-text')
      items.forEach((item) => {
        item.classList.add('profile__faq-text-active')
      })
    }
  }
  return (
    storedUserInfo && (
      <main className='profile'>
        <section className='profile__container-info'>
          <div className='profile__container'>
            <h1 className='profile__title'>Мой профиль</h1>
            <div className='profile__edit'>
              <span className='profile__edit-button-image'></span>
              <Link to='/about-me' className='profile__edit-button'>
                <p className='profile__edit-button-text'>Редактировать</p>
              </Link>
            </div>
          </div>
          <div className='profile__data-containers'>
            <dl className='profile__data-container'>
              <dt className='profile__label'>Имя</dt>
              <dd className='profile__data'>{userInfo.name || ''}</dd>
            </dl>
            <dl className='profile__data-container'>
              <dt className='profile__label'>Фамилия</dt>
              <dd className='profile__data'>{userInfo.surname || ''}</dd>
            </dl>
            <dl className='profile__data-container'>
              <dt className='profile__label'>Телефон</dt>
              <dd className='profile__data'>{userInfo.phone || ''}</dd>
            </dl>
            <dl className='profile__data-container'>
              <dt className='profile__label'>Электронная почта</dt>
              <dd className='profile__data'>{userInfo.email || ''}</dd>
            </dl>
          </div>
        </section>
        <section className='profile__container-productivity'>
          <div className='profile__productivity'>
            <h2 className='profile__productivity-title'>Ваша продуктивность выросла!</h2>
            <p className='profile__productivity-text'>За прошлую неделю вы выполнили 12 задач</p>
            <button className='profile__productivity-more'>Подробнее</button>
          </div>
          <div className='profile__container-productivity-image'>
            <img src={Productivity} alt='' className='profile__productivity-image' />
          </div>
        </section>
        <section className='profile__faq'>
          <h2 className='profile__faq-title-main'>Часто задаваемые вопросы</h2>
          <ul className='profile__container-faq'>
            <li className='profile__container-faq-item' onClick={(e) => openAccordeon(e)}>
              <h3 className='profile__faq-title'>Подписываете ли вы соглашение о неразглашении?</h3>
              <p className='profile__faq-text'>Конечно!</p>
              <p className='profile__faq-text'>Наша студия мобильной разработки и UI/UX дизайна гарантирует предотвращение утечки конфиденциальной информации и ее защиту.</p>
            </li>
            <li className='profile__container-faq-item' onClick={(e) => openAccordeon(e)}>
              <h3 className='profile__faq-title'>Сколько займет создание MVP?</h3>
              <p className='profile__faq-text'>Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев.</p>
            </li>
            <li className='profile__container-faq-item' onClick={(e) => openAccordeon(e)}>
              <h3 className='profile__faq-title'>Предоставляете ли вы маркетинговые услуги?</h3>
              <p className='profile__faq-text'>Наши сильные стороны - UI / UX, разработка, контроль качества и менеджмент. Не маркетинг. Мы не стремимся к достижению «средних» результатов, поэтому вам лучше найти для этого настоящих экспертов по маркетингу и агентство.</p>
            </li>
            <li className='profile__container-faq-item' onClick={(e) => openAccordeon(e)}>
              <h3 className='profile__faq-title'>Различается ли MVP от прототипов?</h3>
              <p className='profile__faq-text'>В отличие от прототипов, MVP - это функциональный продукт, а не просто набор бумажных набросков.</p>
              <p className='profile__faq-text'>MVP это своего рода прототип, но процесс разработки занимает чуть больше времени, а его техническая начинка более сложная. Разработка MVP необходима как демонстрационная версия продукта для проверки жизнеспособности идеи.</p>
              <p className='profile__faq-text'>
                Это как-то работает (хотя и не то же самое, что в плохом исполнении) и уже приносит реальную пользу конечным пользователям. Он должен быть вашей «истинной» отправной точкой, поэтому вы можете использовать его, чтобы начать отслеживать намерение покупки (сколько пользователей
                превратится в клиентов) или получить финансирование.
              </p>
            </li>
          </ul>
        </section>
        {statePopupExit && <PopupExit />}
      </main>
    )
  )
}
