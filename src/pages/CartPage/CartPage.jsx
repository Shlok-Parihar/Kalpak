import React from "react";
import "./CartPage.css";
import { Button, Table } from "antd";

const CartPage = () => {
  return (
    <>
      <h2>Your Cart</h2>

      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}d-flex flex row space between>
        <div>
          <p>product detials list sort of a table</p>
          <p>tbale has a counter on product quantity</p>
          <p>image title and price</p>
        </div>
        <div>
          <p>items </p>
          <p>total cost</p>
          <Button type="primary" color="green" variant="outlined">Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
