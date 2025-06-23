import React,{useState, useEffect} from 'react';

import NavBar from "../../components/Navbar/NavBar.jsx";
import HeroSection from "./modules/HeroSection.jsx";
import Products from "./modules/Products.jsx";
// import Testimonials from "./modules/Testimonials.jsx";
// import ContactUs from "./modules/ContactUs.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// import HeroSection from "./modules/HeroSection.jsx";


const LandingPage = () => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    
    return <>

    <NavBar/>
    <HeroSection/>
    <Products/>
    {/* <Testimonials/>
    <ContactUs/> */}
    <Footer/>
    
    </>
}

export default LandingPage;
