// Assets
import { ReactComponent as RightChevron } from "@/assets/shared/desktop/icon-right-arrow.svg";
import useMediaQuery, { screens } from "@/hooks/userMediaQuery";
import { useEffect } from "react";

interface Props {
    bgImage: {
        small?: string;
        medium?: string;
        large: string;
        xLarge?: string;
    };
    title: string;
}

const ServiceCard = ({ bgImage, title }: Props) => {
    const sm = useMediaQuery(screens.sm);
    const lg = useMediaQuery(screens.lg);
    const xl = useMediaQuery(screens.xl);

    return (
        <div
            className="flex flex-col items-center gap-4 rounded-2xl bg-cover bg-no-repeat py-24 px-14 uppercase text-white"
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
            <h2 className="heading-2">{title}</h2>
            <span className="flex items-center gap-4 font-medium tracking-[.3125rem]">
                View Projects
                <RightChevron />
            </span>
        </div>
    );
};

export default ServiceCard;
