import React from "react";
import PopupInfo from "../PopupInfo/PopupInfo";

export default function About() {
  const propsItems = {
    textTitle: 'Заполните данные о себе',
    firstInput: 'Имя',
    firstInputPlaceholder: 'Введите имя',
    secondInput: 'Фамилия',
    secondInputPlaceholder: 'Введите фамилию',
    thirdInput: 'Телефон',
    thirdInputPlaceholder: '+7 (333)-333-33-33',
    path: '/about-me',
  }
  return (
    <>
      <PopupInfo propsItems={propsItems}/>
    </>
  )
}