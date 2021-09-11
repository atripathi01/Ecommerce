

import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
// import { IoMdMail } from "react-icons/io5";
import './style.css';

const FooterMenu = ({ isVisible }) => {

    return (
       <>
        <div className="foo">
            <div className="menue">
            <motion.h1 className="contact-title"
                >MENU</motion.h1>
                <ul className="wrapper">
                    <li className="listt"><a className="linklist"  href="#">home</a></li>
                    <li className="listt"><Link className="linklist" to="/product">collection</Link></li>
                    <li className="listt"><Link className="linklist" to="/cart">cart</Link></li>
                    <li className="listt"><Link className="linklist" to="/login">login</Link></li>
                    <li className="listt"><Link className="linklist" to="/resister">signup</Link></li>
                </ul>
            </div>
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
            <div className="location">
            <motion.h1 className="contact-title"
                >LOCATION</motion.h1>
                <p> 134/136istflr,<br /> Near N K Market Zaveri Bazar, Kalbadevi.<br /> City: Mumbai · <br />Street: D-304, Jayant Apt, Sahara, Andheri (e</p>
            </div>

        </div>
            <div className="r-2021">
                <p className="right-foo">
                    Copyright&copy;2021@ayush_tripathi
                </p>
            </div>
            </>


    );

}

export default FooterMenu
