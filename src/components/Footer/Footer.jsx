import React from "react";
import styles from "./Footer.css";
import logo from "../../images/logo.jpg"

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img className="Logo" src={logo} alt="Logo"/>

        <div>
          <div>
            <h4>
              <p>Careers</p>
            </h4>
          </div>
          <div>
            <h4>
              <p>Services</p>
            </h4>
          </div>
          <div>
            <h4>
              <p>Contact Us</p>
            </h4>
          </div>
        </div>

        <div>
          <div>
            <h4>
              <a href="https://www.instagram.com/thefifthwall5?igsh=MWswNnlydnV2dHl6ZQ==" target="_blank">Instagram</a>
            </h4>
          </div>
          <div>
            <h4>
              <a href="https://www.linkedin.com/in/smaran-parihar-ba928b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">LinkedIn</a>
            </h4>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
