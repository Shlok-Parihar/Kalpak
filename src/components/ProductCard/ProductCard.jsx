// import React from "react";
// import db from "../../data/DummyDB.json";
// import { Button } from "antd";
// import "./ProductCard.css";
// // import productsPage from "../../pages/ProductPage/ProductsPage ";

// console.log(db);
// console.log("2", db.furniture); // 10 obj's array
// console.log("3", db.furniture[0].name);

// let Lol = db.furniture;

// const ProductCard = ({ id, name, image, dimension, link }) => {
//   return (
//     <>
//       <div className="ProductCard">
//         <h4>{name}</h4>
//         <img
//           src={image}
//           alt={name}
//           className="prodImage"
//         // style={{backgroundColor:"red"}}
//         />
//         <a href={`/products/${id}`} target="_blank" rel="noopener noreferrer">
//           <Button className="prodButton">
//             <img src="/images/newTab.png" alt="new tab icon" height="25px" width="25px" />
//           </Button>
//         </a>
//         <p className="prodDimensions">{dimension}</p>
//       </div>
//       {/* <div className="ProductCard">
//         {Lol.map((i) => 
//         (

//           <div key={i.id} className="ProductCarditem">
//             <h3>{i.name}</h3>
//           </div>
//         ))}
//       </div> */}
//     </>
//   );
// };
// export default ProductCard;



import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./ProductCard.css";

const ProductCard = ({ id, name, image, dimension }) => {
  const navigate = useNavigate();

  const navFun = () => {
    console.log(id,"...")
    navigate(`/products/${id}`)
  }

  return (
    <div className="ProductCard">
      <h4 style={{textAlign:"center"}}>{name}</h4>
      <img src={image} alt={name} className="prodImage" />
      <button
        className="prodButton"
        onClick={navFun}
      >
        <img src="/images/newTab.png" alt="new tab icon" height="25px" width="25px" />
      </button>
      <p className="prodDimensions">{dimension}</p>
    </div>
  );
};

export default ProductCard;


/*
<html>
<head>
<style>
.test{
color:"red";
}
#test{
color:"green";
} // id has more prioirty and this is how i f*ed up.
.test{
color:"white";
}
</style>
</head>
<body>
  <h1 class="test" id="test">Heading</h1>
</body>
</html>

*/