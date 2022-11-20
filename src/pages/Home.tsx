import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
// Assets
import heroImage from "@/assets/home/desktop/image-hero-phone.png";
import webDesignMobile from "@/assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "@/assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "@/assets/home/desktop/image-web-design-small.jpg";
import webDesignDesktopLarge from "@/assets/home/desktop/image-web-design-large.jpg";
// Components
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
    const sm = useMediaQuery(screens.sm);

    return (
        <div className={`${sm ? "container " : null}mx-auto mb-96`}>
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
            <section className="mb-28 grid grid-cols-1 px-6 sm:px-0 lg:grid-cols-2">
                <ServiceCard
                    bgImage={{
                        small: webDesignMobile,
                        medium: webDesignTablet,
                        large: webDesignDesktop,
                        xLarge: webDesignDesktopLarge,
                    }}
                    title="Web Design"
                />
            </section>
            <section className="px-6 sm:px-0">Illustrations</section>
        </div>
    );
};

export default Home;
