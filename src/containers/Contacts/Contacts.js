import React from 'react';

import styles from './Contacts.module.css';
import ContactsSidebar from '../../components/ContactsSidebar/ContactsSidebar';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <h1>Свяжитесь с нами!</h1>
      <p className={styles.text}>Чтобы получить оперативную информацию оставьте свои контакты на нашем сайте или самостоятельно свяжитесь с менеджером:</p>
      <div className={styles.wrapper}>
        <ContactsSidebar />
        <ContactForm title='Заказать звонок' btnTitle="Позвоните мне!" name phone inner />
      </div>
    </section>
  )
}

export default Contacts
