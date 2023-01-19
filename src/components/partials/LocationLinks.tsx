import Button from "@/components/ui/Button";

interface Props {
	icon: React.ElementType;
	title: string;
	link?: string;
}

const LocationLinks = ({ icon: Icon, title, link }: Props) => {
	return (
		<div className="flex flex-col items-center">
			<figure>
				<Icon />
			</figure>
			<figcaption className="heading-3 mb-8 uppercase">
				{title}
			</figcaption>
			<Button theme="dark" text={title} link={link ? link : "#"} />
		</div>
	);
};

export default LocationLinks;
