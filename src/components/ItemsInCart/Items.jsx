import { List, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import "./Items.css";

const Items = ({ image, name, id, dimensions, price, description }) => {
  // useEffect(() => {
  //     console.log("I have Arrived")
  // }, [])

  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count >= 25) {
      setCount(25);
      message.warning("Maximum Limit Exceeded");
    } else {
      setCount((count) => count + 1);
    }
  };

  const handleDel = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((count) => count - 1);
    }
  };

  return (
    <>
      <div className="mainItemsContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <img
            className="productImage-InCart"
            src={image}
            alt="Product Image"
          />

          <div className="productDetails-InCart">
            <h2 style={{ fontFamily: "Geneva", marginTop: "5px" }}>{name}</h2>
            <span>Product ID : {id}</span>
            <span>Dimensions : {`${dimensions}`}</span>
            <span className="descriptionSpan">{description}</span>
            {/* <p>Quantity : {quantity}</p> */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* <Button onClick={() => setCount(++count)}><h2>Remove</h2></Button>
                    <p style={{ margin: "0 10px" }}>{count}</p>
                    <Button onClick={setCount(() => --count)}><h2>Add</h2></Button> */}
            </div>
          </div>
        </div>
        <div className="Cptn-price">
          Price : {price}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => handleDel()}>Remove</Button>
            <h3>
              <b>{count}</b>
            </h3>
            <Button onClick={handleAdd}>Add</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
