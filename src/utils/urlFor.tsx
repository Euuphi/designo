import sanityClient from "@/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: string) {
	return builder.image(source);
}

export default urlFor;
