import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { SidebarData } from './SideMenu';
import './Style.css';
import { IconContext } from 'react-icons/lib';
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}




const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);



    return (
        <div className="Whole">
            <IconContext.Provider value={{ color: '#ffffff' }}>
                <div className="navbar">
                    <ul className="Nav-container">

                        <li className="menu">
                            <Link to="#" className="menu-bar " >
                                <GiHamburgerMenu onClick={showSidebar} />
                            </Link>
                        </li>
                        <li className=" logo">
                            <Link to="/" className="ecart" ><motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}>E-Cart</motion.div></Link>
                        </li>

                        {/* <div className="right-div" >
               <Link to="#" className="nav-link" >Login</Link>/ <Link to="#" className="nav-link">Resistor</Link>
           </div> */}
                    </ul>

                </div>
                <motion.nav className={sidebar ? 'nav-menu active' : 'nav-menu'}
                    animate={sidebar ? "open" : "closed"}
                    variants={variants}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                {/*  <button className="back-btn" >back</button> */}
                                <BiArrowBack />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </motion.nav>
            </IconContext.Provider>

        </div>

    );
}

export default Navbar