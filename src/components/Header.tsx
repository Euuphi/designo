import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "@/assets/shared/desktop/logo-dark.png";
import iconHamburger from "@/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "@/assets/shared/mobile/icon-close.svg";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

    const activeClassName = "text-peach-light md:";

    return (
        <header className="relative flex items-center justify-between py-9 px-6">
            <NavLink to="/">
                <img
                    className="max-h-7"
                    src={logoDark}
                    alt="Designo company logo"
                />
            </NavLink>
            <button onClick={toggleMobileMenu}>
                {showMobileMenu ? (
                    <img className="max-w-7 max-h-7" src={iconClose} />
                ) : (
                    <img className="max-w-7 max-h-7" src={iconHamburger} />
                )}
            </button>

            <div
                className={`absolute left-0 z-50 h-screen w-full bg-black bg-opacity-50 transition-all duration-300 ${
                    showMobileMenu ? "show top-full" : "hide top-0"
                }`}
            >
                <nav className="bg-black py-12 px-6 tracking-[2px] text-white">
                    <ul className="flex flex-col gap-8 text-2xl uppercase">
                        <li className="hover:underline">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Our Company
                            </NavLink>
                        </li>
                        <li className="hover:underline">
                            <NavLink
                                to="/locations"
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Locations
                            </NavLink>
                        </li>
                        <li className="hover:underline">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
