import React from 'react';

import styles from './ProductOrder.module.css';
import ContactForm from '../../../components/ContactForm/ContactForm';

function productOrder(props) {
  console.log(props)
  return (
    <section className={styles.productOrder}>
      <ContactForm {...props.location.state} />
    </section>
  )
}

export default productOrder
