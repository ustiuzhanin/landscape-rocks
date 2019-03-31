import React from 'react';

import styles from './Product.module.css';

function product(props) {
  return (
    <div className={styles.product}>
      <img className={styles.product} src={props.url} alt='test' />
      <h3>{props.caption}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default product
