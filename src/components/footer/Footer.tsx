import styles from './Footer.module.scss'
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logoContainer}>
                <Logo />
            </div>
            <div className={styles.footer__links}>
                <Link to='/'>Home</Link>
                <Link to='about'>About us</Link>
                <Link to='plan'>Create your plan</Link>
            </div>
            <div className={styles.footer__icons}>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><Facebook /></a>
                <a href='https://www.twitter.com' target="_blank" rel="noreferrer"><Twitter /></a>
                <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><Instagram /></a>
            </div>
            
        </footer>
    )
}