import React from 'react';

import Button from '../UI/Button/Button';
import styles from './Questions.module.css';

function questions() {
  return (
    <section className={styles.questions}>
        <h3 className={styles.title}>Консультация по услуам</h3>
        <p>Lorem ipsum dolor sit amet, pro ex vitae diceret. Eu errem utinam alterum per, in vitae cetero cotidieque pri. Ne sed clita sapientem, et usu modo partiendo sententiae. Autem periculis expetendis no est, nulla patrioque repudiandae vim in.</p>
        <Button type='button'>Задать вопрос</Button>
    </section>
  )
}

export default questions
