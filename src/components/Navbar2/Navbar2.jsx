import React, { useState, useEffect } from 'react';
// import "./Navbar2.css"
import product from "../../data/DummyDB.json"
import { Breadcrumb, Button, Badge } from "antd"

const Navbar2 = () => {
    const [flag, setFlag] = useState(0)
    // setFlag(some props or something that you use to fetch things in the local storage. 1 should be stored in the local storage. flag = 1)
    return <>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Breadcrumb
                style={{
                    margin: "20px"
                }}
                items={[
                    {
                        title: <a style={{ fontWeight: "bold" }} href='/'>Home</a>,
                    },
                    {
                        title: <a style={{ color: "#A47551", fontWeight: "bold" }}>{product.name}</a>,
                    }]
                } />
            <Badge count={flag}>
                <Button type='primary' color='green' variant='solid'>Go to Cart <img src='/images/cart.png' height={25} width={25} /></Button>
            </Badge>
        </div>
    </>
}

export default Navbar2;