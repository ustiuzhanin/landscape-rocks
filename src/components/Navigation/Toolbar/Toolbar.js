import React from 'react';

import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Phone from '../../ContactsSidebar/Phone/Phone';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => (
    <header className={styles.toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.logo}>
            <Phone />
            <Logo width={32} height={32} />
        </div>
        <nav className={styles.desktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;