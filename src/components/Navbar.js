import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";
import navlogo from "../assets/photos/navlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, handleShow] = React.useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <Link to="/home" className="motion--title">
        <div className="nav__logo-container">
          <img
            src={navlogo}
            alt="Navi Luxury Farm Logo"
            className="nav--image"
          />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="nav__logo">Navi Luxury Farm</div>
          </motion.div>
        </div>
      </Link>
      <div
        className={`nav__menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="nav__icon-line"></span>
        <span className="nav__icon-line"></span>
        <span className="nav__icon-line"></span>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/home">Home</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/about">About</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/gallery">Gallery</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/testimonials">Testimonials</CustomLink>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <li className="link">
            <CustomLink to="/contact">Contact Us</CustomLink>
          </li>
        </motion.div>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActiveLink = useMatch(resolvedPath.pathname, { exact: true });

  return (
    <li className={isActiveLink ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
