import "./App.css";
// import Routes from "react-router-dom"
import ProductCard from "./components/ProductCard/ProductCard";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "../src/pages/ProductPage/ProductsPage";
// import CartPage from "./components/LandingPage";
// import CheckoutPage from "./components/LandingPage";

function App() {
  return (
    
      <div className="App">
        <LandingPage />
        <ProductsPage />
      {/* <CartPage />
      <CheckoutPage /> */}
      </div>
  );
}

export default App;
