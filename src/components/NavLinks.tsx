import { NavLink } from "react-router-dom";

const NavLinks = () => {
    const activeClassName = "text-peach-light";

    return (
        <>
            <li className="hover:underline">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `inline-block w-full ${
                            isActive ? activeClassName : undefined
                        }`
                    }
                >
                    Our Company
                </NavLink>
            </li>
            <li className="hover:underline">
                <NavLink
                    to="/locations"
                    className={({ isActive }) =>
                        `inline-block w-full ${
                            isActive ? activeClassName : undefined
                        }`
                    }
                >
                    Locations
                </NavLink>
            </li>
            <li className="hover:underline">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `inline-block w-full ${
                            isActive ? activeClassName : undefined
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );
};

export default NavLinks;
