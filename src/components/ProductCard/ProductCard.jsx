import React from "react";
import db from "../../data/DummyDB.json";

console.log(db)
console.log("2", db.furniture) // 10 obj's array
console.log("3", db.furniture[0].name) 

let Lol = db.furniture;

const ProductCard = () => {
  return (
    <>
      <div>
        <h3>{Lol.map((i) => 
        {
            let nama = i.name
            return <div>{nama}</div>
        }
    )}
    </h3>
        <br />
        <p></p>
      </div>
    </>
  );
};
export default ProductCard;
