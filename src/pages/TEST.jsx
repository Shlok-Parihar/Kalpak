import React from "react";
import "./TEST.css"

const WorkTestPage = () => {
    return <>
        <div className="exploreSection">
            <div className="one"><h2 >Explore our Programs</h2></div>
            <div className="two"><h2 >Explore our Network</h2></div>
        </div>
        <div style={{ paddingTop: "30px", paddingBottom: "30px", alignSelf:"center"}}>
            Upcoming Calendar of Events
            <div className="calendar">
                Calendar goes here.
            </div>
        </div>
        <div className="Reg_Log">
            <h4>Register Now</h4>
            <h4>Already a Member? Log in</h4>
        </div>
        <div>
            Curious to See 
        </div>
    </>
}
export default WorkTestPage;