import { socialImgs } from "../constants";
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a className="logo" href="https://docs.google.com/document/d/e/2PACX-1vSJSEDj2eOH7z9JgDnNpd03rPKlzq7H6uRkP0w5XrG0DqBwqvPARc79djMiQvMd-A/pub" target="_blank">
                        <div className="logo">
                            <span className="logo card">Resume</span>
                        </div>
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a href="https://www.linkedin.com/in/daniel-better-707853316/" target="_blank">
                                <img src={socialImg.imgPath} alt="social icon"/>
                            </a>

                        </div>

                    ))}
                    <div className="icon">
                        <a href="https://github.com/DanielBetter12" target="_blank">
                            <img src="/images/GitHub.png" alt="github"/>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Daniel Better. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;