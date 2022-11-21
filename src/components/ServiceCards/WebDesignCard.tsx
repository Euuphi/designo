import ServiceCard from "./ServiceCard";
// Assets
import webDesignMobile from "@/assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "@/assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "@/assets/home/desktop/image-web-design-small.jpg";
import webDesignDesktopLarge from "@/assets/home/desktop/image-web-design-large.jpg";

const WebDesignCard = () => {
    return (
        <ServiceCard
            bgImage={{
                small: webDesignMobile,
                medium: webDesignTablet,
                large: webDesignDesktop,
                xLarge: webDesignDesktopLarge,
            }}
            title="Web Design"
            to="services/web-design"
            customClass="lg:row-span-2"
        />
    );
};

export default WebDesignCard;
