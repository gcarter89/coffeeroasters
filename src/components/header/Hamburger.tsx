import {ReactComponent as IconHamburgerOpen} from '../../assets/shared/mobile/icon-hamburger.svg';
import {ReactComponent as IconHamburgerClose} from '../../assets/shared/mobile/icon-close.svg';

export default function Hamburger(props: {
    hamburgerOpen:boolean
    handleHamburgerClick:Function
}) {
    return (
        <>
            { props.hamburgerOpen ? <IconHamburgerClose onClick={(e) => props.handleHamburgerClick(e)} /> : <IconHamburgerOpen onClick={(e) => props.handleHamburgerClick(e)} /> }
        </>
    )
}