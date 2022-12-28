import Link from "next/link";

const NavLinks = () => {
	const activeClassName = "text-peach-light";

	return (
		<>
			<li className="hover:underline">
				<Link href="/about" className="inline-block w-full">
					Our Company
				</Link>
			</li>
			<li className="hover:underline">
				<Link href="/locations" className="inline-block w-full">
					Locations
				</Link>
			</li>
			<li className="hover:underline">
				<Link href="/contact" className="inline-block w-full">
					Contact
				</Link>
			</li>
		</>
	);
};

export default NavLinks;
