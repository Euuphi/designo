import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/layouts/nav/Header/Header";
import Footer from "@/layouts/nav/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
