import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import prod from "../../data/DummyDB.json"
import Testimonials from "../LandingPage/LPmodules/Testimonials"
import WhyChooseUs from "../LandingPage/LPmodules/WhyChooseUs"
import "../ProductPage/ProductsPage.css"
import { message, Rate } from 'antd';

const ProductPage = (p) => {
    const { id } = useParams();
    const product = prod.furniture.find(p => String(p.id) === String(id));

    useEffect(() => {
        window.scrollTo({top:"0%", behavior:"instant"})
    })

    if (!product) return <div>Product not found</div>;
    return <>
        <div id='prodContainerMain'>
            <div className='ProductDetails'>
                <div id='one'>
                    <img src={product.image} alt="product image" className='prod_Image' />
                </div>

                <div className='prodInfo'>
                    <div id='two'>
                        <div className='nameID'>
                            <div>
                                <h2>{product.name}</h2>
                                <h4>Product ID: {product.id}</h4>
                            </div>
                            <p style={{ maxWidth: "50%" }}>{product.description}</p>
                        </div>
                        <div className='priceCart'>
                            <h3>Price : Rs. {product.price}</h3>
                            <button onClick={() => message.success("Added to cart")} className='CartButton'>
                                <span id="test">Add to</span> <img src="/images/cart.png" alt="CartIcon" height={50} width={50} />
                            </button>
                        </div>
                    </div>
                    <div id='three'>

                        <div className='Rating'>
                            <img src='/images/People/daryl.jpg' alt='customer_image' className='Cust_Img' />
                            <Rate disabled defaultValue={4.5} />
                        </div>

                        <div className='Review'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nulla cupiditate minima doloremque hic rem
                                similique voluptas libero officia recusandae consequatur vero dignissimos!</p>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <Testimonials />
        </div>
    </>
}
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