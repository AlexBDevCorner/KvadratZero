import React from 'react'
import Buttons from '../components/core/buttons'

const { NavButton, ExitButton } = Buttons

export default () => (
  <div>
    <NavButton path="create_game" text="Создать"/>
    <NavButton path="start_game" text="Начать"/>
    <NavButton path="load_game" text="Загрузить"/>
    <ExitButton text="Выйти"/>
  </div>
);
