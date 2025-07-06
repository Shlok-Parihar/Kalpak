import React, { useState, useEffect } from "react";
import styles from "./Navbar.css"
import FluidGlass from '../FluidBar/FluidGlass'

const Navbar = () => {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 785) {
        setDark(true);
      } else {
        setDark(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>


    {/*  IMPORTANT INFO BELOW
 This component requires a 3D model to function correctly.
 You can find three example models in the 'public/assets/3d' directory of the repository:
 - 'lens.glb'
 - 'bar.glb'
 - 'cube.glb'
 Make sure to place these models in the correct directory or update the paths accordingly. */}

    {/* <div style={{ height: '600px', position: 'relative' }}>
  <FluidGlass 
    mode="bar" // or "bar", "cube"
    lensProps={{
      scale: 0.25,
      ior: 1.15,
      thickness: 5,
      chromaticAberration: 0.1,
      anisotropy: 0.01  
    }}
    // barProps={} // add specific props if using bar mode
    // cubeProps={} // add specific props if using cube mode
  />
</div> */}


    <div className={`Navbar${dark ? " dark" : " light"}`}>
      <img src="/images/logo.png" alt="logo" height={50} width={60} />

      <div style={{ alignContent: "center", justifyContent: "center" }}>
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