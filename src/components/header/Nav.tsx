import Hamburger from "./Hamburger";
import styles from './Nav.module.scss';
import { Link } from "react-router-dom";

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
                <Link to="/">HOME</Link>
                <Link to="about">ABOUT US</Link>
                <Link to="plan">CREATE YOUR PLAN</Link>
            </div>
        </nav>
        
        
    )
}