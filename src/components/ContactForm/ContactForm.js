import React from 'react';

import Button from '../UI/Button/Button';

function contactForm() {
  return (
    <form>
      <fieldset>
        <legend>Свяжитесь с нами</legend>
        <input type='text' placeholder='Ваше Имя' />
        <input type='number' placeholder='Ваше Телефон' />
        <input type='email' placeholder='Ваше E-mail' />
        <textarea placeholder='Сообщение'></textarea>
        <Button type='submit'>Отправить</Button>
      </fieldset>
    </form>
  )
}

export default contactForm
