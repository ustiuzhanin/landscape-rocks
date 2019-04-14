import React from 'react';

import styles from './ProductOrder.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

function productOrder(props) {
  console.log(props)
  return (
    <section className={styles.productOrder}>
      <ContactForm name phone email message product={props.location.state.caption} btnTitle='Отправить' image={props.location.state.imgUrl} title='Заказать товар' />
    </section>
  )
}

export default productOrder
