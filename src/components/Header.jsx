import { useEffect, useState } from 'react'
import ButtonMobile from './ButtonMobile';
import NavigationDesktop from './NavigationDesktop';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
    }, [])
    return (
        <header className="header">
            <a href='/' className="header__logo">
                <img src="images/logo.svg" alt="image logo" />
            </a>
            <div className="header__navigation">
                {(width < 768) ? <ButtonMobile /> : <NavigationDesktop /> }
            </div>
        </header>
    )
}

export default Header