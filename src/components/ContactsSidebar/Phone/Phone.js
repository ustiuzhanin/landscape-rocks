import React from 'react';
import styles from './Phone.module.css'

function phone() {
  return (
    <React.Fragment>
      
      <a className={styles.phone} href="tel:555-555-5555">
        <svg className={styles.svg} width='14' height='14' version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578 578"><path d="M578 456c1 10-2 18-9 25l-81 80a59 59 0 0 1-43 17 312 312 0 0 1-101-24 534 534 0 0 1-188-132A671 671 0 0 1 40 270 384 384 0 0 1 3 165a152 152 0 0 1-2-43 59 59 0 0 1 16-32L98 9c6-6 12-9 20-9 5 0 10 2 14 5l10 11 66 124c3 7 4 14 3 22-2 8-5 14-11 19l-30 30-2 4-1 5c2 8 5 18 11 29a387 387 0 0 0 66 84 405 405 0 0 0 85 67l22 9 8 2 4-1 4-2 35-36c7-6 15-10 25-10 7 0 13 2 17 4l119 70c8 5 13 12 15 20z"/></svg>
        555-555-5555</a>
    </React.Fragment>
  )
}

export default phone
