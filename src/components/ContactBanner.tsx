import useBreakpoints from "@/hooks/useBreakpoints";
import Button from "./Button";

const ContactBanner = () => {
    const { md } = useBreakpoints("md");

    return (
        <div
            className={
                "-mb-28 flex -translate-y-1/2 flex-col items-center gap-8 rounded-2xl px-6 py-16 text-center text-white md:-mb-32 md:-translate-y-2/3 lg:flex-row lg:justify-between lg:px-24 lg:py-[4.5rem] lg:text-left " +
                "bg-peach bg-cta bg-[45%_50%] bg-no-repeat md:bg-[35%_50%] lg:bg-[right_center] xl:bg-[length:80%]"
            }
        >
            <div>
                <h1 className="mb-6 text-[32px] leading-9">
                    Let's talk about <br /> your project
                </h1>
                <p className="text-[15px]">
                    Ready to take it to the next level? Contact us today and
                    find out {md && <br />} how our expertise can help your
                    business grow.
                </p>
            </div>
            <Button text="Get In Touch" />
        </div>
    );
};

export default ContactBanner;
