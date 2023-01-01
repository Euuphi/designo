import sanityClient from "@/sanityClient";
import urlFor from "@/utils/urlFor";
import ProjectCard from "@/components/partials/ProjectCard";
import ServiceHero from "@/components/sections/ServiceHero";

const WebDesign = ({ projects }: any) => {
	return (
		<main className="container">
			<ServiceHero
				title="Web Design"
				description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			/>
			<section className="mt-24 grid gap-y-10 gap-x-8 lg:grid-cols-3 lg:gap-y-9">
				{projects.map((project: any) => {
					const { title, description, image } = project;

					return (
						<ProjectCard
							title={title}
							description={description}
							image={{
								src: urlFor(image).url(),
							}}
						/>
					);
				})}
			</section>
		</main>
	);
};

export async function getStaticProps() {
	const projects = await sanityClient.fetch(
		`*[_type == "project"]{
			title,
			description,
			url,
			image {
				asset -> {
					_id,
					url
				},
				caption
			}
	  	}`
	);

	return {
		props: {
			projects,
		},
		revalidate: 60,
	};
}

export default WebDesign;
