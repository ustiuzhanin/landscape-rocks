import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

function navigationItem(props) {
  return (
    <li className={styles.link} onClick={props.clicked}>
      <NavLink 
        to={props.link}
        exact={props.exact}
        activeClassName={styles.active}>{props.children}</NavLink>
    </li>
  )
}

export default navigationItem
