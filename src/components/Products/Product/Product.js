import React from 'react';

import styles from './Product.module.css';
import Button from '../../UI/Button/Button';

function product(props) {
  return (
    <div className={styles.product}>
      <img src={props.url} alt='test' />
      <h3>{props.caption}</h3>
      <p>{props.desc}</p>
      <Button type='button'>Подробнее</Button>
    </div>
  )
}

export default product
