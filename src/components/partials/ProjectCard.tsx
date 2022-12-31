import Image from "next/image";

interface Props {
	title: string;
	description: string;
	image: {
		src: string;
		caption?: string;
	};
}

const ProjectCard = ({ title, description, image }: Props) => {
	return (
		<div className="max-w-[350px] overflow-hidden rounded-2xl">
			<Image
				src={image.src}
				alt={image.caption ? image.caption : ""}
				height={320}
				width={350}
			/>
			<article className="bg-[#fdf3f0] px-7 py-8">
				<h2 className="heading-3 mb-4 text-center uppercase text-peach">
					{title}
				</h2>
				<p className="text-center">{description}</p>
			</article>
		</div>
	);
};

export default ProjectCard;
