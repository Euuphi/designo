import ServiceCard from "./ServiceCard";
// Assets
import webDesignMobile from "@assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "@assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "@assets/home/desktop/image-web-design-small.jpg";
import webDesignDesktopLarge from "@assets/home/desktop/image-web-design-large.jpg";

interface Props {
	rowSpan?: boolean;
}

/**
 * Web Design card component
 *
 * @param {boolean} rowSpan - Span 2 rows when set to true. Defaulted to false
 */
const WebDesignCard = ({ rowSpan = false }: Props) => {
	return (
		<ServiceCard
			bgImage={{
				small: webDesignMobile.src,
				medium: webDesignTablet.src,
				large: webDesignDesktop.src,
				xLarge: webDesignDesktopLarge.src,
			}}
			title="Web Design"
			to="/services/web-design"
			customClass={rowSpan ? "lg:row-span-2" : undefined}
		/>
	);
};

export default WebDesignCard;
