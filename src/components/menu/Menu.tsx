import styles from './Menu.module.scss';
import { Link } from "react-router-dom";


export default function Menu(props: {
    handleHamburgerClick: Function
}) {
    return (
        <nav className={styles.menu__menuNav}>
            <Link onClick={(e) => props.handleHamburgerClick(e)} to="/">Home</Link>
            <Link onClick={(e) => props.handleHamburgerClick(e)} to="about">About Us</Link>
            <Link onClick={(e) => props.handleHamburgerClick(e)} to="plan">Create Your Plan</Link>
        </nav>
    )
}