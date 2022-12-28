interface Props {
	icon: SVGRectElement;
	title: string;
	text: string;
}

const IllustrationCard = ({ icon, title, text }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:text-center">
			<div>
				<h2 className="heading-3 mb-8 uppercase md:mb-4 lg:mb-8">
					{title}
				</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default IllustrationCard;
