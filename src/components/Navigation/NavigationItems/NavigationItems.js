import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

function navigationItems() {
  return (
    <ul className={styles.list}>
        <NavigationItem link='/' exact>Главная</NavigationItem>
        <NavigationItem link='/catalog/' exact>Каталог</NavigationItem>
        <NavigationItem link='/w' exact>Калькулятор</NavigationItem>
        <NavigationItem link='/contacts/' exact>Контакты</NavigationItem>
    </ul>
  )
}

export default navigationItems
