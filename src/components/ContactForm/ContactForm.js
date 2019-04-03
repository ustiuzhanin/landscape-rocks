import React from 'react';

import Button from '../UI/Button/Button';
import styles from './ContactForm.module.css';
import Logo from '../../assets/icons/contact.svg';

function contactForm() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
        <img className={styles.logo} src={Logo} width="25" height="25" />
        Свяжитесь с нами!</legend>

        <label className={styles.label} htmlFor='name'>Ваше Имя:</label>
        <input className={styles.formField} id='name' type='text' placeholder='Имя' />

        <label className={styles.label} htmlFor='phone'>Ваш Телефон:</label>
        <input className={styles.formField} id='phone' type='number' placeholder='Телефон' />

        <label className={styles.label} htmlFor='email'>Ваш E-mail:</label>
        <input className={styles.formField} id='email' type='email' placeholder='E-mail' />

        <label className={styles.label} htmlFor='message'>Сообщение:</label>
        <textarea className={styles.formField} id='message' placeholder='Сообщение'></textarea>
        <Button type='submit'>Отправить</Button>
      </fieldset>
    </form>
  )
}

export default contactForm
