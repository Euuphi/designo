import NavLinks from "../NavLinks";

const HeaderMobileNav = () => {
	return (
		<nav className="bg-black py-12 px-6 text-2xl uppercase tracking-[.125rem] text-white md:hidden">
			<ul className="flex flex-col gap-8">
				<NavLinks />
			</ul>
		</nav>
	);
};

export default HeaderMobileNav;
