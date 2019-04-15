import React from 'react';

import { Link } from 'react-router-dom'
import styles from './Questions.module.css';

function questions() {
  return (
    <section className={styles.questions}>
        <h3 className={styles.title}>Консультация по услуам</h3>
        <p>Lorem ipsum dolor sit amet, pro ex vitae diceret. Eu errem utinam alterum per, in vitae cetero cotidieque pri. Ne sed clita sapientem, et usu modo partiendo sententiae. Autem periculis expetendis no est, nulla patrioque repudiandae vim in.</p>
        <Link className={styles.link} to={{
          pathname: '/contacts/questions',
          state: {
            name: true,
            phone: true,
            email: true,
            message: true,
            title: 'Задать вопрос',
            btnTitle: 'Отправить'
          }
        }}>
          Задать вопрос
        </Link>
    </section>
  )
}

export default questions
