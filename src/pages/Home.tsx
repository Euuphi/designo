import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
import heroImage from "@/assets/home/desktop/image-hero-phone.png";
import Button from "@/components/Button";

const Home = () => {
    const sm = useMediaQuery(screens.sm);

    return (
        <div className="mb-96 sm:container">
            <main className="flex flex-col items-center overflow-hidden bg-peach px-6 pt-20 text-white sm:rounded-2xl">
                <div className="flex max-w-[21rem] flex-col items-center gap-6 text-center md:max-w-[30rem] md:gap-8">
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
