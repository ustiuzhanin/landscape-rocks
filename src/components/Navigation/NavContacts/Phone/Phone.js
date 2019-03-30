import React from 'react';
import styles from './Phone.module.css'

function phone() {
  return (
    <a className={styles.phone} href="tel:555-555-5555">555-555-5555</a>
  )
}

export default phone
