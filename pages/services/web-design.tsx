import ProjectCard from "@/components/partials/ProjectCard";
import ServiceHero from "@/components/sections/ServiceHero";

const WebDesign = () => {
	return (
		<main className="container">
			<ServiceHero
				title="Web Design"
				description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			/>
			<section className="mt-24 grid lg:grid-cols-3">
				<ProjectCard
					title="asdfasf"
					description="WLHLWKJLKWJ"
					image={{
						src: "/assets/web-design/desktop/image-express.jpg",
					}}
				/>
			</section>
		</main>
	);
};

export default WebDesign;
