import React from 'react';

import Button from '../UI/Button/Button';
import styles from './ContactForm.module.css';
import Logo from '../../assets/icons/contact.svg';

function contactForm(props) {
  const svgIcons = {
    name: (
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="15" height="15"><path d="M175 171.173c38.914 0 70.463-38.318 70.463-85.586C245.463 38.318 235.105 0 175 0s-70.465 38.318-70.465 85.587C104.535 132.855 136.084 171.173 175 171.173zM41.909 301.853C41.897 298.971 41.885 301.041 41.909 301.853L41.909 301.853zM308.085 304.104C308.123 303.315 308.098 298.63 308.085 304.104L308.085 304.104z" fill="#ababab" /><path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761 s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131 c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496 c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z" fill="#ababab"/></svg>),
    phone: (
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578 578" width="15" height="15"><path d="M578 456c1 10-2 18-9 25l-81 80a59 59 0 0 1-43 17 312 312 0 0 1-101-24 534 534 0 0 1-188-132A671 671 0 0 1 40 270 384 384 0 0 1 3 165a152 152 0 0 1-2-43 59 59 0 0 1 16-32L98 9c6-6 12-9 20-9 5 0 10 2 14 5l10 11 66 124c3 7 4 14 3 22-2 8-5 14-11 19l-30 30-2 4-1 5c2 8 5 18 11 29a387 387 0 0 0 66 84 405 405 0 0 0 85 67l22 9 8 2 4-1 4-2 35-36c7-6 15-10 25-10 7 0 13 2 17 4l119 70c8 5 13 12 15 20z" fill="#ababab"/></svg>),
    email: (
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="15" height="15"><g fill="#ababab"><path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986 c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/><path d="M13.684 2.271C13.504 2.103 13.262 2 12.993 2H1.007C.74 2 .498 2.104.318 2.273L7 8 13.684 2.271zM0 2.878L0 11.186 4.833 7.079zM9.167 7.079L14 11.186 14 2.875z"/></g></svg>)
  }

  let name, phone, email, message = null;

  console.log(props)

  if(props.name) {
    name = (
      <React.Fragment>
        <label className={styles.label} htmlFor='name'>Ваше Имя:</label>
        <span className={styles.iconSpan}>
          <input className={styles.formField} id='name' type='text' placeholder='Имя' />
          {svgIcons.name}
        </span>
      </React.Fragment>
      
    );
  } 
  if (props.phone) {
    phone = (
      <React.Fragment>
        <label className={styles.label} htmlFor='phone'>Ваш Телефон:</label>
        <span className={styles.iconSpan}>
          <input className={styles.formField} id='phone' type='tel' placeholder='Телефон' />
        {svgIcons.phone}
        </span>
      </React.Fragment>
    );
  } 
  if (props.email) {
    email = (
      <React.Fragment>
        <label className={styles.label} htmlFor='email'>Ваш E-mail:</label>
        <span className={styles.iconSpan}>
          <input className={styles.formField} id='email' type='email' placeholder='E-mail' />
          {svgIcons.email}
        </span>
      </React.Fragment>
    )
  }
  if (props.message) {
    message = (
      <React.Fragment>
        <label className={styles.label} htmlFor='message'>Сообщение:</label>
        <textarea className={styles.formField} id='message' placeholder='Сообщение'></textarea>
      </React.Fragment>
    )
  }

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
        <img className={styles.logo} src={Logo} width="25" height="25" alt="test" />
        {props.title}</legend>

        {name}
        {phone}
        {email}
        {message}

        <Button type='submit'>{props.btnTitle}</Button>
      </fieldset>
    </form>
  )
}

export default contactForm
