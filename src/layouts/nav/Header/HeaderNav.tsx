import NavLinks from "../NavLinks";

const HeaderNav = () => {
	return (
		<nav className="hidden bg-black px-6 py-0 text-sm uppercase tracking-[.125rem] text-black md:block md:bg-transparent">
			<ul className="flex flex-row gap-8">
				<NavLinks />
			</ul>
		</nav>
	);
};

export default HeaderNav;
