import React from "react";
import styles from "./Navbar.css"
import logo from "../../images/logo.png"

const Navbar = () => {
    return <>
    <div className="Navbar">
        <img src={logo} alt="logo" height={50} width={60} />

        <div style={{alignContent:"center", justifyContent:"center"}}>
            <a className="navbarThings" href="#home">Home</a>
            <a className="navbarThings" href="#products">Products</a>
            <a className="navbarThings" href="#founder">Founder</a>
            <a className="navbarThings" href="#testimonials">Testimonials</a>
            <a className="navbarThings" href="#contactUs">Contact Us</a>
        </div>

        <div>

        </div>
    </div>
    </>
}

export default Navbar;