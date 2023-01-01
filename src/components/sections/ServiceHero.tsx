interface Props {
	title: string;
	description: string;
}

const ServiceHero = ({ title, description }: Props) => {
	return (
		<section
			className="section-space-b flex flex-col items-center justify-center gap-8 bg-peach bg-[top_right] bg-no-repeat py-24 text-center text-white sm-max:-mx-40 sm-max:px-40 sm:mx-0 sm:rounded-2xl md:py-16 lg:bg-[center_right]"
			style={{
				backgroundImage:
					"url('/assets/web-design/desktop/bg-pattern-intro-web.svg')",
			}}>
			<h1 className="heading-1">{title}</h1>
			<p className="max-w-md">{description}</p>
		</section>
	);
};

export default ServiceHero;
