import { useEffect, useState } from "react";
import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
// Assets
import logoDark from "@/assets/shared/desktop/logo-dark.png";
import iconHamburger from "@/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "@/assets/shared/mobile/icon-close.svg";
// Components
import { NavLink } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const md = useMediaQuery(screens.md);

    const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

    useEffect(() => {
        setShowMobileMenu(false);
    }, [md]);

    return (
        <header className="container mx-auto flex h-24 items-center justify-between py-9 px-6 sm:h-28">
            <NavLink to="/">
                <img
                    className="max-h-7"
                    src={logoDark}
                    alt="Designo company logo"
                />
            </NavLink>
            {md ? (
                <HeaderNav />
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
                className={`absolute left-0 z-50 h-[calc(100%-7rem)] w-full bg-black bg-opacity-50 transition-all duration-300 ${
                    showMobileMenu ? "show top-24 sm:top-28" : "hide top-0"
                }`}
                onClick={() => setShowMobileMenu(false)}
            >
                <HeaderNav />
            </div>
        </header>
    );
};

export default Header;
