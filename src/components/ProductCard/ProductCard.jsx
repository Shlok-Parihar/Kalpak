import React from "react";
import db from "../../data/DummyDB.json";
import { Button } from "antd";
import "./ProductCard.css";
// import productsPage from "../../pages/ProductPage/ProductsPage ";

console.log(db);
console.log("2", db.furniture); // 10 obj's array
console.log("3", db.furniture[0].name);

let Lol = db.furniture;

const ProductCard = ({ name, image, dimension }) => {
  return (
    <>
      <div className="ProductCard">
        <h4>{name}</h4>
          <img 
          src={image} 
          alt={name} 
          className="prodImage"
          // style={{backgroundColor:"red"}}
          />
        <Button className="prodButton">
          <img src="/images/newTab.png" alt="new tab icon" height="25px" width="25px" />
        </Button>
        <p className="prodDimensions">{dimension}</p>
      </div>
      {/* <div className="ProductCard">
        {Lol.map((i) => 
        (

          <div key={i.id} className="ProductCarditem">
            <h3>{i.name}</h3>
          </div>
        ))}
      </div> */}
    </>
  );
};
export default ProductCard;
