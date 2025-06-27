import React from "react";
import db from "../../data/DummyDB.json";

console.log(db)
console.log("2", db.furniture) // 10 obj's array
console.log("3", db.furniture[0].name)

let Lol = db.furniture;

const ProductCard = () => {
  return (
    <>
      <div className="ProductCard">
        {Lol.map((i) => 
        (

          <div key={i.id} className="ProductCarditem">
            <h3>{i.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductCard;
