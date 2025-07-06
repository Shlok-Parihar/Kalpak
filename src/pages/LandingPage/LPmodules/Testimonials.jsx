import { Divider } from "antd";
import React from "react";
import SpotlightCard from "../../../components/SpotlightCard/SpotlightCard";
import "./commonCSS.css";

const Testimonials = () => {
  return (
    <>
      <div>
        <Divider
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginBottom: "5px",
            borderColor: "#C97B3A",
          }}
        >
          <h2
            style={{
              fontFamily: "garamond",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            Testimonials
          </h2>
        </Divider>

        <div style={{display:"flex", flexDirection:"row"}}>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(193, 154, 107, 0.4)"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/images/daryl.jpg" alt="person image" />
              <p>
                "hi there this is my testimonials. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptates rem doloremque illo
                voluptatem?"
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(193, 154, 107, 0.4)"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/images/daryl.jpg" alt="person image" />
              <p>
                "hi there this is my testimonials. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptates rem doloremque illo
                voluptatem?"
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(193, 154, 107, 0.4)"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src="/images/daryl.jpg" alt="person image" />
              <p>
                "hi there this is my testimonials. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptates rem doloremque illo
                voluptatem?"
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
