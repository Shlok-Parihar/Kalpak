import React from "react";
import styles from "./Footer.css";
import logo from "../../images/logo.png";
import map from "../../images/location.jpg";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img className="Logo" src={logo} alt="Logo" />

        <div>
          <div>
            <h4>
              <p id="FooterText">Contact Us :</p>
            </h4>
          </div>
          <div>
            <h4>
              <a
                id="FooterText"
                href="mailto:smaranparihar00@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Us
              </a>
            </h4>
          </div>
          <div>
            <h4>
              <a
                id="FooterText"
                href="tel:+91 8530230509"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call Us
              </a>
            </h4>
          </div>
        </div>

        <div>
          <div>
            <h4>
              <p id="FooterText">Get In Touch :</p>
            </h4>
          </div>
          <div>
            <h4>
              <a
                href="https://www.instagram.com/thefifthwall5?igsh=MWswNnlydnV2dHl6ZQ=="
                target="_blank"
                id="FooterText"
              >
                Instagram
              </a>
            </h4>
          </div>
          <div>
            <h4>
              <a
                href="https://www.linkedin.com/in/smaran-parihar-ba928b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                id="FooterText"
                target="_blank"
              >
                LinkedIn
              </a>
            </h4>
          </div>
        </div>

        <div>
          <h4>
            <p id="FooterText">Our Location : </p>
          </h4>
        </div>

        <div>
          <img src={map} alt="location" height="210px" width="350px" />
        </div>
      </div>
    </>
  );
};

export default Footer;
