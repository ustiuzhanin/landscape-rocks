import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import Button from '../../UI/Button/Button';

const sideDrawer = ( props ) => {
    let attachedstyles = [styles.sideDrawer, styles.close];
    if (props.open) {
        attachedstyles = [styles.sideDrawer, styles.open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedstyles.join(' ')}>
                <div>
                    <Logo width={100} height={100} />
                </div>
                <nav className={styles.nav}>
                    <NavigationItems />
                </nav>
                <div className={styles.contacts}>
                    <Button type='button'>Заказать Звонок</Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;