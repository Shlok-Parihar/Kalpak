import React from "react";
import { Divider } from "antd";

const Founder = () => {
  return (
    <>
      <Divider
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "5px",
          borderColor: "#C97B3A",
        }}
      >
        <h2 style={{ fontFamily: "garamond", fontWeight: "bold", fontSize:"40px" }}>
          Our Founder's Vision
        </h2>
      </Divider>

      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <img
          src="/images/smaran.jpg"
          alt="founder image"
          height="500px"
          width="500px"
          style={{ borderRadius: "10px", margin: "30px" }}
        />
        <p
          style={{
            padding: "10px",
            fontFamily:"sans-serif",
            lineHeight:"3.5rem",
            fontSize: "40px",
            textAlign: "left",
          }}
        >
          At Kalpak, our founder believes in creating beautiful, functional
          spaces that inspire comfort and creativity. With a passion for quality
          craftsmanship and thoughtful design, we strive to bring unique
          furniture and decor to every home. Our vision is to make exceptional
          living accessible to all, while staying true to our values of
          delivering quality, innovation, and customer satisfaction.
        </p>
      </div>
    </>
  );
};

export default Founder;
