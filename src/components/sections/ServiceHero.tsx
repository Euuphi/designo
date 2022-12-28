import bgImage from "@assets/web-design/desktop/bg-pattern-intro-web.svg";

interface Props {
	title: string;
	description: string;
}

const ServiceHero = ({ title, description }: Props) => {
	return (
		<section
			className="-mx-40 flex flex-col items-center justify-center gap-8 bg-peach bg-[top_right] bg-no-repeat py-24 px-8 text-center text-white sm:mx-0 sm:rounded-2xl md:py-16 lg:bg-[center_right]"
			style={{ backgroundImage: `url('${bgImage}')` }}>
			<h1 className="heading-1">{title}</h1>
			<p className="max-w-md">{description}</p>
		</section>
	);
};

export default ServiceHero;
