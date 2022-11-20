// Assets
import { ReactComponent as RightChevron } from "@/assets/shared/desktop/icon-right-arrow.svg";
// Hooks
import useMediaQuery, { screens } from "@/hooks/userMediaQuery";

interface Props {
    bgImage: {
        small?: string;
        medium?: string;
        large: string;
        xLarge?: string;
    };
    title: string;
    customClass?: string;
}

const ServiceCard = ({ bgImage, title, customClass }: Props) => {
    const sm = useMediaQuery(screens.sm);
    const lg = useMediaQuery(screens.lg);
    const xl = useMediaQuery(screens.xl);

    return (
        <div
            className={`service-card group h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-cover bg-no-repeat text-center uppercase text-white hover:bg-cover ${customClass}`}
            style={
                {
                    "--bg-image": `url('${
                        xl && lg && sm
                            ? bgImage.xLarge || bgImage.large
                            : lg
                            ? bgImage.large
                            : sm
                            ? bgImage.medium || bgImage.large
                            : bgImage.small || bgImage.large
                    }')`,
                    "background-image": "var(--bg-image)",
                } as React.CSSProperties
            }
        >
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-transparent py-24 px-14 transition-all duration-300 group-hover:bg-peach/[0.7]">
                <h2 className="heading-2">{title}</h2>
                <span className="flex items-center gap-4 font-medium tracking-[.3125rem]">
                    View Projects
                    <RightChevron className="transition-transform duration-300 group-hover:translate-x-3" />
                </span>
            </div>
        </div>
    );
};

export default ServiceCard;
