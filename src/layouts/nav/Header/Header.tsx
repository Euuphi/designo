"use client";

import { useEffect, useState } from "react";
import useBreakpoints from "@/hooks/useBreakpoints";
// Assets
import logoDark from "@assets/shared/desktop/logo-dark.png";
import IconHamburger from "@assets/shared/mobile/icon-hamburger.svg";
import IconClose from "@assets/shared/mobile/icon-close.svg";
// Components
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import HeaderMobileNav from "./HeaderMobileNav";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { md } = useBreakpoints("md");

	const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

	useEffect(() => {
		setShowMobileMenu(false);
	}, [md]);

	return (
		<header className="container z-50 mx-auto flex h-24 items-center justify-between py-9 px-6 sm:h-28">
			<Link href="/">
				<img
					className="max-h-7"
					src={logoDark.src}
					alt="Designo company logo"
				/>
			</Link>
			<HeaderNav />
			<button className="md:hidden" onClick={toggleMobileMenu}>
				{showMobileMenu ? (
					<IconClose className="max-w-7 max-h-7" />
				) : (
					<IconHamburger className="max-w-7 max-h-7" />
				)}
			</button>
			<div
				className={`absolute left-0 z-50 h-[calc(100%-7rem)] w-full bg-black bg-opacity-50 transition-all duration-300 ${
					showMobileMenu ? "show top-24 sm:top-28" : "hide top-0"
				}`}
				onClick={() => setShowMobileMenu(false)}>
				<HeaderMobileNav />
			</div>
		</header>
	);
};

export default Header;
