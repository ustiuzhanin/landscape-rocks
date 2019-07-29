import React from 'react';

import styles from './ContactForms.module.css';
import ContactForm from '../../../components/ContactForm/ContactForm';

function contactForms(props) {
  return (
    <section className={styles.contactForm}>
      <ContactForm {...props.location.state} />
    </section>
  )
}

export default contactForms
