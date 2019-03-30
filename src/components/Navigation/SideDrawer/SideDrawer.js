import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavContacts from '../NavContacts/NavContacts';

const sideDrawer = ( props ) => {
    let attachedstyles = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedstyles = [styles.SideDrawer, styles.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedstyles.join(' ')}>
                <div className={styles.Logo}>
                    <p>Logo</p>
                </div>
                <nav>
                    <NavigationItems />
                    <NavContacts />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;