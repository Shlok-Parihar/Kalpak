import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { Input, Breadcrumb, Button, Divider, Modal } from "antd";
import Navbar from "../../components/Navbar/NavBar";
import Items from "../../components/ItemsInCart/Items";
import data from "../../data/DummyDB.json";

const CartPage = () => {
  const id = JSON.parse(localStorage.getItem("cart")) || [];
  const productID = data.furniture.filter((item) => id.includes(item.id));

  console.log("this is your id - ", id);
  console.table("this is your product id based product.", productID);

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("OFFER : 10% on cart price");
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    handleShippingCharges();
  }, []);

  const handleOK = () => {
    setShowModal(false);
  };

  const thanks4Purchase = () => {
    console.log(localStorage);
    setShowModal(true);
  };

  // const total = updatedPrice + addedPrice, until each id in the id.foreach is not traversed.

  const getPrice = (id) => {
    const product = productID.find((prod) => String(prod.id) === id);
    const addedPrice = product ? product.price : null; //running number
    return addedPrice;
  };

  let updatedPrice = 0;
  id.forEach((id) => {
    const total = updatedPrice + getPrice(id);
    updatedPrice = total;
    return updatedPrice;
  });

  const CalcGST = (updatedPrice) => {
    let GST = (28 / 100) * updatedPrice;
    return GST;
  };

  const handleShippingCharges = () => {
    if (id.length == 0) {
      setShipping(0);
      return shipping;
    } else {
      setShipping(40);
      return shipping;
    }
  };

  const grandTotalPrice = updatedPrice + shipping + CalcGST(updatedPrice);
  console.log(updatedPrice, "updateP");
  console.log(shipping, "shipping");
  console.log(Number(CalcGST(updatedPrice).toFixed(2), "Number CalcGST"));

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(grandTotalPrice - grandTotalPrice * 0.1);
  }, [grandTotalPrice]);

  const PromoCode = (e) => {
    const pCode = e.target.value.trim();
    if (pCode.toLowerCase() === "smaran") {
      setDiscount(grandTotalPrice - grandTotalPrice * 0.25);
      setMessage("NEW OFFER : 25% on cart price");
      return discount;
    } else {
      setDiscount(grandTotalPrice - grandTotalPrice * 0.1);
      setMessage("OFFER : 10% on cart price");
      return discount;
    }
  };

  return (
    <>
      <Navbar />

      <div className="cartMainContainer">
        <h1 className="title">Your Cart</h1>
        {/* <Breadcrumb className="cart-breadcrumbs" items={breadcrumbs} /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {id.length === 0 ? (
            <div className="left">
              <div
                style={{
                  placeItems: "center",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h1>ADD SOMETHING TO YOUR CART</h1>
                <img
                  style={{ alignSelf: "center", display: "block" }}
                  src="/images/emtycart.png"
                  alt="Cart is Empty"
                />
              </div>
            </div>
          ) : (
            <div className="left">
              {productID.map((i) => (
                <Items
                  image={i.image}
                  name={i.name || "Product_Name"}
                  id={i.id}
                  price={i.price}
                  dimensions={`${i.dimensions.length} x ${i.dimensions.height} x ${i.dimensions.width}`}
                  description={i.description}
                />
              ))}

              {/* <li>1st item here populate me from id</li>
            <p>product detials list sort of a table</p>
            <p>tbale has a counter on product quantity</p>
            <p>image title and price</p>
            <p>finally we got the product id in localStorage</p>
            <p>
              now from localStorage get the id from the cart and use it to
              display the content metioned above.
            </p>
            <p>
              also price will be added with the + - like a counter instantly.{" "}
            </p>

            <p> there are few issues here. find if you added a temp one.</p>
            <p>
              {" "}
              border radius to the items card and if no cards then "Add
              something to your cart.!" friendly type message wirtten in
              translucent type text.{" "}
            </p> */}
            </div>
          )}

          <div className="right">
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <p className="cart-font">Promo Code : </p>
              <Input
                onPressEnter={PromoCode}
                style={{ maxWidth: "55%", height: "45px", alignSelf: "center" }}
              >
                {/* <Button type="primary">Submit</Button> */}
              </Input>
              {/* 
if (promoCode === "Smaran") {
  discount = 25% // on Cart Price.
} else {
  discount = 10%
} */}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Total </p> <p>{updatedPrice}</p>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Shipping Charges : </p> <p>{`${shipping}`}</p>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>GST : </p>
              <p>{`${CalcGST(updatedPrice).toFixed(1) || "GST"}`}</p>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
              }}
            >
              <p>Discount: </p>
              {message}
              {/* <Button
                onClick={() =>
                  setDiscount(grandTotalPrice - grandTotalPrice * 0.1)
                }
              >
                Apply
              </Button> */}
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Grand Total : </p>
              <p>{discount.toFixed(2)}</p>
              {/* <p>{isNaN(discount) ? " " : discount.toFixed(2)}</p> */}
            </div>
            <div style={{ justifyContent: "end", display: "flex" }}>
              <Button
                type="primary"
                color="green"
                variant="outlined"
                onClick={thanks4Purchase}
              >
                Checkout
              </Button>
            </div>
            <Modal
              title="Thank you for purchasing"
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
