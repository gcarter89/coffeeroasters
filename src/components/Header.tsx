import Nav from './Nav';
import {ReactComponent as Logo} from '../assets/shared/desktop/logo.svg';
import styles from './Header.module.scss';
import React from 'react';



export default function Header (props: {
    hamburgerOpen: boolean,
    handleHamburgerClick: Function
}
) {
    return (
        <header className={styles.header}>
            <div className={styles.header__logoContainer}>
                <Logo />
            </div>
            <Nav hamburgerOpen={props.hamburgerOpen} handleHamburgerClick={props.handleHamburgerClick} />
        </header>
    )
}