import React from "react";
import db from "../../data/DummyDB.json";
import { Button } from "antd";
import newTab from "../../images/newTab.png";
import "./ProductCard.css"
import productsPage from "../../pages/ProductPage";

console.log(db)
console.log("2", db.furniture) // 10 obj's array
console.log("3", db.furniture[0].name)

let Lol = db.furniture;

const ProductCard = () => {
  return (
    <>
      <div className="ProductCard">
        <Button className="prodButton" onClick={() => productsPage}>
          <img src={newTab} alt="new tab icon" height="25px" width="25px" />
        </Button>
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
