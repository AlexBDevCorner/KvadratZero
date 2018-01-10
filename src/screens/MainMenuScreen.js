import React from 'react'
import Buttons from '../components/core/buttons'

export default () => (
  <div>
    <Buttons.NavButton path="create_game" text="Создать"/>
    <Buttons.NavButton path="start_game" text="Начать"/>
    <Buttons.NavButton path="load_game" text="Загрузить"/>
    <Buttons.ExitButton text="Выйти"/>
  </div>
);
