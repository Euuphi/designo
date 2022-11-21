import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
// Assets
import heroImage from "@/assets/home/desktop/image-hero-phone.png";

import illustrationPassionate from "@/assets/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "@/assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "@/assets/home/desktop/illustration-friendly.svg";
// Components
import Button from "@/components/Button";
import WebDesignCard from "@/components/ServiceCards/WebDesignCard";
import IllustrationCard from "@/components/IllustrationCard";
import AppDesignCard from "@/components/ServiceCards/AppDesignCard";
import GraphicDesignCard from "@/components/ServiceCards/GraphicDesignCard";

const Home = () => {
    const sm = useMediaQuery(screens.sm);

    return (
        <div className={`${sm ? "container " : null}mx-auto`}>
            <main
                className={
                    "mb-28 flex flex-col items-center overflow-hidden px-6 pt-20 text-white sm:rounded-2xl lg:flex-row lg:justify-between lg:py-28 lg:px-12 xl:px-24 " +
                    "bg-peach bg-hero bg-left bg-no-repeat sm:bg-[center_right_-235px] lg:bg-right"
                }
            >
                <div className="flex max-w-[21rem] flex-col items-center gap-6 text-center md:max-w-[30rem] md:gap-8 lg:items-start lg:text-left">
                    <h1 className="heading-1">
                        Award-winning custom designs and digital branding
                        solutions
                    </h1>
                    <p>
                        With over 10 years in the industry, we are experienced
                        in creating fully responsive websites, app design, and
                        engaging brand experiences. Find out more about our
                        services.
                    </p>
                    <Button text="Learn More" />
                </div>
                <img
                    className="max-w-screen w-80 translate-y-[30%] scale-[2]"
                    src={heroImage}
                    alt="Iphone displaying vase image and word 'Frame'"
                />
            </main>
            <section className="mb-28 grid grid-cols-1 gap-x-8 gap-y-6 px-6 sm:px-0 lg:grid-cols-2">
                <WebDesignCard />
                <AppDesignCard />
                <GraphicDesignCard />
            </section>
            <section className="flex flex-col gap-20 px-6 sm:px-0 lg:flex-row">
                <IllustrationCard
                    imgSrc={illustrationPassionate}
                    title="Passionate"
                    text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                />
                <IllustrationCard
                    imgSrc={illustrationResourceful}
                    title="Resourceful"
                    text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
                />
                <IllustrationCard
                    imgSrc={illustrationFriendly}
                    title="Friendly"
                    text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                />
            </section>
        </div>
    );
};

export default Home;
