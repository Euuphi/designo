import NavLinks from "../NavLinks";

const FooterNav = () => {
    return (
        <nav className="py-12 px-6 text-sm uppercase tracking-[2px] text-white md:py-0">
            <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
                <NavLinks />
            </ul>
        </nav>
    );
};

export default FooterNav;
