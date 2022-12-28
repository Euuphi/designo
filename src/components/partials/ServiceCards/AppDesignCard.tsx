import ServiceCard from "./ServiceCard";
// Assets
import appDesignMobile from "@assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "@assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "@assets/home/desktop/image-app-design.jpg";

const AppDesignCard = () => {
	return (
		<ServiceCard
			bgImage={{
				small: appDesignMobile.src,
				medium: appDesignTablet.src,
				large: appDesignDesktop.src,
			}}
			to="services/app-design"
			title="App Design"
		/>
	);
};

export default AppDesignCard;
