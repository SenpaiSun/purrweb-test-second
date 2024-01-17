import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import Productivity from '../../image/g10.png'

export default function Profile() {
  return (
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
            <dd className='profile__data'>Анастасия</dd>
          </dl>
          <dl className='profile__data-container'>
            <dt className='profile__label'>Фамилия</dt>
            <dd className='profile__data'>Филатовна</dd>
          </dl>
          <dl className='profile__data-container'>
            <dt className='profile__label'>Телефон</dt>
            <dd className='profile__data'>+7 908 555 35 35</dd>
          </dl>
          <dl className='profile__data-container'>
            <dt className='profile__label'>Электронная почта</dt>
            <dd className='profile__data'>nastie203@mail.ru</dd>
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
      <section>
        <div>
          <div>
            <h3>Подписываете ли вы соглашение о неразглашении?</h3>
            <p>Конечно!</p>
            <p>Наша студия мобильной разработки и UI/UX дизайна гарантирует предотвращение утечки конфиденциальной информации и ее защиту.</p>
          </div>
          <div>
            <h3>Сколько займет создание MVP?</h3>
            <p>Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев.</p>
          </div>
          <div>
            <h3>Предоставляете ли вы маркетинговые услуги?</h3>
            <p>Наши сильные стороны - UI / UX, разработка, контроль качества и менеджмент. Не маркетинг. Мы не стремимся к достижению «средних» результатов, поэтому вам лучше найти для этого настоящих экспертов по маркетингу и агентство.</p>
          </div>
          <div>
            <h3>Различается ли MVP от прототипов?</h3>
            <p>В отличие от прототипов, MVP - это функциональный продукт, а не просто набор бумажных набросков.</p>
            <p>MVP это своего рода прототип, но процесс разработки занимает чуть больше времени, а его техническая начинка более сложная. Разработка MVP необходима как демонстрационная версия продукта для проверки жизнеспособности идеи.</p>
            <p>Это как-то работает (хотя и не то же самое, что в плохом исполнении) и уже приносит реальную пользу конечным пользователям. Он должен быть вашей «истинной» отправной точкой, поэтому вы можете использовать его, чтобы начать отслеживать намерение покупки (сколько пользователей превратится в клиентов) или получить финансирование.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
