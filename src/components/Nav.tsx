import Hamburger from "./Hamburger";

export default function Nav(props: {
    hamburgerOpen:boolean
    handleHamburgerClick:Function
}

) {
    return (
        <nav>
            <Hamburger hamburgerOpen={props.hamburgerOpen} handleHamburgerClick={props.handleHamburgerClick} />
        </nav>
        
        
    )
}