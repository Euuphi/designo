import { NavLink } from "react-router-dom";

const Nav = () => {
    const activeClassName = "text-peach-light md:";

    return (
        <nav className="bg-black py-12 px-6 text-2xl uppercase tracking-[2px] text-white md:bg-transparent md:py-0 md:text-sm md:text-black">
            <ul className="flex flex-col items-center gap-8 md:flex-row">
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
    );
};

export default Nav;
