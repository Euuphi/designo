import logoLight from "assets/shared/desktop/logo-light.png";
import { ReactComponent as FacebookLogo } from "assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as YoutubeLogo } from "assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as TwitterLogo } from "assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "assets/shared/desktop/icon-instagram.svg";
// Components
import FooterNav from "./FooterNav";

const Footer = () => {
    return (
        <footer className="bg-black py-16 text-[#8e8e8f]">
            <div className="m-auto w-11/12">
                <div className="flex flex-col items-center md:flex-row">
                    <img
                        className="w-52 py-8"
                        src={logoLight}
                        alt="Designo logo"
                    />
                    <FooterNav />
                </div>
                <div className="flex flex-col items-center gap-12">
                    <address className="space-y-2 text-center not-italic">
                        <h1 className="font-bold">Designo Central Office</h1>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </address>
                    <div className="space-y-1 text-center">
                        <h1 className="font-bold">
                            Contact Us (Central Office)
                        </h1>
                        <p>
                            P :{" "}
                            <a
                                className="hover:text-peach hover:underline"
                                href="tel:+1 253 863 8967"
                            >
                                +1 253-863-8967
                            </a>
                        </p>
                        <p>
                            M :{" "}
                            <a
                                className="hover:text-peach hover:underline"
                                href="mailto:contact@designo.co"
                            >
                                contact@designo.co
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <FacebookLogo className="social-icon" />
                        <YoutubeLogo className="social-icon" />
                        <TwitterLogo className="social-icon" />
                        <PinterestLogo className="social-icon" />
                        <InstagramLogo className="social-icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
