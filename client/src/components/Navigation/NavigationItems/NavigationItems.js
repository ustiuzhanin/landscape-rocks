import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

function navigationItems(props) {
  return (
    <ul className={styles.list}>
        <NavigationItem 
          link='/' 
          clicked={props.clicked} 
          exact>Главная</NavigationItem>
        <NavigationItem 
          link='/catalog/' 
          clicked={props.clicked} 
          exact>Каталог</NavigationItem>
        <NavigationItem 
          link='/about' 
          clicked={props.clicked} 
          exact>О компании</NavigationItem>
        <NavigationItem 
          link='/articles' 
          clicked={props.clicked} 
          exact>Полезные статьи</NavigationItem>
        <NavigationItem 
          link='/contacts/' 
          clicked={props.clicked} 
          exact>Контакты</NavigationItem>
    </ul>
  )
}

export default navigationItems
