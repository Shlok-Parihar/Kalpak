import React from "react";
import "./commonCSS.css";
import { Divider } from "antd";
import DotGrid from '../../../components/DotGridBG/DotGrid';

const WhyChooseUs = () => {




    return <>
        <Divider
            style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginBottom: "5px",
                borderColor: "#C97B3A",
            }}
        >
            <h2 style={{
                fontFamily: "garamond",
                fontWeight: "bold",
                fontSize: "40px",
            }}>Why Choose Us</h2></Divider>

        <div className="WCU_Main">

            <div style={{
                width: '100%',
                height: '680px',
                position: 'absolute',
                top:820,
                left: 0,
                zIndex: 0,
                opacity: 0.2  // makes it non-intrusive
            }}>
                <DotGrid
                    dotSize={7}
                    gap={12}
                    baseColor="#12e655"
                    activeColor="#80512d"
                    proximity={109}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            <div className="InfoCardGrid">

                {/* <div className="InfoCardsGrid1"> */}
                <div className="info" id="cards1">
                    <p className="feats">Delivery on time</p>
                </div>
                {/* </div> */}

                <div className="InfoCardsGrid2">
                    <div className="info" id="cards2">
                        <p className="feats">Exquisite materials</p>
                    </div>
                    <div className="info" id="cards3">
                        <p className="feats">Bespoke desgins</p>
                    </div>
                </div>

                <div className="InfoCardsGrid3">
                    <div className="info" id="cards4">
                        <p className="feats">Nationally trusted</p>
                    </div>
                    <div className="info" id="cards5">
                        <p className="feats">Eco-Friendly practices</p>
                    </div>
                </div>

            </div>

        </div>
    </>
}

export default WhyChooseUs;