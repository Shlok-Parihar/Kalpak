import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { Breadcrumb, Button, Divider, Modal } from "antd";
import Navbar from "../../components/Navbar/NavBar";

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOK = () => {
    setShowModal(false);
  };

  const thanks4Purchase = () => {
    console.log(localStorage);
    setShowModal(true);
  };

  const breadcrumbs = [
    {
      title: "Home",
    },
    {
      title: "Cart",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="cartMainContainer">
        <Divider className="title">
          <h1>Your Cart</h1>
        </Divider>
        <Breadcrumb items={breadcrumbs} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            <p>product detials list sort of a table</p>
            <p>tbale has a counter on product quantity</p>
            <p>image title and price</p>
            <p>finally we got the product id in localStorage</p>
            <p>now from localStorage get the id from the cart and use it to display the content metioned above.</p>
            <p>also price will be added with the + - like a counter instantly. </p>
          </div>
          <div className="right">
            <p>items </p>
            <p>total cost</p>
            <Button
              type="primary"
              color="green"
              variant="outlined"
              onClick={thanks4Purchase}
            >
              Checkout
            </Button>

            <Modal
              title="Thank you for your purchase"
              onOk={handleOK}
              open={showModal}
              onCancel={handleOK}
              cancelButtonProps={{ style: { display: "none" } }}
              closable
            >
              Order has been placed successfully.
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
