import React from "react";
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                {/* <ul className="menuItems">
                    <li className="menuItem"></li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul> */}
                <div className="infoText">
                Welcome to Movix, your ultimate destination for discovering and exploring the world of movies and TV shows. Whether you're a fan of action-packed blockbusters, heartwarming dramas, or binge-worthy series, we've got you covered.
</div>
                <div className="socialIcons">
                   
                   <span className="icon">
                     <a href="https://www.linkedin.com/in/pranav-dua-023811222" target="_blank" rel="noopener noreferrer">
                       <FaLinkedin />
                       </a>
                   </span>
                   <span className="icon">
                   <a href="https://github.com/pranavdua02" target="_blank" rel="noopener noreferrer">
                       <FaGithub />
                       </a>
                   </span>
               </div>                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
