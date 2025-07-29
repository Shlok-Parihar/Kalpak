import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { Input, Breadcrumb, Button, Divider, Modal } from "antd";
import Navbar from "../../components/Navbar/NavBar";
import Items from "../../components/ItemsInCart/Items";

const CartPage = () => {

  const id = localStorage.getItem("cart")

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
        <Breadcrumb className="cart-breadcrumbs" items={breadcrumbs} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            
            <h2>Your Items</h2>
            <li>1st item here populate me from id</li>
            <p>product detials list sort of a table</p>
            <p>tbale has a counter on product quantity</p>
            <p>image title and price</p>
            <p>finally we got the product id in localStorage</p>
            <p>now from localStorage get the id from the cart and use it to display the content metioned above.</p>
            <p>also price will be added with the + - like a counter instantly. </p>


            <Items
            // name={idame}
            
            />
          </div>

          <div className="right">
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <p className="cart-font">Promo Code : </p>
              <Input style={{ maxWidth: "55%", height: "45px", alignSelf: "center" }}></Input>
            </div>
            <Divider />
            <p>total cost</p>

            <Divider />
            <Divider />
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
