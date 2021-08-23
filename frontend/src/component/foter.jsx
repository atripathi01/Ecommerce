

import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";

// import { IoMdMail } from "react-icons/io5";
import './style.css';

const FooterMenu = ({ isVisible }) => {

    return (

        <div className="foo">
            <div className="my-contact">
                <motion.h1 className="contact-title"
                >CONTACTS</motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}>
                    <ul className="contact-link">
                        <li className="links"><a href="#"><IoLogoFacebook /></a></li>
                        <li className="links"><a href="#"><IoLogoInstagram /></a></li>
                        <li className="links"><a href="#"><IoLogoTwitter /></a></li>
                        {/* <li className="links"><a href="#"><IoLogoGithub /></a></li> */}
                        {/* <li className="links"><a href="mailto:ayushtripathi4113@gmail.com"><IoMdMail /></a></li> */}
                    </ul>
                </motion.div>
            </div>
            <div className="r-2021">
                <p className="right-foo">
                    Copyright&copy;2021@ayush_tripathi
                </p>
            </div>
        </div>


    );

}

export default FooterMenu
