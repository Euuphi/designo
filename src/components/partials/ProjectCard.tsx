import Image from "next/image";

interface Props {
	title: string;
	description: string;
	image: {
		src: string;
		caption?: string;
	};
	url?: string;
}

const ProjectCard = ({ title, description, image, url }: Props) => {
	// If url prop exists wrap component in anchor tag
	if (url) {
		return (
			<a className="group" href={url}>
				<div className="relative overflow-hidden rounded-2xl md:grid md:grid-cols-2 lg:block">
					<Image
						src={image.src}
						alt={image.caption ? image.caption : ""}
						height={685}
						width={750}
						style={{ objectFit: "cover" }}
					/>
					<article className="flex min-h-[158px] flex-col justify-center bg-[#fdf3f0] px-7 py-8 group-hover:bg-peach group-hover:text-white">
						<h2 className="heading-3 mb-4 text-center uppercase text-peach group-hover:text-white">
							{title}
						</h2>
						<p className="text-center">{description}</p>
					</article>
				</div>
			</a>
		);
	} else {
		return (
			<div className="relative overflow-hidden rounded-2xl md:grid md:grid-cols-2 lg:block">
				<Image
					src={image.src}
					alt={image.caption ? image.caption : ""}
					height={685}
					width={750}
					style={{ objectFit: "cover" }}
				/>
				<article className="flex min-h-[158px] flex-col justify-center bg-[#fdf3f0] px-7 py-8">
					<h2 className="heading-3 mb-4 text-center uppercase text-peach">
						{title}
					</h2>
					<p className="text-center">{description}</p>
				</article>
			</div>
		);
	}
};

export default ProjectCard;
