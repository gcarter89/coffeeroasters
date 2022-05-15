import Hamburger from "./Hamburger";
import styles from './Nav.module.scss';

export default function Nav(props: {
    hamburgerOpen:boolean
    handleHamburgerClick:Function
}

) {
    return (
        <nav>
            <div className={styles.nav__hamburger}>
                <Hamburger hamburgerOpen={props.hamburgerOpen} handleHamburgerClick={props.handleHamburgerClick} />
            </div>
            <div className={styles.nav__links}>
                <a onClick={(e) => e.preventDefault()} href="/">HOME</a>
                <a onClick={(e) => e.preventDefault()} href="/about">ABOUT US</a>
                <a onClick={(e) => e.preventDefault()} href="/plan">CREATE YOUR PLAN</a>
            </div>
        </nav>
        
        
    )
}