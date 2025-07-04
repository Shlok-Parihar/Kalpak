import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Divider } from 'antd';

const Products = () => {


    return <>
        <div>
            <Divider style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginBottom: "5px",
                borderColor: "#C97B3A"
            }}>
                <h2 style={{ fontFamily: "garamond", fontWeight: "bold" }}>Our Products</h2>
            </Divider>

            <div className="ProductPageScroll" style={{ height: "80vh", display: "flex", flexDirection: "row", overflowX: "auto" }}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>



        </div>
    </>
}

export default Products;