import React, { useState, useEffect } from 'react';

import NavBar from "../../components/Navbar/NavBar.jsx";
import HeroSection from "./LPmodules/HeroSection.jsx";
import Products from "./LPmodules/Products.jsx";
import Founder from './LPmodules/Founder.jsx';
import Testimonials from "./LPmodules/Testimonials.jsx";
// import ContactUs from "./LPmodules/ContactUs.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./LandingPage.css"

// import HeroSection from "./LPmodules/HeroSection.jsx";


const LandingPage = () => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    useEffect(() => {
        window.scrollTo({top:"0", behavior:"smooth"})
    },[])
    return <>

        <div className="LandingPageContainer">


            <div><NavBar /></div>
            <div id="home"><HeroSection /></div>
            <div id="products"><Products /></div>
            <div id="founder"><Founder /></div>
            <div id="testimonials"><Testimonials /></div>
            <div id="contactUs"><Footer /></div>
            {/* <ContactUs/> */}
            
        </div>

    </>
}

export default LandingPage;
