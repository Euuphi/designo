import Head from "next/head";
import Image from "next/image";
import LocationLinks from "@/components/partials/LocationLinks";
import IllustrationAustralia from "@assets/shared/desktop/illustration-australia.svg";

const About = () => {
	return (
		<>
			<Head>
				<title>About Us | Designo</title>
			</Head>
			<div className="container">
				<main className="relative flex flex-col overflow-hidden rounded-2xl bg-peach text-white sm:mb-24 md:mb-32 lg:mb-40 xl:flex-row-reverse sm-max:-mx-40 sm-max:px-[8.5rem]">
					<figure className="flex-shrink-0">
						{/* Mobile */}
						<Image
							className="contain md:hidden"
							src="/assets/about/mobile/image-about-hero.jpg"
							width={770}
							height={657}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
						{/* Tablet */}
						<Image
							className="hidden md:block xl:hidden"
							src="/assets/about/tablet/image-about-hero.jpg"
							width={1280}
							height={595}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
						{/* Desktop */}
						<Image
							className="hidden xl:block"
							src="/assets/about/desktop/image-about-hero.jpg"
							width={600}
							height={480}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
					</figure>
					<article className="flex flex-col justify-center bg-about-mobile bg-[right_top_-125px] bg-no-repeat px-6 py-20 md:bg-about-desktop md:bg-right-bottom md:px-14 md:py-16 lg:px-24 lg:py-28">
						<h1 className="heading-1 mb-6 text-center lg:text-left">
							About Us
						</h1>
						<p className=" text-center lg:text-left">
							Founded in 2010, we are a creative agency that
							produces lasting results for our clients. We’ve
							partnered with many startups, corporations, and
							nonprofits alike to craft designs that make real
							impact. We’re always looking forward to creating
							brands, products, and digital experiences that
							connect with our clients’ audiences.
						</p>
					</article>
				</main>
				<section className="relative flex flex-col overflow-hidden rounded-2xl bg-peach-grey text-grey-dark xl:flex-row sm-max:-mx-40 sm-max:px-[8.5rem]">
					<figure className="flex-shrink-0">
						{/* Mobile */}
						<Image
							className="contain md:hidden"
							src="/assets/about/mobile/image-world-class-talent.jpg"
							width={770}
							height={657}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
						{/* Tablet */}
						<Image
							className="hidden md:block xl:hidden"
							src="/assets/about/tablet/image-world-class-talent.jpg"
							width={1280}
							height={595}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
						{/* Desktop */}
						<Image
							className="hidden xl:block"
							src="/assets/about/desktop/image-world-class-talent.jpg"
							width={600}
							height={480}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
					</figure>
					<article className="flex flex-col justify-center bg-circles-three bg-left-top bg-no-repeat px-6 py-20 md:bg-[right_bottom_50px] md:px-14 md:py-16 lg:bg-[left_-140px_bottom] lg:px-24 lg:py-28">
						<h1 className="heading-1 mb-6 text-center text-peach lg:text-left">
							World-class talent
						</h1>
						<p className="mb-8 text-center lg:text-left">
							We are a crew of strategists, problem-solvers, and
							technologists. Every design is thoughtfully crafted
							from concept to launch, ensuring success in its
							given market. We are constantly updating our skills
							in a myriad of platforms.
						</p>
						<p className=" text-center lg:text-left">
							Our team is multi-disciplinary and we are not merely
							interested in form — content and meaning are just as
							important. We give great importance to
							craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality
							outcomes that encapsulates their brand’s story and
							mission.
						</p>
					</article>
				</section>
				<section>
					<LocationLinks
						icon={IllustrationAustralia}
						title="Australia"
					/>
				</section>
			</div>
		</>
	);
};

export default About;
