import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function article(props) {
  return (
    <article className={styles.article}>
      <Link
        to={{
          pathname: '/articles/' + props.id,
          state: props
        }}
      >
        <div className={styles.imgWrapper}>
          <img src={props.url} width='80' height='72' />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.capture}>{props.capture}</p>
        </div>
      </Link>
    </article>
  );
}

export default article;
