import { useState } from "react";
import useBreakpoints from "@/hooks/useBreakpoints";
// Assets
import logoLight from "assets/shared/desktop/logo-light.png";
import { ReactComponent as FacebookLogo } from "assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as YoutubeLogo } from "assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as TwitterLogo } from "assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "assets/shared/desktop/icon-instagram.svg";
// Components
import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";
import ContactBanner from "../ContactBanner";

const Footer = () => {
    const [showContentBanner, setShowContentBanner] = useState(true);
    const { md } = useBreakpoints("md");

    return (
        <footer className="mt-96 bg-black">
            <div
                className={`container relative m-auto pb-16 text-[#8e8e8f] md:py-20 ${
                    showContentBanner ? "pt-0 md:pt-0" : "pt-16"
                }`}
            >
                {showContentBanner && <ContactBanner />}
                <div className="flex flex-col items-center py-2 md:mb-8 md:flex-row md:justify-between md:border-b md:border-grey-dark md:pb-10">
                    <NavLink to="/">
                        <img
                            className="w-52 pb-8 md:pb-0"
                            src={logoLight}
                            alt="Designo logo"
                        />
                    </NavLink>
                    {!md && <hr className="w-full border-t border-grey-dark" />}
                    <FooterNav />
                </div>
                <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-44 xl:gap-52">
                    <address className="space-y-2 text-center not-italic md:text-left">
                        <h1 className="font-bold">Designo Central Office</h1>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </address>
                    <div className="space-y-1 text-center md:text-left">
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
                    <div className="flex gap-4 md:ml-auto md:self-end">
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
