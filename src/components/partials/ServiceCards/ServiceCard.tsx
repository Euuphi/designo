// Assets
import RightChevron from "@assets/shared/desktop/icon-right-arrow.svg";
// Hooks
import Link from "next/link";

interface Props {
	bgImage: {
		small?: string;
		medium?: string;
		large: string;
		xLarge?: string;
	};
	title: string;
	to?: string;
	customClass?: string;
}

const ServiceCard = ({ bgImage, title, to, customClass }: Props) => {
	const ServiceCard = (
		<div
			className={`service-card group h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-cover bg-no-repeat text-center uppercase text-white hover:bg-cover ${
				// Add custom classes here if no link wrapper is required
				!to && customClass
			}`}
			style={
				{
					"--bg-image": `url('${bgImage.large}')`,
					backgroundImage: "var(--bg-image)",
				} as React.CSSProperties
			}>
			<div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-transparent py-24 px-14 transition-all duration-300 group-hover:bg-peach/[0.7]">
				<h2 className="heading-2">{title}</h2>
				<span className="flex items-center gap-4 font-medium tracking-[.3125rem]">
					View Projects
					<RightChevron className="transition-transform duration-300 group-hover:translate-x-3" />
				</span>
			</div>
		</div>
	);

	// Wrap component in a link if link is provided
	return to ? (
		<Link href={to} className={customClass}>
			{ServiceCard}
		</Link>
	) : (
		ServiceCard
	);
};

export default ServiceCard;
