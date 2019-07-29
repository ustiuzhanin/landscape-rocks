import React from 'react';

import styles from './Button.module.css';

function button(props) {
  const classes = [styles.button, props.class].join(' ');
  

  return (
    <button className={classes} type={props.type} onClick={props.clicked}>{props.children}</button>
  )
}

export default button
