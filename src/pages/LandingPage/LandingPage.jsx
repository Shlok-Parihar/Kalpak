import React,{useState, useEffect} from 'react';

import NavBar from "../../components/Navbar/NavBar.jsx";
import HeroSection from "./LPmodules/HeroSection.jsx";
import Products from "./LPmodules/Products.jsx";
// import Testimonials from "./LPmodules/Testimonials.jsx";
// import ContactUs from "./LPmodules/ContactUs.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// import HeroSection from "./LPmodules/HeroSection.jsx";




// color pallete : 
// Richer Sage Green    #778A6B
// Deep Walnut          #4E342E
// Birch White          #F5F5F3
// Sandalwood Tan       #A47551
// Warm Oak             #C19A6B

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
