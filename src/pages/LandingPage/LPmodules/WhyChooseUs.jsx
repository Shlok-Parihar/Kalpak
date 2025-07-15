import React from "react";
import "./commonCSS.css";
import { Divider } from "antd";

const WhyChooseUs = () => {




    return <>
        <div className="WCU_Main">
            <Divider>Why Choose US</Divider>
            <div className="InfoCardGrid">

                {/* <div className="InfoCardsGrid1"> */}
                    <div className="info" id="cards1">
                        <p>Delivery on Time</p>
                    </div>
                {/* </div> */}

                <div className="InfoCardsGrid2">
                    <div className="info" id="cards2">
                        <p>Exquisite materials used</p>
                    </div>
                    <div className="info" id="cards3">
                        <p>Bespoke Desgins</p>
                    </div>
                </div>

                <div className="InfoCardsGrid3">
                    <div className="info" id="cards4">
                        <p>We are trusted Nationwide</p>
                    </div>
                    <div className="info" id="cards5">
                        <p>Eco-Friendly Practices</p>
                    </div>
                </div>

            </div>

        </div>
    </>
}

export default WhyChooseUs;