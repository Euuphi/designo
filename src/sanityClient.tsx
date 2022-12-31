import client from "@sanity/client";

const sanityClient = client({
	projectId: "spnhhw3i",
	dataset: "production",
	apiVersion: "2022-12-31",
	useCdn: false,
});

export default sanityClient;
