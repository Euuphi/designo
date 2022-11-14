import { useEffect, useState } from "react";
import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
// Assets
import logoDark from "@/assets/shared/desktop/logo-dark.png";
import iconHamburger from "@/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "@/assets/shared/mobile/icon-close.svg";
// Components
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const md = useMediaQuery(screens.md);

    const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

    useEffect(() => {
        setShowMobileMenu(false);
    }, [md]);

    return (
        <header className="relative flex items-center justify-between py-9 px-6">
            <NavLink to="/">
                <img
                    className="max-h-7"
                    src={logoDark}
                    alt="Designo company logo"
                />
            </NavLink>
            {md ? (
                <Nav />
            ) : (
                <button onClick={toggleMobileMenu}>
                    {showMobileMenu ? (
                        <img className="max-w-7 max-h-7" src={iconClose} />
                    ) : (
                        <img className="max-w-7 max-h-7" src={iconHamburger} />
                    )}
                </button>
            )}

            <div
                className={`absolute left-0 z-50 h-screen w-full bg-black bg-opacity-50 transition-all duration-300 ${
                    showMobileMenu ? "show top-full" : "hide top-0"
                }`}
            >
                <Nav />
            </div>
        </header>
    );
};

export default Header;