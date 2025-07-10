import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import prod from "../../data/DummyDB.json"
import "../ProductPage/ProductsPage.css"
import { message } from 'antd';

const ProductPage = (p) => {
    const { id } = useParams();
    const product = prod.furniture.find(p => String(p.id) === String(id));

    if (!product) return <div>Product not found</div>;
    return <>
        <div id='prodContainerMain'>
            <div className='ProductDetails'>
                <div id='one'>
                    <img src={product.image} alt="" height={400} width={600} />
                </div>

                <div id='two'>
                    <div className='nameID'>
                        <h2>{product.name}</h2>
                        <h4>Product ID: {product.id}</h4>
                    </div>
                    <p>{product.description}</p>
                    <div className='priceCart'>
                        <p><b>{product.price}</b></p>
                        <button onClick={message.success} className='CartButton'>
                            <span>Add to</span> <img src="/images/cart.png" alt="CartIcon" height={50} width={50} />
                        </button>
                    </div>
                </div>

            </div>
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