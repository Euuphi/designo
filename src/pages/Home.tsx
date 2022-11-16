import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
// Assets
import heroImage from "@/assets/home/desktop/image-hero-phone.png";
// Components
import Button from "@/components/Button";

const Home = () => {
    const sm = useMediaQuery(screens.sm);

    return (
        <div className={`${sm ? "container " : null}mx-auto mb-96`}>
            <main
                className={
                    "flex flex-col items-center overflow-hidden px-6 pt-20 text-white sm:rounded-2xl lg:flex-row lg:justify-between lg:py-28 lg:px-12 xl:px-24 " +
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
            <section className="px-6 sm:px-0">Cards</section>
            <section className="px-6 sm:px-0">Illustrations</section>
        </div>
    );
};

export default Home;
