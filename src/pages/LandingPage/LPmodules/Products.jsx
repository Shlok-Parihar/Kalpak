import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Divider } from 'antd';
import products from "../../../data/DummyDB.json"

const Products = () => {


    return <>
        <div>
            <Divider style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginBottom: "5px",
                borderColor: "#C97B3A"
            }}>
                <h2 style={{ fontFamily: "garamond", fontWeight: "bold", fontSize:"40px" }}>Our Products</h2>
            </Divider>

            <div className="ProductPageScroll" style={{ height: "80vh", display: "flex", flexDirection: "row", overflowX: "auto" }}>
                {
                    products.furniture.map((p)=>(
                        <ProductCard
                        key={p.id}
                        dimension={`${p.dimensions.length} x ${p.dimensions.width} x ${p.dimensions.height}`}
                        image={p.image}
                        name={p.name}
                        />
                    ))
                }
                
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>



        </div>
    </>
}

export default Products;