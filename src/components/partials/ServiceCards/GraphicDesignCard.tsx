import ServiceCard from "./ServiceCard";
// Assets
import graphicDesignMobile from "@assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "@assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "@assets/home/desktop/image-graphic-design.jpg";

const GraphicDesignCard = () => {
	return (
		<ServiceCard
			bgImage={{
				small: graphicDesignMobile.src,
				medium: graphicDesignTablet.src,
				large: graphicDesignDesktop.src,
			}}
			to="/services/graphic-design"
			title="Graphic Design"
		/>
	);
};

export default GraphicDesignCard;
