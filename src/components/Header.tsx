import { NavLink } from "react-router-dom";
import logoDark from "@/assets/shared/desktop/logo-dark.png";
import iconHamburger from "@/assets/shared/mobile/icon-hamburger.svg";

const Header = () => {
    return (
        <header className="relative flex items-center justify-between py-9 px-6">
            <NavLink to="/">
                <img
                    className="max-h-7"
                    src={logoDark}
                    alt="Designo company logo"
                />
            </NavLink>
            <img className="max-w-7 max-h-7" src={iconHamburger} />
            <div className="absolute top-full left-0 z-50 h-screen w-full bg-black bg-opacity-50">
                <nav className="bg-black py-12 px-6 tracking-[2px] text-white">
                    <ul className="space-y-8 text-2xl uppercase">
                        <li>
                            <NavLink to="/about">Our Company</NavLink>
                        </li>
                        <li>
                            <NavLink to="/locations">Locations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
