import React from 'react';

import styles from './Button.module.css';

function button(props) {
  const classes = [styles.button, props.class].join(' ');
  

  return (
    <button className={classes} type={props.type}>{props.children}</button>
  )
}

export default button
