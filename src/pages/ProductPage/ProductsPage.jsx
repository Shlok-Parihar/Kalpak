import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import prod from "../../data/DummyDB.json";
import Navbar2 from "../../components/Navbar2/Navbar2.jsx";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../LandingPage/LPmodules/Testimonials";
import WhyChooseUs from "../LandingPage/LPmodules/WhyChooseUs";
import "../ProductPage/ProductsPage.css";
import { message, Rate, Breadcrumb, Button, Badge } from "antd";
import { a } from "framer-motion/client";

const ProductPage = (p) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // i want to use an array and that array will be storing the product ids and it will be used on the cart page to show products in a list based on the ids in the array.
  // store the array in localstorage.

  const product = prod.furniture.find((p) => String(p.id) === String(id));

  const [flag, setFlag] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: "0%", behavior: "instant" });
  });





  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.includes(product.id)) {
      cart.push(product.id); // so this is where we actually push the id into the cart hence no more null in localStorage
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    message.success("Added to cart");
    setFlag(1);
  };




  

  if (!product) return <div>Product not found</div>;
  return (
    <>
      <div id="prodContainerMain">
        <Navbar2 />
        <div className="ProductDetails">
          <div id="one">
            <img
              src={product.image}
              alt="product image"
              className="prod_Image"
            />
          </div>

          <div className="prodInfo">
            <div id="two">
              <div className="nameID">
                <div>
                  <h2>{product.name}</h2>
                  <h4>Product ID: {product.id}</h4>
                </div>
                <p style={{ maxWidth: "50%" }}>{product.description}</p>
              </div>
              <div className="priceCart">
                <h3>Price : Rs. {product.price}</h3>
                <Button onClick={handleCart} className="CartButton">
                  {flag === 1 ? (
                    <span id="test">ADDED ✔</span>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span id="test" style={{ color: "fff" }}>
                        Add to
                      </span>{" "}
                      <img
                        src="/images/cart.png"
                        alt="CartIcon"
                        height={25}
                        width={25}
                        style={{ alignSelf: "center" }}
                      />
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <div id="three">
              <div className="Rating">
                <img
                  src="/images/People/daryl.jpg"
                  alt="customer_image"
                  className="Cust_Img"
                />
                <Rate disabled defaultValue={4.5} />
              </div>

              <div className="Review">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt, nulla cupiditate minima doloremque hic rem similique
                  voluptas libero officia recusandae consequatur vero
                  dignissimos!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <WhyChooseUs /> */}
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};
export default ProductPage;

// import { useParams } from "react-router-dom";
// import { message } from "antd";
// import "../ProductPage/ProductsPage.css"
// import prod from "../../data/DummyDB.json";

// const ProductsPage = () => {
//     const { id } = useParams();
//     console.warn(id)
//     const product = prod.furniture.find(p => String(p.id) === String(id));

//     if (!product) return <div>Product not found</div>;

//     return (
//         <div>
//             <img src={product.image} alt={product.name} height={400} width={600} />
//             <div>
//                 <h2>{product.name}</h2>
//                 <h4>Product ID: {product.id}</h4>
//                 <p>{product.description}</p>
//                 <div>
//                     <p><b>{product.price}</b></p>
//                     <button onClick={message.success}><img src="./images/cart.png" alt="CartIcon" /></button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;
