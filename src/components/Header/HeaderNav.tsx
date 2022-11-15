import { NavLink } from "react-router-dom";
import NavLinks from "../NavLinks";

const HeaderNav = () => {
    return (
        <nav className="bg-black py-12 px-6 text-2xl uppercase tracking-[.125rem] text-white md:bg-transparent md:py-0 md:text-sm md:text-black">
            <ul className="flex flex-col items-start gap-8 md:flex-row">
                <NavLinks />
            </ul>
        </nav>
    );
};

export default HeaderNav;
