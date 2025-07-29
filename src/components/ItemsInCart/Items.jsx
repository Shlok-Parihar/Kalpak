import { List, Button } from "antd";
import React, { useState, useEffect } from "react";
import "./Items.css"



const Items = ({ image, name, id, dimensions, price, quantity }) => {

    // useEffect(() => {
    //     console.log("I have Arrived")
    // }, [])

    const [count, setCount] = useState(0)



    return <>
        <div className="mainItemsContainer">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <img className="productImage-InCart" src={image} alt="Product Image" />

                <div className="productDetails-InCart">
                    <h3 style={{ fontFamily: "Geneva", marginTop:"5px" }}>{name} name</h3>
                    <p>Product ID : {id}</p>
                    <p>Dimensions : {dimensions}</p>
                    <p>Quantity : {quantity}</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {/* <Button onClick={setCount(++count)}><h2>Remove</h2></Button>
                    
                    <Button onClick={setCount(--count)}><h2>Add</h2></Button> */}
                    </div>
                </div>
            </div>
            <div className="Cptn-price">
                Captain Price
                {price}
            </div>
        </div>
    </>
}

export default Items;