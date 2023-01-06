import Head from "next/head";
import Image from "next/image";

const About = () => {
	return (
		<>
			<Head>
				<title>About Us</title>
			</Head>
			<div className="container">
				<main className="relative grid overflow-hidden rounded-2xl bg-peach text-white xl:grid-cols-[1fr_476px]">
					<div className="px-6 py-20 text-white md:px-14 md:py-16 lg:px-24 lg:py-28">
						<h1 className="heading-1 mb-6">About Us</h1>
						<p>
							Founded in 2010, we are a creative agency that
							produces lasting results for our clients. We’ve
							partnered with many startups, corporations, and
							nonprofits alike to craft designs that make real
							impact. We’re always looking forward to creating
							brands, products, and digital experiences that
							connect with our clients’ audiences.
						</p>
					</div>
					<div>
						{/* Mobile */}
						<Image
							className="md:hidden"
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
							width={476}
							height={480}
							style={{
								objectFit: "cover",
							}}
							alt="People gathered around table with laptops and phones discussing work"
						/>
					</div>
				</main>
			</div>
		</>
	);
};

export default About;
