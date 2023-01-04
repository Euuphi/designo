import React from "react";

interface Props {
	icon: React.ElementType;
	title: string;
	text: string;
}

/**
 *
 *
 * @param {React.ElementType} icon - Icon as a React Component/Element
 * @param {string} title - Title of card
 * @param {string} text - Body text of card
 * @return {*}
 */
const IllustrationCard = ({ icon: Icon, title, text }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:text-center">
			<Icon />
			<div>
				<h2 className="heading-3 mb-8 uppercase md:mb-4 lg:mb-8">
					{title}
				</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default IllustrationCard;
