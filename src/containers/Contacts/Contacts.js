import React from 'react';

import styles from './Contacts.module.css';
import ContactsSidebar from '../../components/ContactsSidebar/ContactsSidebar';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <h1>Свяжиеть с нами!</h1>
      <p className={styles.text}>Чтобы получить оперативную информацию оставьте свои контакты на нашем сайте или самостоятельно свяжитесь с менеджером:</p>
      <ContactsSidebar />
      <ContactForm title='Заказать звонок' btnTitle="Позвоните мне!" name phone />
    </section>
  )
}

export default Contacts
