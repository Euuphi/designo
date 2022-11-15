import logoLight from "assets/shared/desktop/logo-light.png";
import facebookLogo from "assets/shared/desktop/icon-facebook.svg";
import youtubeLogo from "assets/shared/desktop/icon-youtube.svg";
import twitterLogo from "assets/shared/desktop/icon-twitter.svg";
import pinterestLogo from "assets/shared/desktop/icon-pinterest.svg";
import instagramLogo from "assets/shared/desktop/icon-instagram.svg";
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
                        <img src={facebookLogo} alt="Facebook logo" />
                        <img src={youtubeLogo} alt="Youtube logo" />
                        <img src={twitterLogo} alt="Twitter logo" />
                        <img src={pinterestLogo} alt="Pinterest logo" />
                        <img src={instagramLogo} alt="Instagram logo" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
