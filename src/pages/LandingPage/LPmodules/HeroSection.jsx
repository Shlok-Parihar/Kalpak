import React, { useState, useEffect } from "react";
import styles from "../LPmodules/commonCSS.css"
import { Carousel, Box, Text, Image } from 'grommet'
import { Button } from "antd";
// import bedRoomImg from "../../../images/Bedroom.png"
// import livingRoomImg from "../../../images/Living Room.png"
// import kitchenImg from "../../../images/Kitchen.png"
import lvRoom from "../../../images/heroSectionCarousel-1.jpg"
// import lvRoom2 from "../../../images/heroSectionCarousel-2.jpg"
import kitchRoom from "../../../images/herosectionCarousel-3.jpg"
import bedRoom from "../../../images/herosectionCarousel-4.jpg"
import wardRobe from "../../../images/herosectionCarousel-5.jpg"
import { useScroll } from "framer-motion";
import WoodenButton from "../../../components/WoodenButton/woodenButton";
import ScrollVelocity from '../../../components/ReactBits/ScrollVelocity';
import ShinyText from '../../../components/ReactBits/ShinyText';
import wood from "../../../images/image.png"

const HeroSection = () => {

    const [z, setZ] = useState(0)


    return <>
        <div className="HeroSection">
            {/* <h1>Hero Section</h1> */}

            <Carousel wrap>
                <Box
                    fill
                    align="center"
                    justify="center"
                    background="light-3"
                    height="large">
                    <Image src={bedRoom} fit="cover"
                        height="750px"
                        width="920px" />
                </Box>
                <Box fill
                    align="center"
                    justify="center"
                    background="light-3"
                    height="large">
                    <Image
                        src={lvRoom}
                        fit="cover"
                        height="750px"
                        width="920px" />
                </Box>
                <Box fill
                    align="center"
                    justify="center"
                    background="light-4"
                    height="large">
                    <Image
                        src={kitchRoom}
                        fit="cover"
                        height="750px"
                        width="920px" />
                </Box>
                <Box fill
                    align="center"
                    justify="center"
                    background="light-4"
                    height="large">
                    <Image
                        src={wardRobe}
                        fit="cover"
                        height="750px"
                        width="920px" />
                </Box>
            </Carousel>

            {/* <WoodenButton /> */}

            <Button
                variant="solid"
                size="large"
                style={{
                    boxShadow: "4px 6px 10px 2px rgba(65, 47, 30, 0.5)",
                    width: "200px",      // set width to 200px
                    height: "70px",      // optional: set height
                    fontSize: "2rem",
                    fontFamily: "Garamond, serif",
                    background: "rgb(97, 54, 42)",
                    backgroundImage: `url(${wood})`,
                    zIndex: z,
                    position: "relative",
                    transform: "translate(495px, -125px)"
                }}
                onMouseEnter={() => setZ(105)}
                onMouseLeave={() => setZ(0)}
            >
                <ShinyText text="Buy Now" disabled={false} speed={2} className='custom-class' />
            </Button>

            <ScrollVelocity
                texts={[' 50% Sale ', ' Premium Designs ']}
                // velocity={velocity}
                className="custom-scroll-text"
            />

        </div>
    </>
}
export default HeroSection;